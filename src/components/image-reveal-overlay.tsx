type ImageRevealOverlayProps = {
  compact?: boolean;
};

export function ImageRevealOverlay({
  compact = false,
}: ImageRevealOverlayProps) {
  return (
    <>
      <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.2))] backdrop-blur-[14px]" />
      <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.36),transparent_52%)]" />
      <div className="absolute inset-0 z-30 flex items-center justify-center p-4 text-center">
        <div
          className={`rounded-[1.6rem] border border-white/45 bg-[rgba(255,255,255,0.32)] px-5 py-4 text-[var(--coffee-900)] shadow-[0_18px_40px_rgba(58,58,58,0.12)] backdrop-blur-xl ${
            compact ? "max-w-[12rem]" : "max-w-[18rem]"
          }`.trim()}
        >
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-[rgba(53,14,9,0.58)]">
            Preview exclusivo
          </p>
          <p
            className={`mt-2 font-semibold leading-tight ${
              compact ? "text-[0.9rem]" : "text-[1.05rem]"
            }`.trim()}
          >
            Será revelado na live
          </p>
        </div>
      </div>
    </>
  );
}
