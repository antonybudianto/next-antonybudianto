/**
 * https://beta.nextjs.org/docs/api-reference/segment-config#dynamicparams
 */

export const dynamicParams = false;

export default function BlogSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
