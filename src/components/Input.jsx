import React from "react";

const Input = (props) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.name} className="text-gray-500 font-medium">
        {props.label}
      </label>
      {props.type === "textarea" ? (
        <textarea
          type="text"
          placeholder="Enter Post Body"
          className="w-full border border-gray-500 outline-none py-2 px-4 rounded-md placeholder:italic"
        ></textarea>
      ) : (
        <input
          type={props.type}
          placeholder={props.placeholder}
          className="w-full border border-gray-500 outline-none py-2 px-4 rounded-md placeholder:italic"
        />
      )}
    </div>
  );
};

export default Input;
