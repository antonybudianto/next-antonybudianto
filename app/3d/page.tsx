import Link from "next/link";
import { Metadata } from "next";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { ArrowRight, ArrowUpRight } from "@/components/icons";

import { SHOWCASE_LIST } from "../../components/scenes/list";

export const metadata: Metadata = {
  title: "3D showcase — Antony Budianto",
  description:
    "Interactive 3D scenes built with three.js and Blender by Antony Budianto",
};

export default function ThreeIndexPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Becomes /lab in Phase 3, with a Netlify redirect from here. */}
      <SiteHeader active="lab" />

      <main className="shell pb-24 pt-14 md:pt-24">
        <header className="max-w-[640px]">
          <h1 className="t-h1">3D showcase</h1>
          <p className="t-lead mt-4">
            Interactive scenes built with three.js and Blender, with the
            geometry and lighting baked down to a size that ships.
          </p>
        </header>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
          {SHOWCASE_LIST.map((l, i) => {
            const href = l.external ? (l.href as string) : `/3d/${l.id}`;
            return (
              <Link
                key={l.id}
                href={href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                className="card card--link group flex flex-col p-2"
              >
                <div className="frame aspect-[16/10]">
                  <img
                    className="h-full w-full object-cover"
                    alt=""
                    src={l.img}
                    loading={i > 2 ? "lazy" : undefined}
                    decoding="async"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 px-3 pb-2 pt-4">
                  <span className="t-h3">{l.name}</span>
                  {l.external ? (
                    <span className="t-meta inline-flex items-center gap-1">
                      StackBlitz <ArrowUpRight />
                    </span>
                  ) : (
                    <ArrowRight className="text-faint" />
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
