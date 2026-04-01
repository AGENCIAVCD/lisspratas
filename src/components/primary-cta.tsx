import { registrationUrl } from "@/lib/site-data";

type PrimaryCtaProps = {
  label: string;
  className?: string;
};

export function PrimaryCta({ label, className = "" }: PrimaryCtaProps) {
  return (
    <a
      href={registrationUrl}
      target="_blank"
      rel="noreferrer"
      className={`cta-pill ${className}`.trim()}
    >
      <span>{label}</span>
      <span aria-hidden="true" className="cta-pill__icon">
        ↗
      </span>
    </a>
  );
}
