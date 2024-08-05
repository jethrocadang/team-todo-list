"use client";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const textVariants = cva("text-xs font-normal text-primary",{
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
    },
    
  },
  defaultVariants: {
    size: "default",
    type: "default",
    color: "default",
  },});

interface TextProps extends VariantProps<typeof textVariants> {
  children: React.ReactNode;
}

const TextSm = ({ children, size, type, color }: TextProps) => {
  return <p className={cn(textVariants({ size, type, color }))}>{children}</p>;
};

export { TextSm };
