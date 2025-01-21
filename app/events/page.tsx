"use client";

import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import EventsMain from "../components/EventsMain";
import Form from "../components/Form";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className="w-full h-full flex flex-col">
      <EventsMain />
      <div data-aos="fade-up">
        <Form
          title1="Need More Details"
          title2=""
          subtitle1="Custom plans are available for clients who request tailored solutions for unique needs"
          subtitle2="The Event You are Interested in"
        />
      </div>
    </div>
  );
}
