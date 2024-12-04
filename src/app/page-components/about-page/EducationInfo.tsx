import { Badge } from "@/components/ui/badge";
import { AnimatePresence, motion } from "motion/react";

type EducationInfoProps = {
  title: string;
  text: string;
  badge: string[];
  result: string;
  direction: boolean;
};

export function EducationInfo(props: EducationInfoProps) {
  const { text, title, badge, result, direction } = props;

  const variants = {
    enter: (direction: boolean) => {
      return {
        x: direction ? 100 : -100,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: boolean) => {
      return {
        zIndex: 0,
        x: direction ? -100 : 100,
        opacity: 0,
      };
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="flex flex-col z-0 ml-8 md:w-[35vw] lg:w-[40vw] absolute w-[60vw] md:left-[55vw] lg:left-[50vw] xl:left-[40vw] left-[8vw]"
        key={title}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        layout
      >
        <h1 className="text-2xl">{title}</h1>
        <div className="flex gap-4 mt-2">
          {badge.map((badge, index) => (
            <Badge key={index} className="">
              {badge}
            </Badge>
          ))}
        </div>
        <p className="text-sm mt-4 text-justify text-gray-500">{text}</p>
        <div className="mt-2 md:text-start text-center">
          <Badge variant={"outline"}>Final Results : {result}</Badge>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
