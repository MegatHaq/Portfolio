import Image from "next/image";
import { PhotoContent } from "./PhotoContent";

export function MainContent() {
  return (
    <div className="flex mx-[15vw]">
      <div className="flex flex-col w-1/4 h-full mt-8">
        <Image
          src={"/images/about.jpeg"}
          width={150}
          height={150}
          alt="About-me"
          className="rounded-t-full rounded-b-md"
        />
        <div className="mt-4 ml-10">
          <p className="text-sm text-gray-400">This is me!</p>
        </div>
      </div>
      <div className="w-3/4 h-full mt-12">
        <PhotoContent />
      </div>
    </div>
  );
}
