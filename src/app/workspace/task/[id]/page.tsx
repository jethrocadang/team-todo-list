import Container from "@/components/container";
import HeaderNav from "@/components/layouts/header-nav";
import TaskContent from "@/components/task-content";
import TaskProperties from "@/components/task-properties";
import { PanelRightOpen } from "lucide-react";

export default function TaskPage() {
  return (
    <Container>
      <div className="flex flex-row w-full h-full">
        <div className="w-full">
          <HeaderNav
            showFilter={false}
            breadcrumb={[{ label: "My tasks", href: "/" }, { label: "Id-01" }]}
          />
          <TaskContent />
        </div>
        <TaskProperties/>
      </div>
    </Container>
  );
}
