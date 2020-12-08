import React, { HTMLAttributes } from "react";
import Link from "next/link";

export type Props = HTMLAttributes<HTMLAnchorElement | HTMLButtonElement> & {
  href?: string;
};

export default function ButtonOrLink({ href, ...props }: Props) {
  if (href) {
    return <Link href={href} />;
  }

  return <button type="button" {...props} />;
}
