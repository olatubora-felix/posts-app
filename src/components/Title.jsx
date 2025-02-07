/* eslint-disable react/prop-types */
const Title = (props) => {
  console.log(props);
  return <h2 className="font-bold text-2xl text-blue-800 p-3">{props.text}</h2>;
};

export default Title;
