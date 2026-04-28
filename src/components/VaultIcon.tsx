export function VaultIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
      <defs>
        <linearGradient id="vi-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2e1e0c"/>
          <stop offset="55%" stopColor="#1a1208"/>
          <stop offset="100%" stopColor="#0e0a05"/>
        </linearGradient>
        <linearGradient id="vi-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4bd6f"/>
          <stop offset="100%" stopColor="#b87728" stopOpacity="0.65"/>
        </linearGradient>
        <radialGradient id="vi-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e8a94a" stopOpacity="0.15"/>
          <stop offset="100%" stopColor="#e8a94a" stopOpacity="0"/>
        </radialGradient>
        <clipPath id="vi-clip">
          <circle cx="60" cy="60" r="60"/>
        </clipPath>
      </defs>
      <circle cx="60" cy="60" r="60" fill="url(#vi-bg)"/>
      <g clipPath="url(#vi-clip)">
        <circle cx="60" cy="60" r="60" fill="url(#vi-glow)"/>
        <rect x="29" y="42" width="10" height="36" rx="5" fill="url(#vi-bar)"/>
        <rect x="43" y="30" width="10" height="60" rx="5" fill="url(#vi-bar)"/>
        <rect x="57" y="20" width="10" height="80" rx="5" fill="url(#vi-bar)"/>
        <rect x="71" y="30" width="10" height="60" rx="5" fill="url(#vi-bar)"/>
        <rect x="85" y="42" width="10" height="36" rx="5" fill="url(#vi-bar)"/>
      </g>
    </svg>
  )
}
