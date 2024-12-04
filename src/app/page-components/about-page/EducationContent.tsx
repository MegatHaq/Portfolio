"use client";
import React from "react";
import { ImageCarousels } from "./Image-Carousels";
import { EducationInfo } from "./EducationInfo";
import { educationItem } from "@/lib/constants";
import { educationDescription } from "@/lib/constants";
import { Circle } from "lucide-react";

export function EducationContent() {
  const [current, setCurrent] = React.useState(0);
  const [max, setMax] = React.useState(0);
  const [direction, setDirection] = React.useState(true);
  const [initialCount, setInitialCount] = React.useState(current);

  const base = [0, 1, 2];

  if (initialCount !== current) {
    setInitialCount(current);
    setDirection(initialCount < current ? true : false);
  }

  React.useEffect(() => {
    console.log("initial", initialCount);
    console.log("current", current);
    console.log("direction", direction);
  }, [current]);

  return (
    <div className="md:mx-[10vw] md:flex md:flex-row py-4 flex flex-col">
      <div className="md:w-1/2 md:ml-6 md:mr-12 mx-[15vw] my-6 md:my-0">
        <ImageCarousels
          item={educationItem}
          current={current}
          setCurrent={setCurrent}
          setMax={setMax}
        />
        <div className="flex gap-2 mt-4">
          {base.map((item) => {
            if (item < current + 1)
              return <Circle width={10} fill="true" key={item} />;
            else return <Circle width={10} fill="none" key={item} />;
          })}
        </div>
      </div>
      <div className="w-full z-0 md:h-full h-[38vh]">
        <EducationInfo
          {...educationDescription[current]}
          direction={direction}
        />
      </div>
    </div>
  );
}
