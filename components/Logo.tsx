import Image from "next/image";

export default function Logo({
  className = "",
  size = "default",
}: {
  className?: string;
  size?: "default" | "small" | "large";
}) {
  const dimensions = {
    small: { w: 140, h: 140 },
    default: { w: 220, h: 220 },
    large: { w: 300, h: 300 },
  };
  const { w, h } = dimensions[size];

  return (
    <Image
      src="/images/logo.png"
      alt="Doç. Dr. Erkan Elçi Logo"
      width={w}
      height={h}
      className={`w-auto h-auto ${className}`}
      priority
    />
  );
}
