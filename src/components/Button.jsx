import React from "react";

const Button = (props) => {
  const { text } = props;
  return (
    <button className="py-2 px-4 bg-blue-800 text-white font-medium text-sm rounded-md w-full">
      {text}
    </button>
  );
};

export default Button;
