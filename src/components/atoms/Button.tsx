import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "dark" | "light" | "outline" | "accent";
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  href,
  type = "button",
  onClick,
  className = "",
  ariaLabel,
  disabled = false,
}) => {
  const variantClassMap = {
    primary: "btn btn-primary",
    dark: "btn btn-dark",
    light: "btn btn-light",
    outline: "btn btn-outline",
    accent: "btn btn-accent",
  };

  const combinedClasses = `${variantClassMap[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={combinedClasses} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
