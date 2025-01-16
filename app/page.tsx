"use client";

import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import HeroSection from "./components/HomeHero";
import HomeOffer from "./components/HomeOffer";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <div className="w-full h-full flex flex-col gap-24">
      <HeroSection />
      <HomeOffer/>
    </div>
  );
}
