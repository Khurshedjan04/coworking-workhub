import Image from "next/image";

const HeroSection = () => {
    return (
      <div
        data-aos="fade-in"
        className="relative w-full h-[75vh] bg-cover bg-center"
        style={{ backgroundImage: 'url("/hero.webp")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center h-full text-white text-center px-10 sm:px-24 md:px-36">
          <h1 className="sm:text-6xl text-5xl  font-bold mb-4 flex flex-col text-start">
            <span data-aos="fade-up">WorkHub Central - Your</span>
            <span data-aos="fade-up" data-aos-delay="200">
              Productive Co-Working Space
            </span>
          </h1>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-col gap-2 items-start"
          >
            <span>Request Free Consultation:</span>
            <form
              action="/" 
              className="flex flex-col md:flex-row gap-4"
            >
              <label htmlFor="phone-number" className="sr-only">
                Enter your phone number
              </label>
              <input
                type="text"
                id="phone-number"
                placeholder="Enter your number"
                className="px-4 py-2 text-gray-800 rounded-md w-full md:w-fit"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md text-white font-semibold"
              >
                Leave request
              </button>
            </form>
          </div>
          <Image
            src="/logoDark.webp"
            alt="WorkHub Logo"
            className="absolute bottom-4 right-4 w-48 md:w-60"
            layout="intrinsic"
            width={192}
            height={60}
          
          />
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  