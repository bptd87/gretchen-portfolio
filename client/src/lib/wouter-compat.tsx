"use client";

import NextLink from "next/link";
import {
  useParams as useNextParams,
  usePathname,
  useRouter,
} from "next/navigation";
import {
  isValidElement,
  type AnchorHTMLAttributes,
  type ReactElement,
  type ReactNode,
} from "react";

type LinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export function Link({ href, children, className, onClick }: LinkProps) {
  if (isValidElement(children) && children.type === "a") {
    const anchorChild = children as ReactElement<
      AnchorHTMLAttributes<HTMLAnchorElement>
    >;
    const mergedClassName = [anchorChild.props.className, className]
      .filter(Boolean)
      .join(" ");

    return (
      <NextLink
        href={href}
        className={mergedClassName || undefined}
        onClick={onClick}
        prefetch={anchorChild.props.target === "_blank" ? false : undefined}
      >
        {anchorChild.props.children}
      </NextLink>
    );
  }

  return (
    <NextLink href={href} className={className} onClick={onClick}>
      {children}
    </NextLink>
  );
}

export function useLocation(): [string, (href: string) => void] {
  const pathname = usePathname();
  const router = useRouter();

  return [pathname, (href: string) => router.push(href)];
}

export function useParams<
  TParams extends Record<string, string | string[] | undefined> = Record<
    string,
    string | string[] | undefined
  >,
>() {
  return useNextParams() as TParams;
}
