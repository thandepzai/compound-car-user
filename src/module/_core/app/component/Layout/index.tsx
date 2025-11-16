import { ReactNode, memo } from "react";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
import '@/style/globals.css';

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen relative">
      <MainHeader />
      <body>{children}</body>
      <MainFooter />
    </div>
  );
};

export default memo(MainLayout);
