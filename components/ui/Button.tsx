"use client";

import React, { useRef } from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  icon,
}: ButtonProps) {
  const btnRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-display font-bold rounded-full transition-all duration-300 cursor-pointer select-none relative overflow-hidden";

  const variants = {
    primary:
      "bg-[var(--orange)] text-white hover:bg-[#e86a2a] hover:shadow-[var(--shadow-editorial)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none",
    secondary:
      "bg-[var(--black)] text-white hover:bg-[#222] hover:shadow-[var(--shadow-editorial)] hover:-translate-y-0.5",
    outline:
      "bg-transparent border-2 border-[var(--black)] text-[var(--black)] hover:bg-[var(--black)] hover:text-white hover:-translate-y-0.5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {icon && <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        ref={btnRef as React.Ref<HTMLAnchorElement>}
        href={href}
        className={`group ${combinedClassName}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={btnRef as React.Ref<HTMLButtonElement>}
      onClick={onClick}
      className={`group ${combinedClassName}`}
    >
      {content}
    </button>
  );
}
