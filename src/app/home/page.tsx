import { FirstContent } from "../page-components/home-page/FirstContent";
import { SecondContent } from "../page-components/home-page/SecondContent";

export default function Home() {
  return (
    <div className="h-screen w-full overflow-auto scrollbar">
      <div className="h-1/2">
        <FirstContent />
      </div>
      <div className="h-1/2 mt-8">
        <SecondContent />
      </div>
    </div>
  );
}
