import { articlessHome } from "../constants";
import Image from "next/image";

const HomeArticle = () => {
  return (
    <div className="px-[4.9rem] bg-white ">
      <div className="container mx-auto space-y-16">
        {articlessHome.map((item, index) => (
          <div key={index} className=" flex flex-col items-center gap-5 group">
            <h3
              data-aos="fade-up"
              className="text-4xl text-center font-bold mb-8 text-cosumDarkBlue"
            >
              {item.title}
            </h3>
            <div
              className={`flex flex-col md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } items-center justify-center space-y-4 md:space-y-0 md:space-x-4`}
            >
              <div
                data-aos="fade-up"
                className="w-full md:w-[32rem] h-[22rem] rounded-[1.25rem] shadow-lg relative overflow-hidden"
              >
                <Image
                  src={item.url}
                  alt={item.title}
                  className="group-hover:scale-105 duration-300"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="w-full md:w-1/3 p-8 text-center"
              >
                <p className="text-center text-2xl md:text-xl lg:text-base md:font-semibold text-cosumDarkBlue">
                  {item.article}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeArticle;
