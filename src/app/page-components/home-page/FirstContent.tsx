import { intro } from "@/lib/constants";
import Image from "next/image";

export function FirstContent() {
  return (
    <div className="w-full md:flex mt-[15vh] md:flex-row flex flex-col-reverse items-center">
      <div className="w-1/2 flex flex-col md:ml-[15vw] gap-4">
        <p className="md:text-justify mt-10 md:mt-0 text-center">
          {intro.header}
        </p>
        <h1 className="text-4xl text-center md:text-start">
          I Am A <span className="font-bold">Web Developer </span>
          from Malaysia.
        </h1>
        <p className="text-sm text-gray-400 md:text-justify text-center">
          {intro.text}
        </p>
      </div>
      <div className="w-1/2 flex ml-[10vw]">
        <div className="w-full">
          <Image
            src={"/images/image.png"}
            width={300}
            height={300}
            alt="Not found"
            className="rounded-full bg-gray-200"
          />
        </div>
      </div>
    </div>
  );
}
