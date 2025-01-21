import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { events } from "../constants";
import PopUp from "./PopUp";
import { useState } from "react";

const EventsMain = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [openMore, setOpenMore] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(events[0]);

  const handleClick = (item: (typeof events)[0]) => {
    setSelectedEvent(item);
    setOpenMore(!openMore);
  };

  return (
    <div
      id="services"
      className="bg-[#010018] min-h-screen flex flex-col justify-center"
    >
      <h2
        id="services"
        data-aos="fade-up"
        className="text-4xl text-center font-bold mb-8 text-white"
      >
        Let&apos;s Enjoy
      </h2>

      <div className="relative overflow-hidden">
        {/* Slick Slider */}
        <div className="relative left-16 lg:left-0 w-10/12 mx-auto overflow-hidden ">
          <Slider {...sliderSettings}>
            {events.map((item, index) => (
              // Flipping Card
              <div
                data-aos="fade-up"
                data-aos-delay={index * 100}
                key={index}
                className="[perspective:1000px] group m-4"
              >
                <div className="relative w-[25rem] h-[35rem] lg:w-[22rem] lg:h-[28rem] 2xl:w-[20rem] 2xl:h-[28rem] [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)] ">
                  {/* front of the card */}
                  <div
                    className="absolute w-full h-full [backface-visibility:hidden] flex justify-center items-center bg-no-repeat bg-cover bg-center text-white px-6 rounded-[1.25rem]"
                    style={{ backgroundImage: `url(${item.url})` }}
                  >
                    <div className="w-full h-full absolute top-0 left-0 rounded-[1.25rem] overflow-hidden bg-black opacity-10"></div>
                    <div className="py-4 text-center">
                      <h3 className="text-3xl font-bold mb-6 bg-[#01001885] p-3 rounded-lg">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  {/* Back Side */}
                  <div className="absolute w-full h-full [backface-visibility:hidden] flex justify-center items-center  [transform:rotateY(180deg)] text-white rounded-[1.25rem] overflow-hidden ">
                    <div className="p-4 text-center flex items-center flex-col gap-5">
                      <div className="w-[120%] h-full absolute top-0 left-0 rounded-[1.25rem] overflow-hidden -z-10">
                        <video
                          src="/video1.mp4"
                          autoPlay
                          loop
                          muted
                          className="w-full h-full absolute top-0 left-0 pointer-events-none  scale-[2]"
                        ></video>
                      </div>
                      <h3 className="text-xl font-bold mb-16">
                        {item.article}
                      </h3>
                      <button
                        onClick={() => handleClick(item)}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none font-bold w-fit"
                      >
                        Participate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <PopUp
            title={`We will contact you shortly regarding`}
            subtitle={` the ${selectedEvent.title} event.`}
            desc="Please leave your contact information and any comments or questions you may have. "
            state={openMore}
            close={() => setOpenMore(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default EventsMain;
