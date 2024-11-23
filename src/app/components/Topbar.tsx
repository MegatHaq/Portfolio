import { Label } from "@/components/ui/label";

export function TopBar() {
  return (
    <div className="flex justify-between mx-[10vw] mt-4 py-2">
      <div className="text-2xl hover:cursor-pointer font-bold">Megat.</div>
      <div className="flex gap-4 text-1xl">
        <ul className="hover:cursor-pointer">
          <Label>Home</Label>
        </ul>
        <ul className="hover:cursor-pointer">
          <Label>Services</Label>
        </ul>
        <ul className="hover:cursor-pointer">
          <Label>About</Label>
        </ul>
        <ul className="hover:cursor-pointer">
          <Label>Portfolio</Label>
        </ul>
        <ul className="hover:cursor-pointer">
          <Label>News</Label>
        </ul>
        <ul className="hover:cursor-pointer">
          <Label>Contact</Label>
        </ul>
        {/* <ul className="items-baseline">
          <Label>Dark Mode</Label>
          <Switch className="ml-2" />
        </ul> */}
      </div>
    </div>
  );
}
