import Link from "next/link";

const SimpleButton = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link href={link}>
      <div className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none font-bold w-fit">
        {text}
      </div>
    </Link>
  );
};

export default SimpleButton;
