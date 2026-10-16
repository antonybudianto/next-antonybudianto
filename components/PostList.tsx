import Link from "next/link";

import { formatDate } from "@/lib/date";
import { ArrowRight } from "./icons";

export interface PostSummary {
  slug: string;
  title: string;
  /** ISO date string from the post frontmatter. */
  date: string;
  desc?: string;
}

/**
 * Posts as rows, not cards: most posts have no cover worth showing, and a list
 * reads faster. The row's hover ground bleeds past the column edge so the text
 * stays aligned with everything above it.
 */
export default function PostList({ posts }: { posts: PostSummary[] }) {
  return (
    <ul className="-mx-4 flex flex-col">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link
            href={`/blog/${post.slug}`}
            className="group grid gap-x-8 gap-y-1 rounded-xl px-4 py-4 transition-colors duration-200 hover:bg-subtle sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline"
          >
            <div className="min-w-0">
              <h3 className="t-h3">
                {post.title}{" "}
                <ArrowRight className="text-faint opacity-0 group-hover:opacity-100" />
              </h3>
              {post.desc ? (
                <p className="t-small mt-1 text-mute">{post.desc}</p>
              ) : null}
            </div>
            <time
              dateTime={post.date}
              className="t-meta row-start-1 sm:row-auto"
            >
              {formatDate(post.date)}
            </time>
          </Link>
        </li>
      ))}
    </ul>
  );
}
