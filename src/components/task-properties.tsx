"use client";

import { Text } from "./text";
import {
  Loader,
  Minus,
  CircleUserRound,
  Calendar,
  Plus,
  Bookmark,
} from "lucide-react";
import { Badge } from "./ui/badge";
import TaskPropsSelect from "./task-props-select";
import {
  frameworksList,
  selectPriorityItems,
  selectStatusItems,
} from "@/lib/task-properties";
import { TagMultiSelect } from "./label-multi-select";
import { useState } from "react";

const TaskProperties = () => {
  const isLabelAvailable = false;
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
              <Text size={"sm"} type={"md"}>
                Backlog
              </Text>
            </div>
          }
          selectItems={selectStatusItems}
          label="Change status"
        />
        <TaskPropsSelect
          placeholder={
            <div className="flex items-center gap-2">
              <Minus className="h-4 w-4 text-primary/70" />
              <Text size={"sm"} type={"md"} color={"muted"}>
                Set priority
              </Text>
            </div>
          }
          selectItems={selectPriorityItems}
          label="Set priority"
        />
        <TaskPropsSelect
          placeholder={
            <div className="flex items-center gap-2">
              <CircleUserRound className="h-4 w-4 text-primary/70" />
              <Text size={"sm"} type={"md"} color={"muted"}>
                Assign
              </Text>
            </div>
          }
          label="Assign to"
        />
      </div>
      <div>
        <Text type={"md"} color={"muted"}>
          Labels
        </Text>
        {isLabelAvailable ? (
          <div className="flex flex-shrink flex-wrap items-center gap-1.5 px-2.5 pt-2.5">
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

            <TagMultiSelect
              options={frameworksList}
              onValueChange={setSelectedFrameworks}
              defaultValue={selectedFrameworks}
              placeholder={
                <>
                  <Plus className="h-4 w-4 text-primary/70" />
                </>
              }
              animation={2}
              maxCount={3}
              className="rounded-full h-6 w-6 justify-center"
              size={"icon"}
              
              
            />
          </div>
        ) : (
          <TagMultiSelect
            options={frameworksList}
            onValueChange={setSelectedFrameworks}
            defaultValue={selectedFrameworks}
            placeholder={
              <>
                <Bookmark className="mr-2 h-4 w-4 text-primary/70" />
                <span>
                  <Text size={"sm"} type={"md"} color={"muted"}>
                    Assign
                  </Text>
                </span>
              </>
            }
            animation={2}
            maxCount={3}
            
          />
        )}
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
