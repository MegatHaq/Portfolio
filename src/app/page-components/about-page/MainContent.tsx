import Image from "next/image";
import { PhotoContent } from "./PhotoContent";

export function MainContent() {
  return (
    <div className="md:flex md:flex-row flex flex-col mx-[15vw] items-center md:items-start">
      <div className="flex flex-col md:w-1/4 h-full mt-8">
        <Image
          src={"/images/about.jpeg"}
          width={150}
          height={150}
          alt="About-me"
          className="rounded-t-md rounded-b-md"
        />
        <div className="mt-4 md:ml-10 text-center md:text-start">
          <p className="text-sm text-gray-400">This is me!</p>
        </div>
      </div>
      <div className="w-full h-full mt-12">
        <PhotoContent />
      </div>
    </div>
  );
}
