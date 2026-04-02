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
