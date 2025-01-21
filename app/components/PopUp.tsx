import CloseIcon from "@mui/icons-material/Close";

const PopUp = ({
  title,
  subtitle,
  desc,
  state,
  close,
}: {
  title: string;
  subtitle:string;
  desc:string;
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
        className={` transition-all duration-500 left-[50%] -translate-x-[50%] container mx-auto space-y-16 fixed bg-white w-11/12 xl:w-8/12 opacity-0 py-20 rounded-[1.25rem] ${
          state
            ? "-top-[50%]"
            : "top-[50%] -translate-y-[50%] opacity-100 pointer-events-auto"
        }  `}
      >
        <div className=" flex flex-col items-center gap-5 group px-16">
          <h3 className="text-4xl flex flex-col text-center font-bold mb-8 text-cosumDarkBlue w-full relative">
            <span>{title}</span>
            <span>{subtitle}</span>
            <span className="text-2xl sm:text-xl xl:text-base mt-2 font-semibold">{desc}</span>
            <span
              onClick={close}
              className="font-bold text-cosumDarkBlue absolute -top-12 right-0"
            >
              <CloseIcon />
            </span>
          </h3>
          <form className="space-y-4 w-full sm:w-3/4 lg:w-2/3 xl:w-1/2">
            <div>
              <label
                className="block text-cosumDarkBlue font-bold mb-1"
                htmlFor="name"
              >
                Your Name:
              </label>
              <input
                type="text"
                id="name"
                placeholder="What is your name?"
                required
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                className="block text-cosumDarkBlue font-bold mb-1"
                htmlFor="number"
              >
                Your Number:
              </label>
              <input
                type="text"
                id="number"
                placeholder="Your number..."
                required
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                className="block text-cosumDarkBlue font-bold mb-1"
                htmlFor="comments"
              >
                Your comment:
              </label>
              <textarea
                id="comments"
                placeholder="Your comment..."
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full p-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700"
              >
                Leave Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default PopUp;
