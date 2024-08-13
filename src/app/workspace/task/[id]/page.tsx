"use client";

import Container from "@/components/container";
import HeaderNav from "@/components/layouts/header-nav";
import TaskContent from "@/components/task-content";
import TaskProperties from "@/components/task-properties";
import TaskPropsSelect from "@/components/task-props-select";
import {
  Loader,
  Minus,
  CircleUserRound,
  Calendar,
  Plus,
  Bookmark,
} from "lucide-react";
import {
  frameworksList,
  selectPriorityItems,
  selectStatusItems,
} from "@/lib/task-properties";
import { Text } from "@/components/text";
import { MultiSelect } from "@/components/label-multi-select";
import { useState } from "react";

export default function TaskPage() {

  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([
    "react",
    "angular",
  ]);

  return (
    <Container>
      <div className="flex h-full w-full flex-row">
        <div className="w-full">
          <HeaderNav
            showFilter={false}
            showRightContent={true}
            breadcrumb={[{ label: "My tasks", href: "/" }, { label: "Id-01" }]}
            rightContent={
              <div className="flex gap-x-1.5 md:hidden">
                <TaskPropsSelect
                  placeholder={
                    <div className="flex items-center gap-1 md:gap-2.5">
                      <Loader className="h-4 w-4 text-primary/70" />
                      <Text size={"xs"} type={"normal"}>
                        Backlog
                      </Text>
                    </div>
                  }
                  label="Change status"
                  selectItems={selectPriorityItems}
                  variant="outline"
                  size={"xs"}
                />
                <TaskPropsSelect
                  placeholder={
                    <div className="flex items-center gap-1 md:gap-2.5">
                      <Minus className="h-4 w-4 text-primary/70" />
                      <Text size={"xs"} type={"normal"}>
                        Set priority
                      </Text>
                    </div>
                  }
                  label="Change status"
                  selectItems={selectPriorityItems}
                  variant="outline"
                  size={"xs"}
                />
                <TaskPropsSelect
                  placeholder={
                    <div className="flex items-center gap-1 md:gap-2.5">
                      <CircleUserRound className="h-4 w-4 text-primary/70" />
                      <Text size={"xs"} type={"normal"}>
                        Assign
                      </Text>
                    </div>
                  }
                  label="Change status"
                  selectItems={selectPriorityItems}
                  variant="outline"
                  size={"xs"}
                />
                <MultiSelect
                  options={frameworksList}
                  onValueChange={setSelectedFrameworks}
                  defaultValue={selectedFrameworks}
                  placeholder={
                    <div className="flex items-center gap-1 md:gap-2.5">
                    <Bookmark className="h-4 w-4 text-primary/70" />
                  
                  </div>
                  }
                  animation={2}
                  maxCount={3}
                />
              </div>
            }
          />

          <TaskContent />
        </div>
        <TaskProperties />
      </div>
    </Container>
  );
}
