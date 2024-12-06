import * as React from "react";
import { StyleSheet } from "react-nativescript";

interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <flexboxLayout className="h-full p-4 bg-gray-100 flex-col justify-center items-center">
      {children}
    </flexboxLayout>
  );
}