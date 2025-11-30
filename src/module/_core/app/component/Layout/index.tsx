"use client";

import { ReactNode, memo } from "react";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
import "@/style/globals.css";
import { usePathname } from "next/navigation";

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const pathname = usePathname();

  if (pathname == "/login") return <>{children}</>;

  return (
    <>
      <MainHeader />
      {children}
      <MainFooter />
    </>
  );
};

export default memo(MainLayout);
