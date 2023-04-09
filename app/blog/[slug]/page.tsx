import React from "react";
import BlogBody from "@/components/blog/BlogBody";
import BlogWrapper from "@/components/blog/BlogWrapper";
import { getAllPosts } from "@/lib/api";
import { getData } from "./data";
import NewHeader from "@/components/NewHeader";
import { Metadata, ResolvingMetadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getData(params.slug);
  const titleText = `${post.title} | Antony's Blog`;
  const encodedTitle = encodeURIComponent(post.title);

  return {
    title: titleText,
    description: "{post.desc}",
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

async function BlogTemplate({ params }) {
  const post = await getData(params.slug);

  return (
    <>
      <NewHeader
        nav={{
          href: "/blog",
          name: "Blog",
        }}
      />
      <BlogWrapper
        title={post.title}
        publishDate={new Date(post.date).toDateString()}
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
