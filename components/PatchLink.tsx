"use client";

import { type LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import cn from "classnames";

type LinkPropsReal = React.PropsWithChildren<
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
    LinkProps
>;

export function PatchLink(props: LinkPropsReal) {
  const router = useRouter();

  function handleOnClick() {
    router.push(props.href as string);
  }

  return (
    <a
      onClick={handleOnClick}
      className={cn(props.className, "hover:cursor-pointer")}
      title={props.title}
    >
      {props.children}
    </a>
  );
}
