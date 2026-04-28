type Feature = {
  icon: React.ReactNode
  title: string
  description: string
  accent?: boolean
}

const features: Feature[] = [
  {
    icon: <FolderScanIcon />,
    title: 'Smart Library Scanning',
    description: 'Point Kōwhai at any folder and it recursively discovers your audiobooks — MP3, M4B, AAC, FLAC, OGG. No manual importing, no fuss.',
    accent: true,
  },
  {
    icon: <HeadphonesIcon />,
    title: 'Background Playback',
    description: 'Keep listening when your screen turns off or you switch apps. Full lock-screen and notification media controls included.',
  },
  {
    icon: <BookmarkIcon />,
    title: 'Chapter Bookmarks',
    description: 'Bookmark any moment while listening. Name and Notes fields are optional; add as many bookmarks as you need and jump between them instantly.',
  },
  {
    icon: <ChapterIcon />,
    title: 'Chapter Navigation',
    description: 'Jump between chapters with a tap. Supports embedded chapter metadata in both multi-file MP3 books and single-file M4B audiobooks.',
  },
  {
    icon: <ArtIcon />,
    title: 'Cover Art & Metadata',
    description: 'Reads embedded cover art and metadata from audio files. Supports metadata.opf (Calibre/OverDrive format) for enriched book information.',
  },
  {
    icon: <SortIcon />,
    title: 'Last-Played Sort & Filter',
    description: 'Your library sorts by most recently played with human-friendly timestamps. Filter by progress and custom sort options.',
  },
  {
    icon: <DriveIcon />,
    title: 'Google Drive Integration',
    description: 'Stream or download audiobooks from Google Drive. Your progress syncs automatically across devices with optional Sync toggle.',
  },
  {
    icon: <ShieldIcon />,
    title: 'Privacy First',
    description: 'Telemetry is opt-in with a first-run consent gate. Toggle it off anytime in Settings. Your listening data never leaves your device.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-28 px-6">
      {/* Section glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-vault-600/8 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full bg-vault-800/60 border border-vault-600/40 text-vault-300 text-sm font-medium">
            Everything you need
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-vault-50 mb-4">
            Built for serious<br />
            <span className="text-gradient">audiobook listeners</span>
          </h2>
          <p className="text-vault-400 text-lg max-w-xl mx-auto">
            Every feature you'd expect from a premium player — minus the subscription fee.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <FeatureCard key={i} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const isWide = index === 0 || index === 7
  return (
    <div
      className={`
        relative group rounded-2xl p-6 border transition-all duration-300
        ${isWide ? 'sm:col-span-2' : ''}
        ${feature.accent
          ? 'bg-vault-800/50 border-vault-500/50 hover:border-vault-400/70 glow-purple-sm'
          : 'bg-vault-900/40 border-vault-800/40 hover:border-vault-700/60 hover:bg-vault-900/60'
        }
      `}
    >
      {feature.accent && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-vault-500/10 to-transparent pointer-events-none" />
      )}
      <div className="relative">
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${feature.accent ? 'bg-vault-500/30' : 'bg-vault-800/60'}`}>
          <div className="w-5 h-5 text-vault-300">
            {feature.icon}
          </div>
        </div>
        <h3 className="text-vault-50 font-bold text-base mb-2">{feature.title}</h3>
        <p className="text-vault-400 text-sm leading-relaxed">{feature.description}</p>
      </div>
    </div>
  )
}

function FolderScanIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 5a2 2 0 0 1 2-2h3.586a1 1 0 0 1 .707.293L9.707 4.707A1 1 0 0 0 10.414 5H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 9v4M8 11h4" strokeLinecap="round"/>
    </svg>
  )
}

function HeadphonesIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M10 3a7 7 0 0 0-7 7v3a2 2 0 0 0 2 2h1a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H4.07A6.002 6.002 0 0 1 10 4a6.002 6.002 0 0 1 5.93 5H14a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 0 2-2v-3a7 7 0 0 0-7-7z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function BookmarkIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 3a2 2 0 0 0-2 2v12l7-3 7 3V5a2 2 0 0 0-2-2H5z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ChapterIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 6h12M4 10h12M4 14h6" strokeLinecap="round"/>
      <path d="M14 12l3 2-3 2v-4z" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function ArtIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="14" height="14" rx="2" strokeLinecap="round"/>
      <circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" stroke="none"/>
      <path d="M3 13l4-4 3 3 2-2 5 5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function SortIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 5h14M3 10h9M3 15h5" strokeLinecap="round"/>
      <path d="M15 8l2 2 2-2M17 10v-5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ThemeIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="10" cy="10" r="4" strokeLinecap="round"/>
      <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.93 4.93l1.41 1.41M13.66 13.66l1.41 1.41M4.93 15.07l1.41-1.41M13.66 6.34l1.41-1.41" strokeLinecap="round"/>
    </svg>
  )
}

function DriveIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5z" strokeLinecap="round"/>
      <path d="M10 8v4M8 10h4" strokeLinecap="round"/>
      <path d="M14 5h3l-3 3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M10 2L3 5v5c0 4.418 3.134 8.055 7 9 3.866-.945 7-4.582 7-9V5L10 2z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 10l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
