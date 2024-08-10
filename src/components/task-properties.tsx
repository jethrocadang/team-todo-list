"use client";

import { Text } from "./text";
import { Loader, Minus, CircleUserRound, Calendar, Plus } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import TaskPropsSelect from "./task-props-select";
import {
  frameworksList,
  selectPriorityItems,
  selectStatusItems,
} from "@/lib/task-properties";
import { MultiSelect } from "./label-multi-select";
import { useState } from "react";

const TaskProperties = () => {
  const isLabelAvailable = true;
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([
    "react",
    "angular",
  ]);

  return (
    <aside className="hidden w-full max-w-56 flex-shrink flex-col justify-start gap-6 border-l px-2.5 md:flex">
      <div className="pt-2.5">
        <Text size={"sm"} type={"normal"} color={"muted"}>
          Properties
        </Text>
      </div>
      <div className="flex flex-col gap-2.5">
        <TaskPropsSelect
          placeholder={
            <div className="flex items-center gap-2">
              <Loader className="h-4 w-4 text-primary/70" />
              <Text size={"sm"} >Backlog</Text>
            </div>
          }
          selectItems={selectStatusItems}
          label="Change status"
        />
        <TaskPropsSelect
          placeholder={
            <div className="flex items-center gap-2">
              <Minus className="h-4 w-4 text-primary/70" />
              <Text size={"sm"} >Set priority</Text>
            </div>
          }
          selectItems={selectPriorityItems}
          label="Set priority"
        />
        <TaskPropsSelect
          placeholder={
            <div className="flex items-center gap-2">
              <CircleUserRound className="h-4 w-4 text-primary/70" />
              <Text size={"sm"} >Assign</Text>
            </div>
          }
          label="Assign to"
        />
      </div>
      <div>
        <Text type={"md"} color={"muted"}>
          Labels
        </Text>
        <div className="flex flex-shrink flex-wrap items-center gap-1.5 px-2.5 pt-2.5">
          {isLabelAvailable ? (
            <>
              <Badge variant={"outline"} className="gap-1.5 py-1">
                <div className="h-2 w-2 rounded-full bg-green-500" /> Bug
              </Badge>
              <Badge variant={"outline"} className="gap-1.5 py-1">
                <div className="h-2 w-2 rounded-full bg-green-500" /> Very Long
                text
              </Badge>
              <Badge variant={"outline"} className="gap-1.5 py-1">
                <div className="h-2 w-2 rounded-full bg-green-500" /> Very Long
                text
              </Badge>

              <Button variant={"ghost"} size={"icon"} className="h-6 w-6">
                <Plus className="h-4 w-4 text-primary/70" />
              </Button>
            </>
          ) : (
            <MultiSelect
              options={frameworksList}
              onValueChange={setSelectedFrameworks}
              defaultValue={selectedFrameworks}
              placeholder="Add tag"
              variant="inverted"
              animation={2}
              maxCount={3}
            />
          )}
        </div>
      </div>
      <div>
        <Text size={"xs"} type={"md"} color={"muted"}>
          Due Date
        </Text>
        <div className="flex items-center px-2.5 pt-2.5">
          <Calendar className="mr-2 inline-flex h-4 w-4 text-primary/70" />
          <Text className="text-nowrap">Aug 10, 2024</Text>
        </div>
      </div>
    </aside>
  );
};

export default TaskProperties;
