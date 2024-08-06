"use client";

import { Minus, Loader, CircleUserRound, CalendarX2 } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { Text } from "./text";
import { Avatar, AvatarImage } from "./ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const TaskBar = () => {
  return (
    <div className="flex items-center justify-between border-b border-border p-2.5">
      <div className="flex items-center gap-2.5">
        <Checkbox />
        <Minus />
        <Text color={"muted"} className="hidden md:inline-flex">
          TID-01
        </Text>
        <Loader className="mr-2 inline-flex h-4 w-4 text-primary/70" />
        <Text type={"md"}>Title</Text>
      </div>
      <div className="flex items-center gap-1.5">
        <Badge variant={"outline"} className="gap-1.5">
          <CalendarX2 className="mr-2 inline-flex h-3.5 w-3.5 text-primary/70"/> Jul 2
        </Badge>
        <Badge variant={"outline"} className="gap-1.5">
          <div className="h-2 w-2 rounded-full bg-green-500" /> Bug
        </Badge>
        <Text>Jul 1</Text>
        <Text>Jul 15</Text>
        <Avatar>
          <AvatarImage></AvatarImage>
          <AvatarFallback>
            <CircleUserRound className="mr-2 inline-flex h-5 w-5 text-primary/70" />
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default TaskBar;
