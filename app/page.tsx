"use client";

import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import HeroSection from "./components/HomeHero";
import HomeOffer from "./components/HomeOffer";
import HomeArticle from "./components/HomeArticle";
import Packages from "./components/Packages";
import Form from "./components/Form";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className="w-full h-full flex flex-col gap-24">
      <HeroSection />
      <HomeOffer />
      <HomeArticle />
      <Packages />
      <div data-aos="fade-up">
        <Form
          title1="Unique Needs?"
          title2="We Have Tailored Solution!"
          subtitle1="Custom plans are available for clients who request tailored solutions for unique needs"
          subtitle2="Anything we should know before calling?"
        />
      </div>
    </div>
  );
}
