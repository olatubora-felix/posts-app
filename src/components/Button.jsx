/* eslint-disable react/prop-types */
const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`py-2 px-4 bg-blue-800 text-white font-medium text-sm rounded-md w-full ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
