"use client";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

const Footer = () => {
  return (
    <div data-aos="fade-up"  className="w-full flex md:flex-row flex-col justify-between items-end text-lg md:px-[4.9rem] relative my-12 px-8 sm:px-0">
      <div className="flex flex-col w-full sm:w-fit">
        <div className="flex flex-col">
          <h1 className="font-bold text-base">Location:</h1>
          <h2 className="text-2xl lg:text-lg sm:text-2xl">Sergeli 6, Tashkent, Uzbekistan</h2>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl lg:text-base sm:text-xl">Email:</h1>
          <h2 className="text-2xl lg:text-lg sm:text-2xl">alimmamadovxurshid04@gmail.com</h2>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-base">Phone Number:</h1>
          <h2 className="font-bold text-3xl">+998 12 345-67-89</h2>
        </div>
        <h2 className="text-base">Xurshed Alimmamadov © 2025</h2>
      </div>
      <div className="absolute hidden md:block left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2">
        <Link href="/">
          <img className="w-44 h-fit" src="/logo.png" alt="Company Logo" />
        </Link>
      </div>
      <div className="flex gap-8 ">
        <a href="https://www.instagram.com/xurshed_alimmamadov/">
          <InstagramIcon fontSize="large" />
        </a>
        <a href="https://www.instagram.com/xurshed_alimmamadov/">
          <TelegramIcon fontSize="large" />
        </a>
      </div>
    </div>
  );
};
export default Footer;
