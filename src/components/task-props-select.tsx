"use client";

import { FC } from "react";

import { LucideProps } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface SelectItemProps {
  icon: FC<LucideProps>;
  value: string;
}

interface TaskPropsSelectProps {
  placeholder?: React.ReactNode;
  triggerIcon?: FC<LucideProps>;
  selectItems?: SelectItemProps[];
  contentTitle?: string;
}

const TaskPropsSelect = ({
  placeholder,
  triggerIcon: TriggerIcon,
  selectItems,
}: TaskPropsSelectProps) => {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent side="left">
        {selectItems?.map((item, index) => (
          <>
            <SelectItem key={index} value={item.value}>
              <div className="flex items-center">
                <item.icon className="mr-2 h-4 w-4" />
                {item.value}
              </div>
            </SelectItem>
          </>
        ))}
      </SelectContent>
    </Select>
  );
};
export default TaskPropsSelect;
