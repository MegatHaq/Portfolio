"use client";
import React from "react";
import { ImageCarousels } from "./Image-Carousels";
import { EducationInfo } from "./EducationInfo";

export function EducationContent() {
  const item = [
    "/images/kadir.jpg",
    "/images/dengkil.jpeg",
    "/images/unisza.jpeg",
  ];

  const [current, setCurrent] = React.useState(0);

  const description = [
    {
      title: "SMK Datuk Haji Abdul Kadir",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.",
      badge: ["High School", "5 Years"],
    },
    {
      title: "Pusat Asasi Dengkil",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.",
      badge: ["Foundation", "1 Year"],
    },
    {
      title: "Universiti Sultan Zainal Abidin",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.",
      badge: ["Degree", "3 Years"],
    },
  ];

  return (
    <div className="mx-[15vw] flex py-4">
      <div className="w-1/2">
        <ImageCarousels item={item} current={current} setCurrent={setCurrent} />
      </div>
      <div className="w-full">
        <EducationInfo {...description[current]} />
      </div>
    </div>
  );
}
