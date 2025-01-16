import { services } from "../constants";
import SimpleButton from "./SimpleButton";

const ServicesMain: React.FC = () => {
  return (
    <div id="services"  className=" bg-white">
      <h2 id="services" 
        data-aos="fade-up"
        className="text-4xl text-center font-bold mb-8 text-cosumDarkBlue"
      >
        Our Services
      </h2>
      <div className="grid grid-rows-2 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:grid-rows-2 gap-6 px-6 md:px-16 place-items-center">
        {services.map((service, index) => (
          <div
            data-aos="fade-up"
            data-aos-delay={index * 100}
            key={index}
            className=" [perspective:1000px] group m-4"
          >
            <div className="relative w-[15rem] h-[20rem] [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)]">
              <div
                key={index}
                className=" [backface-visibility:hidden] relative w-full h-full bg-cover bg-center bg-no-repeat group flex items-center justify-center rounded-[1.25rem]"
                style={{ backgroundImage: `url(${service.url})` }}
              >
                <div className="bg-black bg-opacity-50 absolute inset-0 rounded-[1.25rem]"></div>
                <span className="absolute z-10 text-white font-bold text-3xl md:text-xl text-center">
                  {service.title}
                </span>
              </div>
              <div className="absolute w-full h-full top-0 left-0 [backface-visibility:hidden] flex justify-center items-center  [transform:rotateY(180deg)] text-cosumDarkBlue rounded-[1.25rem] shadow-md">
                <div className="p-4 text-center flex flex-col justify-end items-center gap-3">
                  <h3 className="text-2xl md:text-xl lg:text-lg font-bold mb-10">
                    {service.article}
                  </h3>
                  <SimpleButton text="Read More" link="/" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesMain;
