"use client";

import { usePathname } from "next/navigation";

const TopNav = () => {
  const pathname = usePathname();
  const currentPage = pathname.split('/').filter(Boolean).pop();

  return (
    <div>
      <div>Current page: {currentPage}</div>
    </div>
  );
};

export default TopNav;
