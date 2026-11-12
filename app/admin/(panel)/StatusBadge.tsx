import type { PostStatus } from "@/lib/blog/types";

export default function StatusBadge({
  status,
  label,
}: {
  status: PostStatus | null;
  label?: string;
}) {
  const style =
    status === "published"
      ? "bg-green-100 text-green-800 border-green-200"
      : status === "draft"
        ? "bg-amber-50 text-amber-800 border-amber-200"
        : "bg-gray-50 text-gray-400 border-gray-200";
  const text =
    status === "published" ? "Yayında" : status === "draft" ? "Taslak" : "Yok";

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium ${style}`}
    >
      {label && <span className="uppercase">{label}</span>}
      {label ? <span aria-hidden>·</span> : null}
      {text}
    </span>
  );
}
