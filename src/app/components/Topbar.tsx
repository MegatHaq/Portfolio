"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

interface Item {
  label: string;
  url: string;
}

type TopBarProps = {
  items: Item[];
};

export function TopBar(props: TopBarProps) {
  const { items } = props;

  const pathName = usePathname();

  console.log(pathName);

  const inactiveLabel = "hover:cursor-pointer hover:border-b-2 border-black";

  const activeLabel = "border-b-2 border-[red]";

  return (
    <div className="flex justify-between mx-[10vw] mt-4 py-2">
      <div className="text-2xl hover:cursor-pointer font-bold">Megat.</div>
      <div className="flex gap-4 text-1xl">
        {items.map((item, index) => (
          <ul
            key={index}
            className={
              pathName.includes(item.label.toLowerCase())
                ? activeLabel
                : inactiveLabel
            }
          >
            <Link href={item.url}>
              <Label>{item.label}</Label>
            </Link>
          </ul>
        ))}
        {/* <ul className="items-baseline">
          <Label>Dark Mode</Label>
          <Switch className="ml-2" />
        </ul> */}
      </div>
    </div>
  );
}
