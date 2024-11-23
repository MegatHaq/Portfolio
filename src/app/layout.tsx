import type { Metadata } from "next";
import "./globals.css";
import { TopBar } from "./components/Topbar";
import { OverviewBox } from "./components/overview";

export const metadata: Metadata = {
  title: "Megat Haq",
  description: "Personal Portfolio",
};

const items = [
  { label: "Home", url: "#" },
  { label: "Services", url: "#" },
  { label: "About", url: "#" },
  { label: "Portfolio", url: "#" },
  { label: "News", url: "#" },
  { label: "Label", url: "#" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-primary overflow-hidden">
        <OverviewBox TopBar={<TopBar items={items} />}>{children}</OverviewBox>
      </body>
    </html>
  );
}
