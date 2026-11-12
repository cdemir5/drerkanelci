"use client";

import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import type { Locale } from "@/i18n/config";
import type { AdminTranslation, Faq } from "@/lib/blog/types";
import { saveTranslationAction, type FormState } from "../../actions";

const inputClass =
  "mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

function Counter({ value, max }: { value: string; max: number }) {
  const over = value.length > max;
  return (
    <span className={`text-xs ${over ? "text-red-600 font-semibold" : "text-gray-400"}`}>
      {value.length}/{max}
    </span>
  );
}

function SubmitButtons({
  isPublished,
  canPublish,
}: {
  isPublished: boolean;
  canPublish: boolean;
}) {
  const { pending } = useFormStatus();
  if (isPublished) {
    return (
      <button type="submit" name="intent" value="save" disabled={pending} className="btn-primary py-2">
        {pending ? "Kaydediliyor…" : "Kaydet (yayındaki sürümü günceller)"}
      </button>
    );
  }
  return (
    <>
      <button type="submit" name="intent" value="save" disabled={pending} className="btn-outline py-2">
        {pending ? "Kaydediliyor…" : "Taslağı kaydet"}
      </button>
      <button
        type="submit"
        name="intent"
        value="publish"
        disabled={pending || !canPublish}
        title={canPublish ? undefined : "Önce Türkçe sürümü yayınlayın"}
        className="btn-primary py-2 disabled:opacity-50 disabled:hover:translate-y-0"
      >
        Kaydet ve yayınla
      </button>
    </>
  );
}

export default function TranslationForm({
  postId,
  locale,
  translation,
  canPublish,
}: {
  postId: string;
  locale: Locale;
  translation: AdminTranslation | undefined;
  canPublish: boolean;
}) {
  const [state, formAction] = useFormState<FormState, FormData>(saveTranslationAction, null);
  const [title, setTitle] = useState(translation?.title ?? "");
  const [excerpt, setExcerpt] = useState(translation?.excerpt ?? "");
  const [metaTitle, setMetaTitle] = useState(translation?.metaTitle ?? "");
  const [metaDescription, setMetaDescription] = useState(translation?.metaDescription ?? "");
  const [faqs, setFaqs] = useState<Faq[]>(translation?.faqs ?? []);

  const slugLocked = Boolean(translation?.publishedAt);
  const isPublished = translation?.status === "published";

  function updateFaq(index: number, key: keyof Faq, value: string) {
    setFaqs((current) => current.map((f, i) => (i === index ? { ...f, [key]: value } : f)));
  }

  return (
    <form action={formAction} className="space-y-5">
      <input type="hidden" name="postId" value={postId} />
      <input type="hidden" name="locale" value={locale} />
      <input type="hidden" name="faqs" value={JSON.stringify(faqs)} />

      <label className="block">
        <span className="flex justify-between text-sm font-medium">
          Başlık <Counter value={title} max={70} />
        </span>
        <input
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className={inputClass}
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium">Adres (slug)</span>
        <input
          name="slug"
          defaultValue={translation?.slug ?? ""}
          disabled={slugLocked}
          placeholder="Boş bırakılırsa başlıktan üretilir"
          className={`${inputClass} font-mono disabled:bg-gray-100 disabled:text-gray-500`}
        />
        <span className="text-xs text-gray-500">
          {slugLocked
            ? "Yayınlandıktan sonra adres değiştirilemez (eski linkler bozulmasın diye)."
            : "Türkçe karakterler otomatik dönüştürülür."}
        </span>
      </label>

      <label className="block">
        <span className="flex justify-between text-sm font-medium">
          Özet <Counter value={excerpt} max={200} />
        </span>
        <textarea
          name="excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          rows={3}
          className={inputClass}
        />
      </label>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="flex justify-between text-sm font-medium">
            SEO başlığı <Counter value={metaTitle} max={60} />
          </span>
          <input
            name="meta_title"
            value={metaTitle}
            onChange={(e) => setMetaTitle(e.target.value)}
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className="flex justify-between text-sm font-medium">
            SEO açıklaması <Counter value={metaDescription} max={155} />
          </span>
          <textarea
            name="meta_description"
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
            rows={2}
            className={inputClass}
          />
        </label>
      </div>

      <label className="block">
        <span className="text-sm font-medium">İçerik (Markdown)</span>
        <textarea
          name="content_md"
          defaultValue={translation?.contentMd ?? ""}
          rows={26}
          className={`${inputClass} font-mono leading-relaxed`}
        />
        <span className="text-xs text-gray-500">
          <code>## Bölüm başlığı</code> · <code>**kalın**</code> · <code>- madde</code> ·{" "}
          <code>[link metni](/miyom/miyom-nedir)</code>
        </span>
      </label>

      <fieldset className="space-y-3">
        <legend className="text-sm font-medium">Sık sorulan sorular</legend>
        {faqs.map((faq, i) => (
          <div key={i} className="rounded-xl border bg-gray-50 p-3 space-y-2">
            <input
              value={faq.question}
              onChange={(e) => updateFaq(i, "question", e.target.value)}
              placeholder="Soru"
              className={inputClass}
            />
            <textarea
              value={faq.answer}
              onChange={(e) => updateFaq(i, "answer", e.target.value)}
              placeholder="Cevap"
              rows={3}
              className={inputClass}
            />
            <button
              type="button"
              onClick={() => setFaqs((current) => current.filter((_, j) => j !== i))}
              className="text-xs text-red-600 hover:underline"
            >
              Bu soruyu sil
            </button>
          </div>
        ))}
        {faqs.length < 12 && (
          <button
            type="button"
            onClick={() => setFaqs((current) => [...current, { question: "", answer: "" }])}
            className="text-sm text-primary hover:underline"
          >
            + Soru ekle
          </button>
        )}
      </fieldset>

      {state && (
        <p
          role="status"
          className={`rounded-lg border p-3 text-sm ${
            state.ok
              ? "border-green-200 bg-green-50 text-green-800"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {state.message}
        </p>
      )}

      <div className="flex flex-wrap gap-3 border-t pt-5">
        <SubmitButtons isPublished={isPublished} canPublish={canPublish} />
      </div>
    </form>
  );
}
