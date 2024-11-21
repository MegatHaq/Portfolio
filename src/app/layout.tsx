import type { Metadata } from "next";
import "./globals.css";
import { TopBar } from "./components/Topbar";
import { OverviewBox } from "./components/overview";

export const metadata: Metadata = {
  title: "Megat Haq",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-primary overflow-hidden">
        <OverviewBox TopBar={<TopBar />}>{children}</OverviewBox>
      </body>
    </html>
  );
}
