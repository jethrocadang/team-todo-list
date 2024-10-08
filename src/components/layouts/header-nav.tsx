"use client";

import { Text } from "../text";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import DrawerNav from "./drawer-nav";
import { ListFilter } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface HeaderNavProps {
  rightContent?: React.ReactNode;
  leftContent?: React.ReactNode;
  showRightContent?: boolean;
  breadcrumb?: BreadcrumbItem[];
}

const HeaderNav = ({
  rightContent,
  leftContent,
  showRightContent = true,
  breadcrumb = [],
}: HeaderNavProps) => {
  return (
    <>
      <div className="border-b border-border md:flex md:flex-row md:justify-between">
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center justify-between p-2.5">
            <div className="flex items-center">
              <DrawerNav />
              {/**Breadcrumb */}
              <Breadcrumb>
                <BreadcrumbList>
                  {breadcrumb.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <BreadcrumbItem>
                        {item.href ? (
                          <BreadcrumbLink href={item.href}>
                            {item.label}
                          </BreadcrumbLink>
                        ) : (
                          <BreadcrumbPage>{item.label}</BreadcrumbPage>
                        )}
                      </BreadcrumbItem>
                      {index < breadcrumb.length - 1 && <BreadcrumbSeparator />}
                    </div>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            {leftContent && <div className="md:hidden">{leftContent}</div>}
          </div>
          {showRightContent && (
            <div className="flex items-center space-x-2.5 border-t border-border p-2.5 md:border-none">
              {rightContent}
            </div>
          )}
        </div>
        <div className="hidden items-center md:flex">{leftContent}</div>
      </div>
    </>
  );
};

export default HeaderNav;
