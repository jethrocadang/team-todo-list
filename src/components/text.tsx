"use client";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const textVariants = cva("text-xs font-normal text-primary", {
  variants: {
    size: {
      default: "text-xs",
      sm: "text-sm",
    },
    type: {
      default: "font-normal",
      md: "font-medium",
    },
    color: {
      default: "text-primary",
      muted: "text-muted-foreground",
    },
  },
  defaultVariants: {
    size: "default",
    type: "default",
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
