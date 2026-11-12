"use client";

import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { upload } from "@vercel/blob/client";
import { updateSettingsAction, type FormState } from "../../actions";

const inputClass =
  "mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

function SaveButton({ disabled }: { disabled: boolean }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending || disabled} className="btn-outline w-full py-2">
      {pending ? "Kaydediliyor…" : "Ayarları kaydet"}
    </button>
  );
}

export default function PostSettingsForm({
  postId,
  category,
  coverImageUrl,
  coverAlt,
  categories,
}: {
  postId: string;
  category: string | null;
  coverImageUrl: string | null;
  coverAlt: string | null;
  categories: { key: string; label: string }[];
}) {
  const [state, formAction] = useFormState<FormState, FormData>(updateSettingsAction, null);
  const [cover, setCover] = useState(coverImageUrl ?? "");
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");

  async function handleFile(file: File | undefined) {
    if (!file) return;
    setUploading(true);
    setUploadError("");
    try {
      const blob = await upload(`blog/${file.name}`, file, {
        access: "public",
        handleUploadUrl: "/api/admin/upload",
      });
      setCover(blob.url);
    } catch (error) {
      setUploadError((error as Error).message || "Yükleme başarısız.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="postId" value={postId} />
      <input type="hidden" name="coverImageUrl" value={cover} />

      <label className="block">
        <span className="text-sm font-medium">Kategori</span>
        <select name="category" defaultValue={category ?? ""} className={inputClass}>
          <option value="">— Yok —</option>
          {categories.map((c) => (
            <option key={c.key} value={c.key}>
              {c.label}
            </option>
          ))}
        </select>
      </label>

      <div>
        <span className="text-sm font-medium">Kapak görseli</span>
        {cover ? (
          <div className="mt-1 space-y-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={cover} alt="" className="aspect-[16/9] w-full rounded-lg object-cover border" />
            <button
              type="button"
              onClick={() => setCover("")}
              className="text-xs text-red-600 hover:underline"
            >
              Görseli kaldır
            </button>
          </div>
        ) : (
          <p className="mt-1 text-xs text-gray-500">
            Görsel yoksa sitede renkli bir yer tutucu gösterilir. 1200×675 px (16:9) önerilir.
          </p>
        )}
        <input
          type="file"
          accept="image/jpeg,image/png,image/webp,image/avif"
          disabled={uploading}
          onChange={(e) => handleFile(e.target.files?.[0])}
          className="mt-2 block w-full text-sm"
        />
        {uploading && <p className="text-xs text-gray-500 mt-1">Yükleniyor…</p>}
        {uploadError && <p className="text-xs text-red-600 mt-1">{uploadError}</p>}
      </div>

      <label className="block">
        <span className="text-sm font-medium">Görsel açıklaması (alt metin)</span>
        <input
          name="coverAlt"
          defaultValue={coverAlt ?? ""}
          placeholder="Görselde ne var? (erişilebilirlik ve SEO için)"
          className={inputClass}
        />
      </label>

      {state && (
        <p className={`text-sm ${state.ok ? "text-green-700" : "text-red-600"}`}>
          {state.message}
        </p>
      )}

      <SaveButton disabled={uploading} />
    </form>
  );
}
