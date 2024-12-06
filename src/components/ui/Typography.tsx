import * as React from "react";
import { StyleSheet } from "react-nativescript";

interface TypographyProps {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "body";
  className?: string;
}

export function Typography({ children, variant = "body", className = "" }: TypographyProps) {
  const variantStyles = {
    h1: "text-2xl font-bold",
    h2: "text-xl font-semibold",
    body: "text-base"
  };

  return (
    <label className={`${variantStyles[variant]} ${className}`}>
      {children}
    </label>
  );
}