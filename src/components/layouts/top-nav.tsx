"use client";

import { Text } from "../text";
import { Button } from "../ui/button";
import DrawerNav from "./drawer-nav";
import { ListFilter } from "lucide-react";

interface HeaderNavProps {
  title?: string;
  rightContent?: React.ReactNode;
  leftContent?: React.ReactNode;
}

const HeaderNav = ({ title, rightContent, leftContent }: HeaderNavProps) => {
  return (
    <>
      <div className="border-b border-border md:flex md:flex-row md:justify-between">
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center justify-between p-2.5">
            <div className="flex items-center">
              <DrawerNav />
              <Text type={"md"}>{title}</Text>
            </div>
            {leftContent && <div className="md:hidden">{leftContent}</div>}
          </div>
          <div className="flex items-center space-x-2.5 border-t border-border p-2.5 md:border-none">
            {rightContent}
          </div>
        </div>
        <div className="hidden items-center md:flex">{leftContent}</div>
      </div>
      <div className="border-b border-border p-2.5 flex items-center">
        <ListFilter className="mr-2 inline-flex h-5 w-5 text-primary/70" />
        <Text>Filter</Text>
      </div>
    </>
  );
};

export default HeaderNav;
