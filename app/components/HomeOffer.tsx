import Image from "next/image";
import "aos/dist/aos.css";
import SimpleButton from "./SimpleButton";
import { conditionsHome, iconsHome } from "../constants";

const HomeOffer = () => {
  return (
    <div className="py-16 bg-white flex flex-col gap-16">
      <div className="container mx-auto text-center flex flex-col items-center">
        <h2
          data-aos="fade-up"
          className="text-4xl font-bold mb-8 text-cosumDarkBlue"
        >
          We Offer
        </h2>
        <div className="xl:flex justify-between grid grid-rows-3 grid-cols-2 md:grid-cols-3 md:grid-rows-2 w-full">
          {iconsHome.map((item, index) => (
            <div
              key={index}
              className="text-center "
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-[5.6rem] h-[5.6rem] mx-auto mb-4"
              />
              <h3 className="font-medium">{item.title}</h3>
            </div>
          ))}
        </div>
        <div data-aos="fade-up" className="mt-8">
          <SimpleButton text="See All" link="/service" />
        </div>
      </div>

      <div className="container mx-auto text-center flex flex-col items-center justify-center">
        <h2
          data-aos="fade-up"
          className="text-4xl font-bold mb-8 text-cosumDarkBlue"
        >
          Ideal Conditions
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
          {conditionsHome.map((item, index) => (
            <div
              key={index}
              className="text-center flex flex-col sm:flex-row items-center justify-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Image
                src={item.url}
                alt={item.title}
                className="mx-auto mb-4 w-32 h-31"
                layout="intrinsic"
                width={128}
                height={124}
              />
              <h3 className="font-bold text-[1.5rem] text-cosumDarkBlue">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeOffer;
