import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface Item {
  label: string;
  url: string;
}

type TopBarProps = {
  items: Item[];
};

export function TopBar(props: TopBarProps) {
  const { items } = props;

  return (
    <div className="flex justify-between mx-[10vw] mt-4 py-2">
      <div className="text-2xl hover:cursor-pointer font-bold">Megat.</div>
      <div className="flex gap-4 text-1xl">
        {items.map((item, index) => (
          <ul
            key={index}
            className="hover:cursor-pointer hover:border-b-2 border-black"
          >
            <Label>{item.label}</Label>
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
