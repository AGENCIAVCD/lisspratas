type BrandMarkProps = {
  size?: "header" | "hero" | "footer";
  className?: string;
};

export function BrandMark({
  size = "header",
  className = "",
}: BrandMarkProps) {
  return (
    <div className={`brand-lockup ${className}`.trim()} data-size={size}>
      <span className="brand-monogram">L</span>
      <span className="brand-copy">
        <span className="brand-script">iss</span>
        <span className="brand-support">PRATAS</span>
      </span>
    </div>
  );
}
