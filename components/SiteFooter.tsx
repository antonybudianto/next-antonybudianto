/**
 * PROPOSAL.md Q5 is still open: which of these channels are actually
 * maintained. All four are kept until that is answered — dropping a live
 * channel is worse than keeping a quiet one. `/3d` lives here rather than in the
 * header, so the scenes are reachable without competing for a nav slot.
 */
const LINKS = [
  { name: "GitHub", href: "https://github.com/antonybudianto" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/antonybudianto/" },
  { name: "X", href: "https://twitter.com/antonybudianto" },
  { name: "Instagram", href: "https://instagram.com/antonybudianto" },
];

const PAGES = [
  { name: "Writing", href: "/blog" },
  { name: "3D showcase", href: "/3d" },
];

export default function SiteFooter() {
  return (
    <footer className="on-field border-t border-rule">
      <div className="mx-auto w-full max-w-[1180px] px-4 py-14 sm:px-6 md:px-8">
        <div className="grid gap-10 sm:grid-cols-[132px_1fr_1fr]">
          <div className="t-label">Elsewhere</div>

          <ul className="t-nav flex flex-col gap-2.5">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  {link.name} ↗
                </a>
              </li>
            ))}
          </ul>

          <ul className="t-nav flex flex-col gap-2.5">
            {PAGES.map((page) => (
              <li key={page.href}>
                <a href={page.href} className="link">
                  {page.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="t-label mt-14 border-t border-rule pt-5">
          &copy; {new Date().getFullYear()} Antony Budianto
        </p>
      </div>
    </footer>
  );
}
