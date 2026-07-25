import Link from "next/link";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import QuantBand from "@/components/QuantBand";

import { SHOWCASE_LIST } from "../../components/scenes/list";

export default function ThreeIndexPage() {
  return (
    <>
      {/* Becomes /lab in Phase 3, with a Netlify redirect from here. */}
      <SiteHeader nav={{ href: "/3d", name: "lab" }} />

      <main className="on-field min-h-screen">
        <div className="mx-auto max-w-6xl px-4 pt-28 pb-16 sm:px-6 md:px-8 lg:pb-24">
          <div className="grid gap-6 sm:grid-cols-[108px_1fr] sm:gap-7">
            <div>
              <span className="t-label">Lab</span>
              <QuantBand steps={4} className="mt-3 max-w-[72px]" />
            </div>
            <div className="min-w-0">
              <h1 className="t-head">3D showcase</h1>
              <p className="t-body mt-3 text-mute">
                Interactive scenes built with three.js and Blender, with the
                geometry and lighting baked down to a size that ships.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {SHOWCASE_LIST.map((l, i) => (
                  <Link
                    key={i}
                    href={l.external ? (l.href as string) : `/3d/${l.id}`}
                    className="group flex flex-col border border-rule bg-panel transition-colors duration-300 hover:border-cool"
                  >
                    <div className="aspect-video overflow-hidden border-b border-rule bg-panel-2">
                      <img
                        className="h-full w-full object-cover"
                        alt={l.name}
                        src={l.img}
                        loading={i > 2 ? "lazy" : undefined}
                        decoding="async"
                      />
                    </div>
                    <div className="flex items-center justify-between gap-3 p-3">
                      <span className="t-title group-hover:text-cool">
                        {l.name}
                      </span>
                      {l.external ? (
                        <span className="t-label">External</span>
                      ) : null}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
