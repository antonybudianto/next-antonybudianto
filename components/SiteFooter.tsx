/**
 * PROPOSAL.md Q5 is open: which of these are actually maintained. All four are
 * kept until that is answered — dropping a live channel is worse than keeping a
 * quiet one. Plain-text email arrives with the Phase 2 contact block.
 */
const LINKS = [
  { name: "GitHub", href: "https://github.com/antonybudianto" },
  { name: "LinkedIn", href: "https://linkedin.com/in/antonybudianto" },
  { name: "X", href: "https://twitter.com/antonybudianto" },
  { name: "Instagram", href: "https://instagram.com/antonybudianto" },
];

export default function SiteFooter() {
  return (
    <footer className="on-field border-t border-rule">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:px-8">
        <div className="grid gap-6 sm:grid-cols-[108px_1fr]">
          <div className="t-label">Contact</div>
          <div className="flex flex-col gap-6">
            <ul className="t-nav flex flex-wrap gap-x-6 gap-y-2">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-mute hover:text-ink"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <p className="t-label">
              &copy; {new Date().getFullYear()} Antony Budianto
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
