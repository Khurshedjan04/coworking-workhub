import { articlessHome } from "../constants";

const HomeArticle = () => {
  return (
    <div className="px-[4.9rem] bg-white ">
      <div className="container mx-auto space-y-16">
        {articlessHome.map((item, index) => (
          <div
            key={index}
      
            className=" flex flex-col items-center gap-5"
          >
            <h3       data-aos="fade-up" className="text-4xl font-bold mb-8 text-cosumDarkBlue">{item.title}</h3>
            <div
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } items-center justify-center space-y-4 md:space-y-0 md:space-x-4`}
            >
              <div       data-aos="fade-up" className="w-full md:w-[32rem] h-[22rem]">
                <img
                  src={item.url}
                  alt={item.title}
                  className="rounded-[1.25rem] w-full h-full shadow-lg"
                />
              </div>
              <div       data-aos="fade-up" data-aos-delay="200" className="w-full md:w-1/2 p-8 lg:p-16 text-center md:text-left">
                <p className="text-center text-3xl md:text-xl lg:text-base font-semibold text-cosumDarkBlue">{item.article}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeArticle;
