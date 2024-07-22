import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: 10, zIndex: 1,backgroundColor:"black" }}
      onClick={onClick}
    >
      <FaArrowRight size={20} />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: 10, zIndex: 1,backgroundColor:"black" }}
      onClick={onClick}
    >
      <FaArrowLeft size={20} />
    </div>
  );
};

export { SampleNextArrow, SamplePrevArrow };
