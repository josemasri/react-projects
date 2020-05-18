import React from "react";

const Recipe = ({ title, calories, image }) => {
  return (
    <div className="">
      <h1>{title}</h1>
      <p>{calories.toFixed(2)}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
