import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

type ImageCarouselsProps = {
  item: string[];
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
};

export function ImageCarousels(props: ImageCarouselsProps) {
  const { item, current, setCurrent } = props;

  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div>
      <Carousel className="text-black w-full max-w-[20vw]" setApi={setApi}>
        <CarouselContent>
          {item.map((item, index) => (
            <CarouselItem key={index} className="">
              <Image
                src={item}
                alt="nothing"
                width={350}
                height={350}
                className="brightness-50 rounded-md"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
