import { FirstContent } from "../page-components/home-page/FirstContent";
import { SecondContent } from "../page-components/home-page/SecondContent";

export default function Home() {
  return (
    <div className="w-full">
      <div className="h-1/2">
        <FirstContent />
      </div>
      <div className="h-1/2 md:mt-[15vh] mt-[10vh]">
        <SecondContent />
      </div>
    </div>
  );
}
