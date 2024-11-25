import { Separator } from "@/components/ui/separator";
import { EducationContent } from "../page-components/about-page/EducationContent";
import { MainContent } from "../page-components/about-page/MainContent";
import { PageAbout } from "../page-components/about-page/PageAbout";
import { WorkContent } from "../page-components/about-page/WorkContent";

export default function About() {
  return (
    <div className="h-screen w-full overflow-auto scrollbar">
      <div className="flex justify-center items-center text-4xl mt-12">
        <h1 className="border-b-2 border-[red] pb-2">About Me.</h1>
      </div>
      <div className="w-full mb-6">
        <MainContent />
      </div>
      <Separator />
      <div className="w-full mt-6">
        <div className="flex justify-center items-center text-4xl mb-8">
          <h1 className="border-b-2 border-[red] pb-2">Education.</h1>
        </div>
        <EducationContent />
      </div>
      <Separator />
      <div className="mt-6">
        <div className="flex justify-center items-center text-4xl">
          <h1 className="border-b-2 border-[red] pb-2">
            Skills & Achievements.
          </h1>
        </div>
        <div className="mb-20 mx-[15vw]">
          <WorkContent />
        </div>
      </div>
      <Separator />
      <div className="mt-6">
        <div className="flex justify-center items-center text-4xl">
          <h1 className="border-b-2 border-[red] pb-2">About This Website.</h1>
        </div>
        <div className="mb-20 mx-[15vw]">
          <PageAbout />
        </div>
      </div>
    </div>
  );
}
