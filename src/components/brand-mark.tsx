import Image from "next/image";

type BrandMarkProps = {
  size?: "header" | "hero" | "footer";
  variant?: "positive" | "negative";
  className?: string;
};

const dimensions = {
  header: { width: 120, height: 79 },
  hero: { width: 265, height: 174 },
  footer: { width: 180, height: 118 },
};

export function BrandMark({
  size = "header",
  variant = "positive",
  className = "",
}: BrandMarkProps) {
  if (size === "header") {
    const toneClass =
      variant === "negative"
        ? "text-white"
        : "text-[var(--coffee-900)]";

    const accentClass =
      variant === "negative"
        ? "text-white/68"
        : "text-[rgba(53,14,9,0.64)]";

    return (
      <div
        className={`brand-mark brand-mark--${size} ${toneClass} ${className}`.trim()}
      >
        <div className="brand-wordmark">
          <span className="brand-wordmark__line">MADAGI PRATAS</span>
          <span className={`brand-wordmark__line brand-wordmark__line--sub ${accentClass}`.trim()}>
            ATACADO
          </span>
        </div>
      </div>
    );
  }

  const asset =
    variant === "negative"
      ? "/brand/logo-negative.png"
      : "/brand/logo-positive.png";

  const alt = variant === "negative" ? "Logo da marca" : "Logo da marca";

  return (
    <div className={`brand-mark brand-mark--${size} ${className}`.trim()}>
      <Image
        src={asset}
        alt={alt}
        width={dimensions[size].width}
        height={dimensions[size].height}
        className="h-auto w-full"
        priority={size !== "footer"}
      />
    </div>
  );
}
