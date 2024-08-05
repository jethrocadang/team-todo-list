import Container from "@/components/container";
import Headernav from "@/components/layouts/top-nav";
import { Button } from "@/components/ui/button";
import { PanelRightOpen } from "lucide-react";

export default function MyTasksPage() {
  return (
    <Container>
      <Headernav
        title="My tasks"
        leftContent={
          <PanelRightOpen className="mr-2 inline-flex h-5 w-5 text-primary/70" />
        }
        rightContent={
          <>
          <Button variant={"outline"} size={"xs"}>Assigned</Button>
          <Button variant={"outline"} size={"xs"}>Created</Button>
          <Button variant={"outline"} size={"xs"}>Activity</Button>
          </>
        }
      />
    </Container>
  );
}
