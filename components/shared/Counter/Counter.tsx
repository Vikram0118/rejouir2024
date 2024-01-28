"use client"

import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../../ui/lampui";
import { CounterBlock } from "./CounterBlock";
import { TextRevealCard } from "@/components/ui/text-reveal-card";

export function Counter() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-5 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl overflow-auto"
      >
        <TextRevealCard
          text={<CounterBlock />}
          revealText="March 13, 14, 15"
        >
        </TextRevealCard>
      </motion.h1>
    </LampContainer>
  );
}
