import React from "react";

type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
  secondary?: boolean;
};

const LinkButton = ({
  children,
  secondary = false,
  href,
  ...rest
}: LinkButtonProps) => {
  const className = `inline-flex items-center gap-2 rounded-xl ${
    secondary
      ? "bg-sky-100 text-black hover:bg-sky-200"
      : "bg-black text-sky-100 hover:bg-gray-800"
  } py-1 px-3 shadow-inner shadow-white/10 focus:outline-none focus:outline-1 focus:outline-white`;

  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...rest} // Spread the rest of the anchor-specific props
    >
      {children}
    </a>
  );
};

export default LinkButton;
