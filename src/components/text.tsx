"use client";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const textVariants = cva("text-xs font-normal text-primary", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-md",
      h1: "text-2xl tracking-wide"

    },
    type: {
      normal: "font-normal",
      md: "font-medium",
      bold: "font-bold"
    },
    color: {
      default: "text-primary",
      muted: "text-muted-foreground",
    },
  },
  defaultVariants: {
    size: "xs",
    type: "normal",
    color: "default",
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  children: React.ReactNode;
  className?: string;
}

const Text = ({ children, size, type, color, className }: TextProps) => {
  return (
    <p className={cn(textVariants({ size, type, color }), className)}>
      {children}
    </p>
  );
};

export { Text };
