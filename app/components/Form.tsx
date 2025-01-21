const Form = ({
  title1,
  title2,
  subtitle1,
  subtitle2,
}: {
  title1: string;
  title2: string;
  subtitle1: string;
  subtitle2: string;
}) => {
  return (
    <div className="  py-12 text-cosumDarkBlue">
      <div className=" px-8 py-12 mx-auto sm:p-0 max-w-md">
        <h2 data-aos="fade-up"  className="text-4xl text-center font-bold mb-2 text-cosumDarkBlue">
          {title1}
        </h2>
        <h3 data-aos="fade-up"  className="text-4xl text-center font-bold mb-4">
          {title2}
        </h3>
        <p data-aos="fade-up" className="text-center text-cosumDarkBlue mb-6">
       {subtitle1}
        </p>
        <form data-aos="fade-up" className="space-y-4">
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
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              className="block text-cosumDarkBlue font-bold mb-1"
              htmlFor="comments"
            >
              {subtitle2}
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
  );
};

export default Form;
