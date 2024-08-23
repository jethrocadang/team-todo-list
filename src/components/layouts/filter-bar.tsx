"use client";

import { FC } from "react";
import { LucideProps } from "lucide-react";

import { Button } from "../ui/button";
import { Text } from "../text";

interface FilterBarProps {
  variant?: "default" | "secondary";
  titleIcon: FC<LucideProps>;
  rightIcon: FC<LucideProps>;
  title: string;
}

const FilterBar = ({
  variant = "default",
  titleIcon: TitleIcon,
  title,
  rightIcon: RightIcon,
}: FilterBarProps) => {
  return (
    <div
      className={`flex items-center justify-between border-b border-border px-2.5 py-1 ${
        variant === "secondary" ? "bg-accent" : ""
      }`}
    >
      <Button
        className={`gap-2.5 px-1.5 py-0 ${
          variant === "secondary" ? "hover:bg-background" : ""
        }`}
        size={"sm"}
      >
        <TitleIcon className="h-5 w-5 text-primary/70" />
        <Text size={"sm"}>{title}</Text>
      </Button>
      <Button
        size={"icon"}
        className={`w-9 rounded-lg ${variant === "secondary" ? "hover:bg-background" : ""}`}
      >
        <RightIcon className="h-5 w-5 text-primary/70" />
      </Button>
    </div>
  );
};

export default FilterBar;
