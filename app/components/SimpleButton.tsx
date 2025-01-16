import Link from "next/link";
import React from "react";

const SimpleButton = ({ text, link }: { text: string; link: string }) => {
  return (
    <div className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none w-fit">
      <Link href={link}>{text}</Link>
    </div>
  );
};

export default SimpleButton;
