import { Section } from "@/app/components/section";
import { Separator } from "@/components/ui/separator";
import { section } from "@/lib/constants";

export function SecondContent() {
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
