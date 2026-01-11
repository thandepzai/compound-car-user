"use client";

import { ReactNode, memo } from "react";
import MainHeader from "./MainHeader";
import "style/globals.css";
import { usePathname } from "next/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toast } from "@lib/component/Toast/Toast";
import { useInitWindownSize } from "@lib/hook/useWindowSize";
import { useIsomorphicLayoutEffect } from "@lib/hook/useIsomorphicLayoutEffect";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            structuralSharing: false,
            refetchOnWindowFocus: false
        }
    }
});

const AnonyMousComponentHook = () => {
    const { isInit } = useInitWindownSize();

    useIsomorphicLayoutEffect(() => {
        if (isInit) document.getElementById("root")?.classList.remove("invisible");
    }, [isInit]);

    return null;
};

interface MainLayoutProps {
    children?: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    const pathname = usePathname();

    if (pathname == "/login") return <>{children}</>;

    return (
        <QueryClientProvider client={queryClient}>
            <div id="root" className="invisible">
                <MainHeader />
                {children}
            </div>
            <Toast />
            <AnonyMousComponentHook />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

export default memo(MainLayout);
