"use client";

import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

type TopBarChildProps = {
  text: string;
};

export function TopBarChild({ text }: TopBarChildProps) {
  const [active, setIsActive] = useState(false);

  return (
    <motion.div
      className=""
      onHoverStart={() => setIsActive(true)}
      onHoverEnd={() => setIsActive(false)}
    >
      <Label>{text}</Label>
      <AnimatePresence>
        <motion.div
          className="mt-2 h-[2px] bg-[red]"
          layout
          exit={{ opacity: 0 }}
          style={{ width: active ? "100%" : 0 }}
        ></motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
