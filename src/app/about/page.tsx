import { Separator } from "@/components/ui/separator";
import { EducationContent } from "../page-components/about-page/EducationContent";
import { MainContent } from "../page-components/about-page/MainContent";

export default function About() {
  return (
    <div className="flex flex-col h-screen w-full overflow-auto scrollbar">
      <div className="flex justify-center items-center text-4xl">
        <h1 className="border-b-2 border-[red] pb-2">About Me.</h1>
      </div>
      <div className="h-full w-full">
        <MainContent />
      </div>
      <Separator />
      <div className="h-full w-full mt-6">
        <EducationContent />
      </div>
      <Separator />
    </div>
  );
}
