import Image from "next/image";
const ServiceHero = () => {
  return (
    <div
      data-aos="fade-in"
      className="relative w-full h-[75vh] bg-cover bg-center"
      style={{ backgroundImage: 'url("/co5.webp")' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col justify-center h-full text-white text-center px-10 sm:px-24 md:px-36">
        <h1 className="sm:text-6xl text-5xl  font-bold mb-4 flex flex-col text-start">
          <span data-aos="fade-up">Ideal Solutions</span>
          <span data-aos="fade-up" data-aos-delay="200">
            For Your Business
          </span>
        </h1>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex items-end pt-20 justify-center"
        >
          <a
            href="#services"
            type="submit"
            className=" p-2 bg-blue-500 text-white font-bold rounded-lg w-fit hover:bg-blue-700"
          >
            Discoer Our Services
          </a>
        </div>
        <Image
          src="/logoDark.png"
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
export default ServiceHero;
