import Container from "@/components/container";
import HeaderNav from "@/components/layouts/header-nav";
import TaskContent from "@/components/task-content";
import { PanelRightOpen } from "lucide-react";

export default function TaskPage() {
  return (
    <Container>
      <HeaderNav
        showFilter={false}
        breadcrumb={[
          { label: 'My tasks', href: '/' },
          { label: 'Id-01' },
        ]}

      />
      <TaskContent/>
    </Container>
  );
}
