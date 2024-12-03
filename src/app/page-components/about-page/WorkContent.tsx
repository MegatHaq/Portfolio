import { SkillCards } from "./SkillCards";
import { skillItem } from "@/lib/constants";

export function WorkContent() {
  return (
    <div className="mt-6 flex gap-12 w-full">
      <div className="flex flex-col h-full">
        <div className="">
          <h1 className="text-2xl">Professional Skills.</h1>
        </div>
        <div className="mt-4 grid md:grid-cols-2 gap-2 w-full">
          {skillItem.map((item, index) => (
            <SkillCards {...item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
