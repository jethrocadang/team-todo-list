import { Columns2 } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";

import NavContent from "./nav-content";

const DrawerNav = () => {
  return (
    <Drawer direction="left">
      <DrawerTrigger>
        <Columns2 />
      </DrawerTrigger>
      <DrawerContent>
        <NavContent />
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerNav;
