import MainLayout from "module/_core/app/component/Layout";
import { Metadata } from "next";

export const metadata: Metadata = {
    icons: {
        icon: "/images/logo-steering.svg",
        apple: "/images/logo-steering.svg"
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <body>
                <MainLayout>{children}</MainLayout>
            </body>
        </html>
    );
}
