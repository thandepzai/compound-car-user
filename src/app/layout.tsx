import MainLayout from "module/_core/app/component/Layout";

export default function RootLayout({
  children,
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
