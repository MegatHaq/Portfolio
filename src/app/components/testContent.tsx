"use client";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function Test() {
  const [boo, setBoo] = useState(0);
  const [booY, setBooY] = useState(0);
  const [booR, setBooR] = useState(0);

  const clickHandler = () => {
    setBoo((boo + 100) % 1000);
  };

  const clickHandler1 = () => {
    setBooY((booY + 100) % 500);
  };

  const clickHandler2 = () => {
    setBooR((booR + 30) % 210);
  };

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    console.log("sini : ", isActive);
  }, [isActive]);

  return (
    <div className="mx-[15vw] z-0">
      <motion.div
        className="bg-[red] w-[60px] mt-[10vh] mb-10 items-center mx-[15vw] text-white px-4 py-4 rounded-md"
        animate={{ x: boo, y: booY, rotate: booR }}
        transition={{ type: "spring" }}
      >
        Test
      </motion.div>
      <motion.div
        className="bg-black text-white w-[100px] text-center p-4 m-4 rounded-md flex flex-col"
        transition={{ type: "spring" }}
        onHoverStart={() => setIsActive(true)}
        onHoverEnd={() => setIsActive(false)}
      >
        HELLO
        <AnimatePresence>
          <motion.div
            className="h-[2px] bg-[red]"
            transition={{ type: "spring" }}
            layout
            exit={{ opacity: 0 }}
            style={{ width: isActive ? "100%" : 0 }}
          />
        </AnimatePresence>
      </motion.div>
      <Button className="mx-4" onClick={() => clickHandler()}>
        Slide Horizontally
      </Button>
      <Button className="mx-4" onClick={() => clickHandler1()}>
        Slide Vertical
      </Button>
      <Button className="mx-4" onClick={() => clickHandler2()}>
        Rotate
      </Button>
      <div className="mt-14">test</div>
    </div>
  );
}
