import * as React from "react";
import { StyleSheet } from "react-nativescript";

interface ButtonProps {
  text: string;
  onTap: () => void;
  className?: string;
}

export function Button({ text, onTap, className = "" }: ButtonProps) {
  return (
    <button
      className={`py-2 px-4 bg-blue-500 text-white rounded-lg ${className}`}
      onTap={onTap}
    >
      {text}
    </button>
  );
}