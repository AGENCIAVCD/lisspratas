type IconProps = {
  className?: string;
};

function iconClassName(className = "") {
  return `h-[1.15rem] w-[1.15rem] stroke-[1.7] ${className}`.trim();
}

export function GemIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClassName(className)} aria-hidden="true">
      <path d="M7 4.5h10l3 4-8 11-8-11 3-4Z" stroke="currentColor" />
      <path d="M9 4.5 6 8.5h12L15 4.5" stroke="currentColor" />
      <path d="m12 19.5-2.5-11" stroke="currentColor" />
      <path d="m12 19.5 2.5-11" stroke="currentColor" />
    </svg>
  );
}

export function SparkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClassName(className)} aria-hidden="true">
      <path d="m12 4 1.7 4.3L18 10l-4.3 1.7L12 16l-1.7-4.3L6 10l4.3-1.7L12 4Z" stroke="currentColor" />
      <path d="M18.5 4.5v3" stroke="currentColor" strokeLinecap="round" />
      <path d="M20 6h-3" stroke="currentColor" strokeLinecap="round" />
      <path d="M5.5 15.5v2.5" stroke="currentColor" strokeLinecap="round" />
      <path d="M6.75 16.75h-2.5" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}

export function ChatIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClassName(className)} aria-hidden="true">
      <path d="M5 6.5h14v9H9l-4 3v-12Z" stroke="currentColor" />
      <path d="M8 10h8" stroke="currentColor" strokeLinecap="round" />
      <path d="M8 13h5" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClassName(className)} aria-hidden="true">
      <path d="M12 4.5c2 1.6 4.4 2.3 7 2.5v5.2c0 4.1-2.6 6.8-7 8.8-4.4-2-7-4.7-7-8.8V7c2.6-.2 5-1 7-2.5Z" stroke="currentColor" />
      <path d="m9.5 12 1.7 1.7 3.3-3.4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TicketIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClassName(className)} aria-hidden="true">
      <path d="M4.5 9a2.5 2.5 0 0 0 0 5v3h15v-3a2.5 2.5 0 0 0 0-5V6h-15v3Z" stroke="currentColor" />
      <path d="M12 6v11" stroke="currentColor" strokeDasharray="2 2" />
    </svg>
  );
}

export function CompassIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClassName(className)} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" />
      <path d="m15.5 8.5-2.1 5.1-5 2 2.1-5 5-2.1Z" stroke="currentColor" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
