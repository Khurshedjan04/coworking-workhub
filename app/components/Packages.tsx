import { packages } from "../constants";
import SimpleButton from "./SimpleButton";

const Packages = () => {
  return (
    <div className="py-16 bg-[#010018] flex flex-col items-center justify-center text-white">
      <h1 data-aos="fade-up" className="text-4xl font-bold mb-8">Membership Packages</h1>
      <div className="grid sm:grid-rows-2 grid-rows-4 sm:grid-cols-2 grid-cols-1  2xl:flex min-w-1/5 justify-center">
        {packages.map((item, index) => (
          // Flipping Card
          <div
            data-aos="fade-up" data-aos-delay={index * 100}
            key={index}
            className="w-[22rem] h-[28rem] [perspective:1000px] group m-4"
          >
            <div className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)] ">
              {/* front of the card */}
              <div className="absolute w-full h-full [backface-visibility:hidden] flex justify-center items-center bg-white text-cosumDarkBlue px-6 rounded-[1.25rem]">
                <div className="py-4 text-center">
                  <h3 className="text-3xl font-bold mb-6">{item.title}</h3>
                  <div className="flex flex-col gap-4">
                    {packages[index].article.map((article, index) => (
                      <span key={index} className="border-b">{article}</span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Back Side */}
              <div className="absolute w-full h-full [backface-visibility:hidden] flex justify-center items-center  [transform:rotateY(180deg)] text-white rounded-[1.25rem] overflow-hidden">
                <div className="p-4 text-center flex flex-col gap-5">
                  <div className="w-[120%] h-full absolute top-0 left-0 rounded-[1.25rem] overflow-hidden -z-10">
                    <video
                      src="/video1.mp4"
                      autoPlay
                      loop
                      muted
                      className="w-full h-full absolute top-0 left-0 pointer-events-none  scale-[2]"
                    ></video>
                  </div>
                  <span>Only</span>
                  <h3 className="text-5xl font-bold mb-16">${item.price}</h3>
                  <SimpleButton text="Join Now" link="/" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Packages;
