import { FirstContent } from "./page-components/home-page/FirstContent";

export default function Home() {
  return (
    <div className="h-screen w-full overflow-auto">
      <div className="h-1/2">
        <FirstContent />
      </div>
      <div className="h-1/2">Second Content</div>
    </div>
  );
}
