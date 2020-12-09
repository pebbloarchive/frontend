import React, { useState } from "react";

export interface ButtonProps {
  type?: "submit" | "button" | "reset";
  text?: string;
  onPress?: () => void;
  style?: any;
  hoverStyle?: any;
  disabled?: boolean;
}

export default function Button(props: ButtonProps) {
  const [hover, setHover] = useState<boolean>(false);
  const style = [props.hoverStyle || {}];
  if (hover) style.push(props.style);

  return (
    <button
      type={props.type}
      disabled={props.disabled}
      onClick={props.onPress}
      className={props.style}
      onMouseEnter={() => props.hoverStyle && setHover(true)}
      onMouseLeave={() => props.hoverStyle && setHover(false)}
    >
      {props.text}
    </button>
  );
}
