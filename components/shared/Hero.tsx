"use client";
import React from "react";
import { heroImage } from "@/constants";
import { HeroParallax } from "../ui/hero-parallex";

export default function Hero() {
  return <HeroParallax products={heroImage} />;
}