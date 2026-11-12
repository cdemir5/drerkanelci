import Image from "next/image";

export default function Logo({
  className = "",
  size = "default",
}: {
  className?: string;
  size?: "default" | "small" | "large" | "header";
}) {
  // Header: logo cropped to its content (no white margins, correct aspect),
  // so the fixed header stays ~108px tall and doesn't cover page headings.
  if (size === "header") {
    return (
      <Image
        src="/images/logo-header.png"
        alt="Doç. Dr. Erkan Elçi Logo"
        width={217}
        height={240}
        className={`h-[100px] w-auto ${className}`}
        priority
      />
    );
  }

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
