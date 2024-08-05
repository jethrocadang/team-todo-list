import Container from "@/components/container";
import DrawerNav from "@/components/layouts/drawer-nav";
import TopNav from "@/components/layouts/top-nav";

export default function Workspace() {
  return (
    <Container>
      <div>
        <DrawerNav />
        <TopNav/>
      </div>
    </Container>
  );
}
