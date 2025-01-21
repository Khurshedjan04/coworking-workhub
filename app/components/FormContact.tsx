interface Field {
  label: string;
  placeholder: string;
}

interface FormProps {
  title1: string;
  subtitle1: string;
  fields: Field[];
  buttonText: string;
}

const Form: React.FC<FormProps> = ({
  title1,
  subtitle1,
  fields,
  buttonText,
}) => {
  return (
    <div>
      <h2
        data-aos="fade-up"
        className="text-4xl text-center font-bold mb-14 text-cosumDarkBlue"
      >
        {title1}
      </h2>
      <p className="text-center mb-8">{subtitle1}</p>
      <form className="space-y-10">
        {fields.map((field, index) => (
          <div key={index}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {field.label}
            </label>
            <input
              type="text"
              placeholder={field.placeholder}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default Form;
