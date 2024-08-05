import { Columns2 } from "lucide-react";

import NavContent from "./nav-content";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const DrawerNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <Columns2 />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <aside className="h-full w-[200px] p-5">
          <NavContent />
        </aside>
      </SheetContent>
    </Sheet>
  );
};

export default DrawerNav;
