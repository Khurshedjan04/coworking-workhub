import SimpleButton from "./SimpleButton";

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
          className="flex items-end pt-16` justify-center"
        >
          <SimpleButton link="/" text="Discover Our Services"/>
        </div>
        <img
          src="/logoDark.png"
          alt="WorkHub Logo"
          className="absolute bottom-4 right-4 w-48 md:w-60"
        />
      </div>
    </div>
  );
};
export default ServiceHero;
