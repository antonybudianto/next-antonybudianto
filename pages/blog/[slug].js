import React from "react";
import Head from "next/head";
import BlogBody from "../../components/blog/BlogBody";
import BlogWrapper from "../../components/blog/BlogWrapper";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/mdToHtml";

function BlogTemplate({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content={post.desc} />
        <meta name="og:title" content={post.title} />
        <meta name="og:description" content={post.desc} />
        <meta property="og:site_name" content="antonybudianto.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.desc} />
        <meta
          property="og:url"
          content={`https://antonybudianto.com/blog/${post.slug}`}
        />
        <meta property="og:image" content={post.ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.desc} />
        <meta
          name="twitter:url"
          content={`https://antonybudianto.com/blog/${post.slug}`}
        />
        <meta name="twitter:image" content={post.ogImage} />
        <meta name="twitter:site" content="@antonybudianto" />
      </Head>
      <BlogWrapper
        title={post.title}
        publishDate={new Date(post.date).toLocaleString()}
      >
        <BlogBody content={post.content} />
      </BlogWrapper>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "desc",
    "date",
    "slug",
    "content",
    "ogImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default BlogTemplate;
