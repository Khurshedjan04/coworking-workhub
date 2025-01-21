"use client";

import Map from "../components/Map";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import Form from "../components/FormContact";
import NavContact from "../components/NavContact";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <NavContact />
      <div className="w-full lg:h-screen flex items-center justify-center px-16 py-16 gap-12">
        <div className="lg:h-fit w-full flex lg:flex-row flex-col items-center justify-center">
          <div
            data-aos="fade-up"
            className="lg:w-6/12 w-full py-12 px-1 lg:p-12 lg:mx-auto rounded-lg"
          >
            <Form
              title1="Let Us Contact You"
              subtitle1="Our consultants give you tailored Solution"
              fields={[
                { label: "Your Name:", placeholder: "What is your name?" },
                { label: "Your Number:", placeholder: "Your number..." },
                {
                  label: "Anything we should know before calling?",
                  placeholder: "Your comment...",
                },
              ]}
              buttonText="Leave Request"
            />
          </div>

          <div className="lg:w-6/12 w-full p-12 px-1 lg:p-12 lg:mx-auto rounded-lg">
            <h2
              data-aos="fade-up"
              className="text-4xl text-center font-bold mb-8 text-cosumDarkBlue"
            >
              Visit Us
            </h2>
            <div data-aos="fade-up" data-aos-delay="100">
              <Map />
            </div>
            <div className="mt-4 text-center">
              <p data-aos="fade-up" className="text-lg font-semibold">
                Sergeli 6, Tashkent, Uzbekistan
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
