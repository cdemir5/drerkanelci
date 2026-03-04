import Image from "next/image";

export default function Logo({
  className = "",
  size = "default",
}: {
  className?: string;
  size?: "default" | "small" | "large";
}) {
  const dimensions = {
    small: { w: 190, h: 190 },
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
      className={`${size === "small" ? "w-[190px] h-[190px]" : size === "large" ? "w-[300px] h-[300px]" : "w-[220px] h-[220px]"} ${className}`}
      priority
    />
  );
}
