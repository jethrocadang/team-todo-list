"use client";

import { FC } from "react";

import { LucideProps } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import useMediaQuery from "@/hooks/use-media-query";

interface SelectItemProps {
  icon: FC<LucideProps>;
  value: string;
}

interface TaskPropsSelectProps {
  placeholder?: React.ReactNode;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost";
  selectItems?: SelectItemProps[];
  size?: "default" | "xs" | "sm" | "lg" | "icon" | null | undefined;
  contentTitle?: string;
  label?: string;
}

const TaskPropsSelect = ({
  placeholder,
  selectItems,
  label,
  variant,
  size,
}: TaskPropsSelectProps) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <Select>
      <SelectTrigger
        className="data-[state=open]:bg-accent"
        variant={variant}
        size={size}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent side={isDesktop ? "left" : "bottom"}>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          <SelectSeparator />
          {selectItems?.map((item, index) => (
            <>
              <SelectItem key={index} value={item.value}>
                <div className="flex items-center">
                  <item.icon
                    className="mr-2 h-4 w-4 text-primary/70"
                    strokeWidth={3}
                  />
                  {item.value}
                </div>
              </SelectItem>
            </>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export default TaskPropsSelect;
