import { AspectRatio } from "@/components/ui/aspect-ratio";
import { intro } from "@/lib/constants";
import Image from "next/image";

export function FirstContent() {
  return (
    <div className="w-full flex mt-[15vh]">
      <div className="w-1/2 flex flex-col ml-[15vw] gap-4">
        <p className="text-justify">{intro.header}</p>
        <h1 className="text-4xl">
          I Am A <span className="font-bold">Web Developer </span>
          from Malaysia.
        </h1>
        <p className="text-sm text-gray-400 text-justify">{intro.text}</p>
      </div>
      <div className="w-1/2 flex ml-[10vw]">
        <div className="w-full">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={"/images/image.png"}
              width={300}
              height={300}
              alt="Not found"
              className="rounded-full bg-gray-200"
            />
          </AspectRatio>
        </div>
      </div>
    </div>
  );
}
