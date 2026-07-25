import React from "react";
import BlogBody from "@/components/blog/BlogBody";
import BlogWrapper from "@/components/blog/BlogWrapper";
import { getAllPosts } from "@/lib/api";
import { extractToc } from "@/lib/toc";
import { getData } from "./data";
import SiteHeader from "@/components/SiteHeader";
import { Metadata, ResolvingMetadata } from "next";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata(props: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const params = await props.params;
  const post = await getData(params.slug);
  const titleText = `${post.title} | Antony's Blog`;
  const encodedTitle = encodeURIComponent(post.title);

  return {
    title: titleText,
    description: post.desc,
    openGraph: {
      url: `https://antonybudianto.com/blog/${post.slug}`,
      type: "website",
      title: post.title,
      description: post.desc,
      images: [
        `https://vercel-og-ab.vercel.app/api/blog?title=${encodedTitle}`,
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.desc,
      site: "@antonybudianto",
      images: [
        `https://vercel-og-ab.vercel.app/api/blog?title=${encodedTitle}`,
      ],
    },
  };
}

async function BlogTemplate(props) {
  const params = await props.params;
  const post = await getData(params.slug);

  return (
    <>
      <SiteHeader
        nav={{
          href: "/blog",
          name: "writing",
        }}
      />
      <BlogWrapper
        title={post.title}
        publishDate={post.date}
        toc={extractToc(post.content)}
      >
        <BlogBody content={post.content} />
      </BlogWrapper>
    </>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"]);

  return posts.map((post) => {
    return {
      slug: post.slug,
    };
  });
}

export default BlogTemplate;
