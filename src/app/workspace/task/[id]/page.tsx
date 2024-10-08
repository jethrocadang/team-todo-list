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
import { useState } from "react";
import TagColorDialog from "@/components/tag-color-pick";

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
      
                  <TagColorDialog/>
        
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
