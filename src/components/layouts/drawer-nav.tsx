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
      <SheetTrigger className="lg:hidden flex items-center">
        <Columns2 className="mr-2 inline-flex h-5 w-5 text-primary/70" />
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
