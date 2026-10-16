import Link from "next/link";

import { WORKS, type WorkItem } from "@/content/work";
import CommandTabs from "./CommandTabs";
import { ArrowRight, ArrowUpRight } from "./icons";

const isExternal = (href: string) => href.startsWith("http");

/**
 * The whole card is clickable through a stretched overlay on the title link
 * rather than by wrapping the card in an anchor — some cards contain copy
 * buttons and tabs, and interactive elements cannot legally nest.
 */
function TitleLink({
  href,
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) {
  if (!href) return <>{children}</>;

  const className =
    "outline-none after:absolute after:inset-0 after:rounded-2xl after:content-[''] focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-[color:var(--accent)]";

  if (isExternal(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function Arrow({ href, size }: { href?: string; size?: number }) {
  if (!href) return null;
  return isExternal(href) ? (
    <ArrowUpRight size={size} className="text-faint" />
  ) : (
    <ArrowRight size={size} className="text-faint" />
  );
}

/**
 * Renders the theme-matched pair when one exists, so a screenshot of a site
 * that has its own light and dark modes follows this site's theme instead of
 * sitting in the wrong one.
 */
function Cover({
  cover,
  eager,
}: {
  cover: NonNullable<WorkItem["cover"]>;
  eager?: boolean;
}) {
  const className = "h-full w-full object-cover object-top";
  const common = {
    width: cover.w,
    height: cover.h,
    decoding: "async" as const,
    loading: eager ? undefined : ("lazy" as const),
  };

  if (!cover.srcDark) {
    return (
      <img src={cover.src} alt={cover.alt} className={className} {...common} />
    );
  }

  return (
    <>
      <img
        src={cover.src}
        alt={cover.alt}
        className={`${className} dark:hidden`}
        {...common}
      />
      <img
        src={cover.srcDark}
        alt=""
        aria-hidden="true"
        className={`${className} hidden dark:block`}
        {...common}
      />
    </>
  );
}

function LiveChip() {
  return (
    <span className="chip">
      <span className="dot dot--live" aria-hidden="true" />
      Live
    </span>
  );
}

function Tags({ tags }: { tags?: string[] }) {
  if (!tags?.length) return null;
  return (
    <ul className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <li key={tag} className="chip">
          {tag}
        </li>
      ))}
    </ul>
  );
}

/** Wide card: screenshot beside the pitch, connect strip underneath. */
function LeadCard({ item }: { item: WorkItem }) {
  return (
    <article className="card card--link group p-2">
      <div className="grid items-center gap-2 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)]">
        {item.cover ? (
          <div className="frame aspect-video">
            <Cover cover={item.cover} eager />
          </div>
        ) : null}

        <div className="flex flex-col items-start gap-4 px-4 pb-4 pt-4 lg:px-8 lg:py-6">
          {item.status === "live" ? <LiveChip /> : null}
          <h3 className="t-h2">
            <TitleLink href={item.href}>
              {item.title} <Arrow href={item.href} size={20} />
            </TitleLink>
          </h3>
          <p className="text-mute">{item.summary}</p>
          <Tags tags={item.tags} />
        </div>
      </div>

      {item.commands ? (
        <div className="mt-2 border-t border-line px-4 pb-4 pt-5 lg:px-6">
          {item.mcp ? (
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="text-[14px] font-medium">
                Connect it to your agent over MCP
              </p>
              <code className="t-mono text-[12.5px] text-faint">
                {item.mcp.endpoint}
              </code>
            </div>
          ) : null}
          <CommandTabs items={item.commands} />
        </div>
      ) : null}
    </article>
  );
}

/** Featured work with nothing worth screenshotting: the pitch and the install. */
function TextCard({ item }: { item: WorkItem }) {
  return (
    <article className="card card--link group p-6 lg:px-8 lg:py-7">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-12">
        <div className="flex flex-col items-start gap-3">
          {item.status === "live" ? <LiveChip /> : null}
          <h3 className="t-h2">
            <TitleLink href={item.href}>
              {item.title} <Arrow href={item.href} size={20} />
            </TitleLink>
          </h3>
          <p className="text-mute">{item.summary}</p>
          <div className="mt-1">
            <Tags tags={item.tags} />
          </div>
        </div>
        {item.commands ? <CommandTabs items={item.commands} /> : null}
      </div>
    </article>
  );
}

function Card({ item }: { item: WorkItem }) {
  const meta = [
    item.status === "experiment" ? "Experiment" : null,
    ...(item.tags ?? []),
  ].filter(Boolean);

  return (
    <article className="card card--link group flex flex-col p-2">
      <div className="frame aspect-[16/10]">
        {item.cover ? <Cover cover={item.cover} /> : null}
      </div>
      <div className="flex grow flex-col px-3 pb-3 pt-4">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="t-h3">
            <TitleLink href={item.href}>{item.title}</TitleLink>
          </h3>
          <Arrow href={item.href} />
        </div>
        <p className="t-small mt-1.5 text-mute">{item.summary}</p>
        {meta.length ? (
          <p className="t-meta mt-auto pt-4">{meta.join(" · ")}</p>
        ) : null}
      </div>
    </article>
  );
}

export default function WorkGrid() {
  const featured = WORKS.filter((w) => w.featured);
  const rest = WORKS.filter((w) => !w.featured);

  return (
    <div className="flex flex-col gap-4">
      {featured.map((item) =>
        item.cover ? (
          <LeadCard key={item.title} item={item} />
        ) : (
          <TextCard key={item.title} item={item} />
        )
      )}

      <h3 className="t-meta mt-10 font-medium">Earlier projects and experiments</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {rest.map((item) => (
          <Card key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}
