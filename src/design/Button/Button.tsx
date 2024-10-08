import { Button as HeadlessButton } from "@headlessui/react";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  secondary?: boolean;
};

const Button = ({ children, secondary = false, ...rest }: ButtonProps) => {
  const className = `inline-flex items-center gap-2 rounded-xl ${
    secondary
      ? "bg-sky-100 text-black hover:bg-sky-200"
      : "bg-black text-sky-100 hover:bg-gray-800"
  } py-1 px-3 shadow-inner shadow-white/10 focus:outline-none focus:outline-1 focus:outline-white`;

  return (
    <HeadlessButton className={className} {...rest}>
      {children}
    </HeadlessButton>
  );
};

export default Button;
