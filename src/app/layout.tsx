import type { Metadata } from "next";
import "./globals.css";
import { TopBar } from "./components/Topbar";
import { OverviewBox } from "./components/overview";

export const metadata: Metadata = {
  title: "Megat Haq",
  description: "Personal Portfolio",
};

const items = [
  { label: "Home", url: "home" },
  { label: "About", url: "about#" },
  { label: "Services", url: "#" },
  { label: "Portfolio", url: "#" },
  { label: "News", url: "#" },
  { label: "Label", url: "#" },
];

export default async function RootLayout({
  children,
  params,
}: {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
}) {
  const { slug } = await params;
  console.log(slug);

  return (
    <html lang="en">
      <body className="font-primary overflow-hidden scrollbar">
        <OverviewBox TopBar={<TopBar items={items} />}>{children}</OverviewBox>
      </body>
    </html>
  );
}
