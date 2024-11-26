import type { Metadata } from "next";
import "./globals.css";
import { TopBar } from "./components/Topbar";
import { OverviewBox } from "./components/overview";
import { navItems } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Megat Haq",
  description: "Personal Portfolio",
};

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
      <body className="font-primary overflow-hidden">
        <OverviewBox TopBar={<TopBar items={navItems} />}>
          {children}
        </OverviewBox>
      </body>
    </html>
  );
}
