/* eslint-disable react/prop-types */
const Input = ({ name, label, type, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-gray-500 font-medium">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          type="text"
          placeholder="Enter Post Body"
          className="w-full border border-gray-500 outline-none py-2 px-4 rounded-md placeholder:italic"
          onChange={onChange}
          value={value}
        ></textarea>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="w-full border border-gray-500 outline-none py-2 px-4 rounded-md placeholder:italic"
          onChange={onChange}
          value={value}
        />
      )}
    </div>
  );
};

export default Input;
