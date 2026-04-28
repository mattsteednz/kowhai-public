const stack = [
  { label: 'Flutter', sub: 'Cross-platform UI' },
  { label: 'just_audio', sub: 'Gapless playback' },
  { label: 'audio_service', sub: 'Background + lock screen' },
  { label: 'sqflite', sub: 'Position persistence' },
  { label: 'Material 3', sub: 'Dark theme UI' },
  { label: 'Firebase', sub: 'Opt-in telemetry' },
]

export default function TechStack() {
  return (
    <section className="relative py-24 px-6 border-t border-vault-800/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-vault-50 mb-3">
            Solid tech under the hood
          </h2>
          <p className="text-vault-400 text-lg">
            Built with best-in-class Flutter packages for rock-solid audio performance.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-16">
          {stack.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center gap-1 p-5 rounded-2xl bg-vault-900/50 border border-vault-800/40 hover:border-vault-700/60 hover:bg-vault-900/70 transition-all duration-200"
            >
              <span className="text-vault-200 font-semibold text-sm">{item.label}</span>
              <span className="text-vault-500 text-xs">{item.sub}</span>
            </div>
          ))}
        </div>

        {/* Open source callout */}
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-vault-800/60 via-vault-900/60 to-vault-950/80 border border-vault-600/30 rounded-3xl" />
          <div className="absolute inset-0 bg-gradient-to-tr from-vault-500/10 to-transparent pointer-events-none" />
          <div className="relative p-10 flex flex-col sm:flex-row items-center gap-8">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-2xl font-black text-vault-50 mb-2">100% Open Source</h3>
              <p className="text-vault-400 leading-relaxed">
                Kōwhai is MIT licensed and lives on GitHub. Read the code, fork it, contribute —
                or just grab the APK and start listening.
              </p>
            </div>
            <a
              href="https://github.com/mattsteednz/kowhai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-3 px-8 py-4 rounded-2xl bg-vault-500 hover:bg-vault-400 text-white font-bold text-base transition-all duration-200 glow-purple-sm hover:glow-purple"
            >
              <GitHubIcon className="w-5 h-5" />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}
