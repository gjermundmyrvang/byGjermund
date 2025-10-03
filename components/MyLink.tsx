import Link from "next/link";
import React from "react";

type Props = {
  label: string;
  cn?: string;
  href: string;
};

type LinkProps = {
  props: Props;
};

export default function MyLink({ props }: LinkProps) {
  const defaultstyle =
    "border border-dotted rounded-xl uppercase font-bold font-figtree cursor-target py-2 cursor-pointer border-3 flex items-center justify-center";
  return (
    <Link
      href={props.href}
      className={props.cn ? defaultstyle + " " + props.cn : defaultstyle}
    >
      {props.label}
    </Link>
  );
}
