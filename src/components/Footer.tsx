import { VaultIcon } from './VaultIcon'

export default function Footer() {
  return (
    <footer className="border-t border-vault-800/30 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <VaultIcon className="w-8 h-8" />
          <div>
            <div className="text-vault-100 font-bold">Kōwhai</div>
            <div className="text-vault-600 text-xs">MIT License · Free forever</div>
          </div>
        </div>

        <div className="flex items-center gap-6 text-vault-500 text-sm">
          <a
            href="/privacy-policy/"
            className="hover:text-vault-300 transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="https://github.com/mattsteednz/kowhai"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-vault-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://github.com/mattsteednz/kowhai/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-vault-300 transition-colors"
          >
            Releases
          </a>
          <a
            href="https://github.com/mattsteednz/kowhai/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-vault-300 transition-colors"
          >
            Issues
          </a>
        </div>

        <div className="text-vault-600 text-xs text-center sm:text-right">
          <div>Built with Flutter · Material 3</div>
          <div>Coming soon to Play Store</div>
        </div>
      </div>
    </footer>
  )
}
