import { getData } from "./data";

export default async function Head({ params }) {
  const post = await getData(params.slug);
  const titleText = `${post.title} | Antony's Blog`;
  const encodedTitle = encodeURIComponent(post.title);
  return (
    <>
      <title>{titleText}</title>

      <meta
        property="og:url"
        content={`https://antonybudianto.com/blog/${post.slug}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.desc} />
      <meta
        property="og:image"
        content={`https://vercel-og-ab.vercel.app/api/blog?title=${encodedTitle}`}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="antonybudianto.com" />
      <meta
        property="twitter:url"
        content={`https://antonybudianto.com/blog/${post.slug}`}
      />
      <meta name="twitter:title" content={post.title} />
      <meta name="twitter:description" content={post.desc} />
      <meta
        name="twitter:image"
        content={`https://vercel-og-ab.vercel.app/api/blog?title=${encodedTitle}`}
      ></meta>
    </>
  );
}
