import { VaultIcon } from './VaultIcon'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-vault-500/10 blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-vault-400/8 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] rounded-full bg-vault-600/10 blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(244,189,111,1) 1px, transparent 1px), linear-gradient(90deg, rgba(244,189,111,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Animated icon */}
        <div className="animate-float mb-8">
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-vault-500/30 blur-2xl scale-110" />
            <VaultIcon className="relative w-24 h-24 drop-shadow-2xl" />
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-vault-800/60 border border-vault-600/40 text-vault-300 text-sm font-medium backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-vault-400 animate-pulse-slow" />
          Open Source · Free Forever
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 leading-[1.05]">
          <span className="text-vault-50">Your audiobooks.</span>
          <br />
          <span className="text-gradient">Your device.</span>
          <br />
          <span className="text-vault-50">Your rules.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-vault-300 text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed font-light">
          Kōwhai is a beautiful, no-subscription audiobook player for Android.
          Point it at any folder, hit play — and it handles the rest. Background playback,
          smart chapter navigation, and your progress saved automatically.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          {/* APK download */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-2xl bg-vault-500/50 blur-lg group-hover:blur-xl transition-all duration-300" />
            <a
              href="https://github.com/mattsteednz/kowhai/releases/download/v1.6.2/app-release.apk"
              className="relative flex items-center gap-3 px-6 py-4 bg-vault-600/80 hover:bg-vault-500/90 border border-vault-400/40 hover:border-vault-300/60 rounded-2xl backdrop-blur-sm transition-all duration-200"
            >
              <AndroidIcon className="w-8 h-8 flex-shrink-0 text-vault-100" />
              <div className="text-left">
                <div className="text-xs text-vault-300 font-medium uppercase tracking-widest">Download for Android</div>
                <div className="text-vault-50 font-bold text-lg leading-tight">Get the APK <span className="text-sm font-normal text-vault-300">v1.6.2</span></div>
              </div>
            </a>
          </div>

          {/* GitHub */}
          <a
            href="https://github.com/mattsteednz/kowhai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-vault-700/60 text-vault-200 hover:text-vault-50 hover:border-vault-500 hover:bg-vault-800/40 transition-all duration-200 group"
          >
            <GitHubIcon className="w-6 h-6" />
            <div className="text-left">
              <div className="text-xs text-vault-400 font-medium uppercase tracking-widest">View source on</div>
              <div className="font-bold text-lg leading-tight group-hover:text-gradient">GitHub</div>
            </div>
          </a>
        </div>

        {/* Play Store coming soon note */}
        <div className="mt-4 flex items-center gap-2 text-vault-500 text-sm">
          <PlayStoreIcon className="w-4 h-4" />
          <span>Coming soon to the Play Store</span>
        </div>

        {/* Waveform decoration */}
        <div className="mt-20 flex items-end gap-1 h-16 opacity-30">
          {[3,5,8,12,6,14,9,16,11,7,15,10,5,13,8,4,12,7,16,9,5,11,6,14,8,3,10,7,15,5].map((h, i) => (
            <div
              key={i}
              className="w-1.5 rounded-full bg-vault-400"
              style={{
                height: `${h * 4}px`,
                animation: 'pulse 2s ease-in-out infinite',
                animationDelay: `${(i * 0.12) % 2}s`,
              }}
            />
          ))}
        </div>
        <p className="mt-3 text-vault-600 text-sm">No subscriptions. No cloud. Just your books.</p>
      </div>
    </section>
  )
}

function AndroidIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.523 15.341a.96.96 0 0 1-.96-.96V9.64a.96.96 0 1 1 1.92 0v4.741a.96.96 0 0 1-.96.96zm-11.046 0a.96.96 0 0 1-.96-.96V9.64a.96.96 0 1 1 1.92 0v4.741a.96.96 0 0 1-.96.96zM8.343 5.01l-.97-1.68a.24.24 0 0 1 .088-.327.24.24 0 0 1 .327.088l.983 1.7A6.669 6.669 0 0 1 12 4.2c1.03 0 2.003.22 2.88.617l.982-1.7a.24.24 0 0 1 .327-.088.24.24 0 0 1 .088.327l-.97 1.68A6.54 6.54 0 0 1 18.48 9.6H5.52a6.54 6.54 0 0 1 2.823-4.59zM10.08 7.2a.72.72 0 1 0 0-1.44.72.72 0 0 0 0 1.44zm3.84 0a.72.72 0 1 0 0-1.44.72.72 0 0 0 0 1.44zm4.8 2.88H5.28c-.265 0-.48.215-.48.48v6.48c0 1.06.86 1.92 1.92 1.92h.48v2.4a.96.96 0 1 0 1.92 0v-2.4h5.76v2.4a.96.96 0 1 0 1.92 0v-2.4h.48a1.92 1.92 0 0 0 1.92-1.92v-6.48a.48.48 0 0 0-.48-.48z"/>
    </svg>
  )
}

function PlayStoreIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.18 23.76c.3.16.65.18.97.05L14.84 12 3.18.2c-.32-.13-.67-.11-.97.05C1.84.56 1.5 1 1.5 1.5v21c0 .5.34.94.84 1.26H2.18z" fill="#EA4335"/>
      <path d="M19.84 9.5l-2.71-1.56L14.84 12l2.29 2.06 2.71-1.56c.77-.45.77-1.55 0-2z" fill="#FBBC04"/>
      <path d="M3.15 23.81 14.84 12 3.18.2C3.1.23 3.03.28 2.97.34L14.84 12 2.97 23.66c.06.05.12.1.18.15z" fill="#4285F4"/>
      <path d="m3.15.2 11.69 11.8 2.29-2.06L5.42.58C4.69.16 3.78.22 3.15.2z" fill="#34A853"/>
      <path d="M3.15 23.81c.63-.03 1.54.1 2.27-.32l11.71-6.43-2.29-2.06L3.15 23.81z" fill="#34A853"/>
    </svg>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}
