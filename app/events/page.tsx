"use client";

import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import EventsMain from "../components/EventsMain";
import Form from "../components/Form";
import Navigation from "../Navigation";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
    <Navigation/>
    <div className="w-full h-full flex flex-col">
      <EventsMain />
      <Form
        title1="Need More Details"
        title2=""
        subtitle1="Custom plans are available for clients who request tailored solutions for unique needs"
        subtitle2="The Event You are Interested in"
      />
    </div>
    </>
  );
}
