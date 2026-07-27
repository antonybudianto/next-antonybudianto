import Link from "next/link";

import { WORKS, type WorkItem, type WorkStatus } from "@/content/work";
import LayerMark from "./LayerMark";
import CopyButton from "./CopyButton";

/**
 * Status follows the palette rule in PROPOSAL.md §3.1: warm is what is live
 * right now, cool is what shipped and stands, neutral is a side experiment.
 */
const STATUS_COLOR: Record<WorkStatus, string> = {
  live: "text-warm",
  shipped: "text-cool",
  experiment: "text-faint",
};

const isExternal = (href: string) => href.startsWith("http");

const CARD =
  "group relative flex flex-col border border-rule bg-panel transition-colors duration-300 hover:border-cool";

/**
 * The whole card is clickable through a stretched overlay on the title link
 * rather than by wrapping the card in an anchor — these cards contain copy
 * buttons, and interactive elements cannot legally nest.
 */
function TitleLink({
  href,
  className,
  children,
}: {
  href?: string;
  className: string;
  children: React.ReactNode;
}) {
  if (!href) return <span className={className}>{children}</span>;

  const stretched = `${className} after:absolute after:inset-0 after:content-['']`;

  if (isExternal(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={stretched}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={stretched}>
      {children}
    </Link>
  );
}

/**
 * Renders the theme-matched pair when one exists, so a screenshot of a site
 * that has its own light and dark modes follows this site's theme instead of
 * sitting in the wrong one.
 */
function Cover({
  cover,
  className,
  eager,
}: {
  cover: NonNullable<WorkItem["cover"]>;
  className: string;
  eager?: boolean;
}) {
  const common = {
    width: cover.w,
    height: cover.h,
    alt: cover.alt,
    decoding: "async" as const,
    loading: eager ? undefined : ("lazy" as const),
  };

  if (!cover.srcDark) {
    return <img src={cover.src} className={className} {...common} />;
  }

  return (
    <>
      <img src={cover.src} className={`${className} dark:hidden`} {...common} />
      <img
        src={cover.srcDark}
        className={`${className} hidden dark:block`}
        {...common}
        alt=""
        aria-hidden="true"
      />
    </>
  );
}

function Status({ status }: { status: WorkStatus }) {
  return (
    <span className={`t-label ${STATUS_COLOR[status]}`}>
      {status === "live" ? "● Live" : status}
    </span>
  );
}

function Meta({ item }: { item: WorkItem }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <Status status={item.status} />
      {item.href && isExternal(item.href) ? (
        <span className="t-label">↗</span>
      ) : null}
    </div>
  );
}

function Tags({ tags }: { tags?: string[] }) {
  if (!tags?.length) return null;
  return (
    <ul className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <li key={tag} className="t-label border border-rule px-1.5 py-0.5">
          {tag}
        </li>
      ))}
    </ul>
  );
}

/**
 * `relative z-10` lifts these above the stretched link overlay, so the command
 * can be selected by hand and the copy button does not navigate the card.
 */
function Commands({ items }: { items: NonNullable<WorkItem["commands"]> }) {
  return (
    <ul className="relative z-10 flex flex-col gap-2">
      {items.map((c) => (
        <li key={c.label} className="flex items-stretch gap-2">
          <div className="flex min-w-0 grow items-center gap-3 border border-rule bg-panel-2 px-3 py-2">
            {/* Fixed label column so the commands line up as a table rather
                than stepping in and out with the harness name's length. */}
            <span className="t-label shrink-0 sm:min-w-[88px]">{c.label}</span>
            <code className="t-data min-w-0 flex-1 overflow-x-auto whitespace-pre text-[12.5px] text-ink">
              {c.command}
            </code>
          </div>
          <CopyButton value={c.command} label={`${c.label} command`} />
        </li>
      ))}
    </ul>
  );
}

/** Wide split card: cover on the left, the argument on the right. */
function LeadCard({ item }: { item: WorkItem }) {
  return (
    <div className={CARD}>
      <div className="flex flex-col lg:flex-row">
        {item.cover ? (
          <div className="shrink-0 overflow-hidden border-b border-rule lg:w-3/5 lg:border-b-0 lg:border-r">
            <Cover
              cover={item.cover}
              eager
              className="h-full w-full object-cover object-top"
            />
          </div>
        ) : null}
        <div className="flex flex-col gap-4 p-5 sm:p-6">
          <Meta item={item} />
          <h3 className="t-head">
            <TitleLink href={item.href} className="group-hover:text-cool">
              {item.title}
            </TitleLink>
          </h3>
          <p className="t-body text-mute">{item.summary}</p>
          {item.metric ? (
            <p className="t-data text-2xl">
              {item.metric.value}
              <span className="t-label ml-2">{item.metric.label}</span>
            </p>
          ) : null}
          <div className="mt-auto pt-2">
            <Tags tags={item.tags} />
          </div>
        </div>
      </div>

      {item.mcp && item.commands ? (
        <div className="border-t border-rule p-5 sm:p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <span className="t-label">Connect it to your agent over MCP</span>
            <code className="t-data text-[12.5px] text-mute">
              {item.mcp.endpoint}
            </code>
          </div>
          <div className="mt-4">
            <Commands items={item.commands} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

/** Typographic card for work that has no screenshot worth showing. */
function TextCard({ item }: { item: WorkItem }) {
  return (
    <div className={`${CARD} p-5 sm:p-6`}>
      <Meta item={item} />
      <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-10">
        <div className="lg:w-1/3">
          <h3 className="t-head">
            <TitleLink href={item.href} className="group-hover:text-cool">
              {item.title}
            </TitleLink>
          </h3>
          <LayerMark depth={5} className="mt-4" />
        </div>
        <div className="flex flex-col gap-4 lg:w-2/3">
          <p className="t-body text-mute">{item.summary}</p>
          {item.commands ? <Commands items={item.commands} /> : null}
          <Tags tags={item.tags} />
        </div>
      </div>
    </div>
  );
}

function Card({ item }: { item: WorkItem }) {
  return (
    <div className={CARD}>
      <div className="flex aspect-video items-center justify-center overflow-hidden border-b border-rule bg-panel-2">
        {item.cover ? (
          <Cover
            cover={item.cover}
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <LayerMark depth={4} rungs={5} width={40} />
        )}
      </div>
      <div className="flex grow flex-col gap-3 p-4">
        <Meta item={item} />
        <h3 className="t-title">
          <TitleLink href={item.href} className="group-hover:text-cool">
            {item.title}
          </TitleLink>
        </h3>
        <p className="text-[13.5px] leading-relaxed text-mute">
          {item.summary}
        </p>
        <div className="mt-auto pt-1">
          <Tags tags={item.tags} />
        </div>
      </div>
    </div>
  );
}

export default function WorkGrid() {
  const featured = WORKS.filter((w) => w.featured);
  const rest = WORKS.filter((w) => !w.featured);

  return (
    <div className="flex flex-col gap-5">
      {featured.map((item) =>
        item.cover ? (
          <LeadCard key={item.title} item={item} />
        ) : (
          <TextCard key={item.title} item={item} />
        )
      )}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((item) => (
          <Card key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}
