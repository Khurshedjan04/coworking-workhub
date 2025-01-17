"use client";
import CloseIcon from "@mui/icons-material/Close";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import Form from "../components/Form";
import NavContact from "../components/NavContact";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="w-full lg:h-screen flex items-center justify-center px-16 py-16 gap-12">
        <div className="lg:h-fit w-full flex lg:flex-row flex-col items-center justify-center">
          <div className="lg:w-6/12 w-11/12  p-12 lg:mx-auto rounded-lg relative">
            <div className="absolute top-12 right-8 cursor-pointer">
              <Link href="/">
                <CloseIcon />
              </Link>
            </div>
            <Form
              title1="Leave Your Request Here"
              subtitle1="We Will Contact You Soon"
              title2=""
              subtitle2="Leave Your Request Here"
            />
          </div>
        </div>
      </div>
    </>
  );
}
