import React from "react";

const Title = (props) => {
  console.log(props);
  return <h2 className="font-bold text-2xl text-blue-800">{props.text}</h2>;
};

export default Title;
