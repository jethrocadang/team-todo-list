"use client";

import { Button } from "../ui/button";
import DrawerNav from "./drawer-nav";
import { PanelRightOpen } from "lucide-react";

interface HeaderNavProps {
  title?: string;
  rightContent?: React.ReactNode;
  leftContent?: React.ReactNode;
}

const HeaderNav = ({ title, rightContent, leftContent }: HeaderNavProps) => {
  return (
    <div className="border-b border-border md:flex md:flex-row md:justify-between">
      <div className="flex flex-col md:flex-row">
        <div className="flex items-center justify-between p-2.5">
          <div className="flex items-center">
            <DrawerNav />
            <p className="text-xs font-semibold tracking-wide text-muted-foreground">
              {title}
            </p>
          </div>
          {leftContent && <div className="md:hidden">{leftContent}</div>}
        </div>
        <div className="space-x-2.5 border-t border-border p-2.5 md:border-none">
          {rightContent}
        </div>
      </div>
      <div className="hidden items-center md:flex">{leftContent}</div>
    </div>
  );
};

export default HeaderNav;
