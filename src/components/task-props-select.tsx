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

interface SelectItemProps {
  icon: FC<LucideProps>;
  value: string;
}

interface TaskPropsSelectProps {
  placeholder?: React.ReactNode;
  selectItems?: SelectItemProps[];
  contentTitle?: string;
  label?: string;
}

const TaskPropsSelect = ({
  placeholder,
  selectItems,
  label,
}: TaskPropsSelectProps) => {
  return (
    <Select>
      <SelectTrigger className="data-[state=open]:bg-accent">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent side="left">
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          <SelectSeparator/>
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
