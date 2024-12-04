"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { TopBarChild } from "./TopBarChild";

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

  const inactiveLabel = "";

  const activeLabel = "";

  return (
    <div className="flex justify-between mx-[10vw] pt-8 py-2 sticky h-[10vh] top-0 z-10 backdrop-blur-[2px]">
      <div className="text-2xl hover:cursor-pointer font-bold">Megat.</div>
      <div className="flex gap-4 text-1xl">
        {items.map((item, index) => (
          <Link
            key={index}
            className={
              pathName.includes(item.label.toLowerCase())
                ? activeLabel
                : inactiveLabel
            }
            href={item.url}
          >
            <TopBarChild text={item.label} />
          </Link>
        ))}
        {/* <ul className="items-baseline">
          <Label>Dark Mode</Label>
          <Switch className="ml-2" />
        </ul> */}
      </div>
    </div>
  );
}
