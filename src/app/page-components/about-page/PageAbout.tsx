import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Code } from "lucide-react";

export function PageAbout() {
  const item = [
    {
      trigger: "How was this website developed?",
      content:
        "This website is developed using NextJS,ReactJS and TailwindCSS.",
      value: "index 1",
    },
    {
      trigger: "How was this website deployed?",
      content: "This website is currently being deployed via Vercel.",
      value: "index 2",
    },
    {
      trigger: "Who is the developer of the website?",
      content: "I , Megat Haq am the sole developer of the website.",
      value: "index 3",
    },
  ];

  return (
    <div className="flex mt-12 gap-12">
      <Code
        width={250}
        height={200}
        className="bg-gray-400 text-white rounded-full p-4"
      />
      <div className="w-full">
        <Accordion type="single" collapsible className="w-full">
          {item.map((item, index) => (
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
