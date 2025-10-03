import React from "react";

type Props = {
  label: string;
  cn: string;
  onClick: () => void;
};

type ButtonProps = {
  props: Props;
};

export default function MyButton({ props }: ButtonProps) {
  const defaultstyle =
    "border-dotted rounded-xl uppercase font-bold font-figtree cursor-target py-2 cursor-pointer border-3";
  return (
    <button className={defaultstyle + " " + props.cn} onClick={props.onClick}>
      {props.label}
    </button>
  );
}
