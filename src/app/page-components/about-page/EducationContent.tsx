"use client";
import React from "react";
import { ImageCarousels } from "./Image-Carousels";
import { EducationInfo } from "./EducationInfo";
import { educationItem } from "@/lib/constants";
import { educationDescription } from "@/lib/constants";

export function EducationContent() {
  const [current, setCurrent] = React.useState(0);

  return (
    <div className="mx-[15vw] md:flex md:flex-row py-4 flex flex-col">
      <div className="md:w-1/2 md:mx-5 mx-8 my-6 md:my-0">
        <ImageCarousels
          item={educationItem}
          current={current}
          setCurrent={setCurrent}
        />
      </div>
      <div className="w-full">
        <EducationInfo {...educationDescription[current]} />
      </div>
    </div>
  );
}
