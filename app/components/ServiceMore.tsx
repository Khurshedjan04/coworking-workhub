import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";

const ServiceMore = ({
  title,
  url,
  subArticle,
  state,
  close,
}: {
  title: string;
  url: string;
  subArticle: string;
  state: boolean;
  close: () => void;
}) => {
  return (
    <div
      className={` w-full max-w-[1920px] h-full fixed top-0 left-0 transition-all duration-500 pointer-events-none px-[4.9rem] bg-transparent z-[100] ${
        state ? "backdrop-blur-none" : " backdrop-blur-md pointer-events-auto"
      } `}
    >
      <div
        className={` transition-all duration-700 left-[50%] -translate-x-[50%] container mx-auto space-y-16 fixed bg-white w-11/12 xl:w-8/12 opacity-0 py-20 rounded-[1.25rem] ${
          state ? "-top-[50%]" : "top-[50%] -translate-y-[50%] opacity-100 pointer-events-auto"
        }  `}
      >
        <div className=" flex flex-col items-center gap-5 group px-16">
          <h3
            className="text-4xl text-center font-bold mb-8 text-cosumDarkBlue w-full relative"
          >
            <span>{title}</span>
            <span onClick={close} className="font-bold text-cosumDarkBlue absolute -top-12 right-0">
              <CloseIcon />
            </span>
          </h3>
          <div
            className={`flex flex-col md:flex-row items-center justify-between w-full space-y-4 md:space-y-0 md:space-x-4`}
          >
            <div
              className="w-full md:w-[32rem] h-[22rem] rounded-[1.25rem] shadow-lg relative overflow-hidden"
            >
              <Image
                src={url}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-500"
              />
            </div>

            <div
              className="w-full md:w-1/3 p-8 text-center"
            >
              <p className="text-center text-2xl md:text-xl lg:text-base md:font-semibold text-cosumDarkBlue">
                {subArticle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceMore;
