import { Columns2 } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";

import NavContent from "./nav-content";

const DrawerNav = () => {
  return (
    <Drawer direction="left">
      <DrawerTrigger className="lg:hidden">
        <Columns2 />
      </DrawerTrigger>
      <DrawerContent>
        <aside className="h-full w-[200px] p-5">
          <NavContent />
        </aside>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerNav;
