import Link from "next/link";

import { LINKS } from "@/content/profile";

const PAGES = [
  { name: "Writing", href: "/blog" },
  { name: "3D showcase", href: "/3d" },
];

export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="shell flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="t-meta">
          &copy; {new Date().getFullYear()} Antony Budianto
        </p>

        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px]">
          {PAGES.map((page) => (
            <li key={page.href}>
              <Link href={page.href} className="link-quiet">
                {page.name}
              </Link>
            </li>
          ))}
          <li aria-hidden="true" className="hidden h-4 w-px bg-line sm:block" />
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-quiet"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
