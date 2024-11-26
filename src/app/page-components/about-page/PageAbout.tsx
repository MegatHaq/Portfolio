import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Code } from "lucide-react";
import { pageAboutItem } from "@/lib/constants";

export function PageAbout() {
  return (
    <div className="flex mt-12 gap-12">
      <Code
        width={250}
        height={200}
        className="bg-gray-400 text-white rounded-full p-4"
      />
      <div className="w-full">
        <Accordion type="single" collapsible className="w-full">
          {pageAboutItem.map((item, index) => (
            <AccordionItem value={item.value} key={index}>
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
