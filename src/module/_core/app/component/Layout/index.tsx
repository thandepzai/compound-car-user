"use client";

import { ReactNode, memo } from "react";
import MainHeader from "./MainHeader";
import "style/globals.css";
import { usePathname } from "next/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            structuralSharing: false,
            refetchOnWindowFocus: false
        }
    }
});
interface MainLayoutProps {
    children?: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    const pathname = usePathname();

    if (pathname == "/login") return <>{children}</>;

    return (
        <QueryClientProvider client={queryClient}>
            <MainHeader />
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

export default memo(MainLayout);
