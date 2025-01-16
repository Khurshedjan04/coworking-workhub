"use client";

import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import Form from "../components/Form";
import ServiceMain from "../components/ServiceMain";
import ServiceHero from "../components/ServiceHero";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="w-full h-full flex flex-col gap-24">
      <ServiceHero />
      <ServiceMain />
      <Form
        title1="Ready to Join Us?"
        title2=""
        subtitle1=""
        subtitle2="Anything we should know before calling?"
      />
    </div>
  );
}
