const META_TITLE = `Visit Antony Budianto's Personal Website`;
const META_DESC = `Hi! I'm Antony, currently living in Indonesia, I post tech content and web development stuff`;

const encodedTitle = encodeURIComponent("Antony Budianto");

export default async function Head({ params }) {
  return (
    <>
      <title>Antony Budianto</title>
      <meta name="description" content={META_DESC} />
      <meta property="og:url" content="https://antonybudianto.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={META_TITLE} />
      <meta property="og:description" content={META_DESC} />
      <meta
        property="og:image"
        content={`https://vercel-og-ab.vercel.app/api/blog?title=${encodedTitle}`}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="antonybudianto.com" />
      <meta property="twitter:url" content="https://antonybudianto.com" />
      <meta name="twitter:title" content={META_TITLE} />
      <meta name="twitter:description" content={META_DESC} />
      <meta
        name="twitter:image"
        content={`https://vercel-og-ab.vercel.app/api/blog?title=${encodedTitle}`}
      ></meta>
    </>
  );
}
