/* eslint-disable react/prop-types */
const Button = (props) => {
  const { text } = props;
  return (
    <button
      className={`py-2 px-4 bg-blue-800 text-white font-medium text-sm rounded-md w-full ${props.className}`}
    >
      {text}
    </button>
  );
};

export default Button;
