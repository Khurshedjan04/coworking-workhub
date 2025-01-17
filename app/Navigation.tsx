"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import SimpleButton from "./components/SimpleButton";
import { navLinks } from "./constants";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={` ${
        scrolled ? "text-cosumDarkBlue" : "text-white"
      } w-full h-20 z-10 fixed top-0 `}
      data-aos="fade-down"
    >
      <div className="block md:hidden text-5xl absolute top-3 right-6">
        <MenuIcon fontSize="inherit" />
      </div>
      <div
        className={` transition-all duration-300 w-full h-full px-8  flex justify-between items-center text-lg sm:px-[4.9rem] text-white ${
          scrolled ? "bg-white !text-cosumDarkBlue shadow-md " : ""
        } `}
      >
        <div className="w-fit flex gap-8 items-center">
          <Link href="/">
            <Image
              className="transition-all w-44 h-fit"
              src={`${scrolled ? "/logoDark.png" : "/logo.png"}`}
              alt="Company Logo"
              width={192}
              height={60}
            />
          </Link>
          <div className="flex flex-col items-center sm:flex-row gap-8 font-bold">
            {navLinks.map((link, key) => (
              <div
                key={key}
                className="mb-3 hidden md:flex group relative w-fit"
              >
                <div
                  className={` relative before:content-[''] before:transition-all before:absolute before:-bottom-1 before:h-0.5 before:w-0 before:bg-cosumDarkBlue hover:before:w-1/2 before:left-1/2 after:content-[''] after:transition-all after:absolute after:-bottom-1 after:h-0.5 after:w-0 after:bg-cosumDarkBlue hover:after:w-1/2 after:right-1/2 
                ${scrolled ? "" : "before:bg-white after:bg-white "}
                `}
                >
                  <Link href={link.link}>
                    <h1 className="text-2xl lg:text-lg sm:text-2xl">
                      {link.title}
                    </h1>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:flex gap-8">
          <div className="w-fit xl:flex hidden gap-8 items-center">
            <Link href="/">+998 90 452 49 46</Link>
          </div>

            <SimpleButton text="Leave Request" link="/" />
   
        </div>
      </div>
    </div>
  );
};

export default Navigation;
