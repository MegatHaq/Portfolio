import { Section } from "@/app/components/section";
import { Separator } from "@/components/ui/separator";
import { Code, Database, TestTube } from "lucide-react";

export function SecondContent() {
  const section = [
    {
      Icon: Code,
      title: "Web Development",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      Icon: TestTube,
      title: "Web Testing",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      Icon: Database,
      title: "Data Analysis",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <div className="flex justify-center gap-4 mx-[15vw]">
      {section.map((item, index) => (
        <div className="flex" key={index}>
          <Section {...item} />
          {index < section.length - 1 && <Separator orientation="vertical" />}
        </div>
      ))}
    </div>
  );
}
