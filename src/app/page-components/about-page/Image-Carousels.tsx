import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  item: {
    image: string;
    card: {
      title: string;
      description: string;
    };
  }[];
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
};

export function ImageCarousels(props: ImageCarouselsProps) {
  const { item, setCurrent } = props;

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
              <Card className="border-2 shadow-md">
                <CardHeader>
                  <CardTitle>{item.card.title}</CardTitle>
                  <CardDescription>{item.card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src={item.image}
                    alt="nothing"
                    width={350}
                    height={350}
                    className="brightness-50 rounded-md"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
