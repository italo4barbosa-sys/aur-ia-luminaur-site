export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="auria-logo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.65 0.18 260)" />
          <stop offset="100%" stopColor="oklch(0.75 0.15 280)" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="9" fill="url(#auria-logo)" />
      <path
        d="M24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42"
        fill="none"
        stroke="url(#auria-logo)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <circle
        cx="24"
        cy="24"
        r="18"
        fill="none"
        stroke="url(#auria-logo)"
        strokeWidth="1"
        strokeDasharray="4 6"
        opacity="0.3"
      />
    </svg>
  );
}