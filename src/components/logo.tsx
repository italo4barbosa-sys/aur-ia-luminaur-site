export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="auria-logo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.88 0.14 92)" />
          <stop offset="100%" stopColor="oklch(0.7 0.09 185)" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="9" fill="url(#auria-logo)" />
      <circle
        cx="24"
        cy="24"
        r="18"
        fill="none"
        stroke="url(#auria-logo)"
        strokeWidth="2"
        strokeDasharray="8 10"
        opacity="0.7"
      />
    </svg>
  );
}