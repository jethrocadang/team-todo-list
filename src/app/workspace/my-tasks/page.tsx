"use client"

import Container from "@/components/container";
import FilterBar from "@/components/layouts/filter-bar";
import Headernav from "@/components/layouts/header-nav";
import TaskBar from "@/components/task-bar";
import { Button } from "@/components/ui/button";
import { ListFilter, PanelRightOpen, PlusIcon } from "lucide-react";

export default function MyTasksPage() {
  return (
    <Container>
      <Headernav
        breadcrumb={[
          { label: "My tasks" },
        ]}
        leftContent={
          <PanelRightOpen className="mr-2 inline-flex h-5 w-5 text-primary/70" />
        }
        rightContent={
          <>
            <Button variant={"outline"} size={"xs"}>
              Assigned
            </Button>
            <Button variant={"outline"} size={"xs"}>
              Created
            </Button>
            <Button variant={"outline"} size={"xs"}>
              Activity
            </Button>
          </>
        }
      />
      <FilterBar variant="secondary" title="Filter" titleIcon={ListFilter} rightIcon={PlusIcon}/>
      <TaskBar />
    </Container>
  );
}
