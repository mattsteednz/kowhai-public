import { VaultIcon } from './VaultIcon'

const LAST_UPDATED = '9 April 2026'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-vault-950 text-vault-100">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-xl bg-vault-950/70 border-b border-vault-800/30">
        <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <VaultIcon className="w-8 h-8" />
          <span className="text-lg font-bold tracking-tight text-vault-50">Kōwhai Audiobook Player</span>
        </a>
        <span className="text-vault-500 text-sm">Privacy Policy</span>
      </nav>

      {/* Content */}
      <main className="max-w-2xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-3xl font-bold text-vault-50 mb-2">Privacy Policy</h1>
        <p className="text-vault-500 text-sm mb-12">Last updated: {LAST_UPDATED}</p>

        <Section title="Overview">
          <p>
            Kōwhai is a local audiobook player. Your audiobook files, titles, and listening
            history never leave your device. The only data we may collect — and only with your
            explicit consent — is anonymous crash reports and basic usage statistics, sent via
            Google Firebase. This data helps us fix bugs and understand which features matter most.
          </p>
          <p>
            You can opt out at any time in <strong className="text-vault-200">Settings → Analytics &amp; crash reports</strong>.
            Opting out has no effect on the app's functionality.
          </p>
        </Section>

        <Section title="Who we are">
          <p>
            Kōwhai is developed by Matt Steed, based in New Zealand. For any privacy-related
            questions, contact us at{' '}
            <a
              href="mailto:privacy@mattsteed.com"
              className="text-vault-400 hover:text-vault-200 underline transition-colors"
            >
              privacy@mattsteed.com
            </a>
            .
          </p>
          <p>
            For users in the UK or EU, Matt Steed acts as the data controller for the limited
            data described in this policy.
          </p>
        </Section>

        <Section title="What we collect and why">
          <p>We collect two categories of data, both optional and both requiring your consent:</p>

          <SubSection title="1. Crash reports (Firebase Crashlytics)">
            <p>When the app crashes unexpectedly, a report is sent containing:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>The stack trace and error message</li>
              <li>Device model and Android version</li>
              <li>App version</li>
            </ul>
            <p>
              Crash reports contain <strong className="text-vault-200">no personal data</strong>.
              Book titles, file paths, and any content you interact with are never included.
            </p>
            <p>
              <strong className="text-vault-200">Purpose:</strong> Diagnosing and fixing app crashes.
            </p>
          </SubSection>

          <SubSection title="2. Usage analytics (Firebase Analytics)">
            <p>Anonymised events are recorded when you interact with app features, such as:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Opening the library or player screen</li>
              <li>Toggling settings (smart rewind, metadata enrichment, etc.)</li>
              <li>Using Cast or chapter navigation</li>
            </ul>
            <p>
              Analytics data does <strong className="text-vault-200">not</strong> include book
              titles, file names, author names, playback positions, or any content from your
              audiobooks. Google Analytics assigns a random device identifier; we never link this
              to your identity.
            </p>
            <p>
              <strong className="text-vault-200">Purpose:</strong> Understanding which features are
              used so we can improve Kōwhai.
            </p>
          </SubSection>
        </Section>

        <Section title="Legal basis (UK &amp; EU users)">
          <p>
            Under the UK GDPR and EU GDPR, we rely on your <strong className="text-vault-200">consent</strong>{' '}
            (Article 6(1)(a)) as the lawful basis for collecting analytics and crash report data.
            You are asked for consent the first time you open the app and can withdraw it at any
            time via Settings without any consequences.
          </p>
        </Section>

        <Section title="Data sharing and selling">
          <p>
            We do <strong className="text-vault-200">not</strong> sell, rent, or share your data
            with any third party for marketing or commercial purposes.
          </p>
          <p>
            Firebase (operated by Google LLC) processes data on our behalf as a data processor
            under Google's Data Processing Terms. Google may store data on servers located in the
            United States. This transfer is covered by the EU Standard Contractual Clauses (SCCs)
            adopted by Google under its Data Processing Terms.
          </p>
          <p>
            You can review Google's privacy practices at{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-vault-400 hover:text-vault-200 underline transition-colors"
            >
              policies.google.com/privacy
            </a>
            .
          </p>
        </Section>

        <Section title="Data retention">
          <p>
            Firebase Analytics retains event-level data for up to 14 months by default.
            Firebase Crashlytics retains crash reports for 90 days. These are Google's standard
            retention periods and apply unless you withdraw consent, in which case no further data
            is sent.
          </p>
          <p>
            All other data (your library, positions, cover art, preferences) is stored exclusively
            on your device and is deleted when you uninstall the app.
          </p>
        </Section>

        <Section title="Your rights">
          <p>
            Depending on where you live, you may have rights including:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-vault-200">Access</strong> — request a copy of the data held about you</li>
            <li><strong className="text-vault-200">Erasure</strong> — request deletion of your data</li>
            <li><strong className="text-vault-200">Rectification</strong> — request correction of inaccurate data</li>
            <li><strong className="text-vault-200">Portability</strong> — receive your data in a structured format</li>
            <li><strong className="text-vault-200">Objection</strong> — object to processing</li>
            <li><strong className="text-vault-200">Withdraw consent</strong> — at any time, in Settings, without penalty</li>
          </ul>
          <p>
            Because analytics data is anonymous and not linked to any identity, we may be unable to
            locate or delete specific records tied to you. To exercise your rights or raise a
            concern, contact us at{' '}
            <a
              href="mailto:privacy@mattsteed.com"
              className="text-vault-400 hover:text-vault-200 underline transition-colors"
            >
              privacy@mattsteed.com
            </a>
            .
          </p>
          <p>
            UK users may also lodge a complaint with the{' '}
            <a
              href="https://ico.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-vault-400 hover:text-vault-200 underline transition-colors"
            >
              Information Commissioner's Office (ICO)
            </a>
            . EU users may contact their national supervisory authority.
          </p>
        </Section>

        <Section title="Children">
          <p>
            Kōwhai is not directed at children under 13. We do not knowingly collect data from
            children. If you believe a child has provided data, please contact us and we will
            arrange deletion.
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p>
            If we make material changes, we will update the date at the top of this page. Continued
            use of the app after changes take effect constitutes acceptance of the revised policy.
            For significant changes we will seek fresh consent where required by law.
          </p>
        </Section>
      </main>

      {/* Footer */}
      <footer className="border-t border-vault-800/30 py-8 px-6 text-center text-vault-600 text-xs">
        <a href="/" className="hover:text-vault-400 transition-colors">← Back to Kōwhai Audiobook Player</a>
      </footer>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-vault-50 mb-4 pb-2 border-b border-vault-800/50">
        {title}
      </h2>
      <div className="space-y-3 text-vault-300 leading-relaxed text-[0.95rem]">
        {children}
      </div>
    </section>
  )
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4 pl-4 border-l-2 border-vault-800">
      <h3 className="text-base font-medium text-vault-200 mb-2">{title}</h3>
      <div className="space-y-2 text-vault-300 leading-relaxed text-[0.95rem]">
        {children}
      </div>
    </div>
  )
}
