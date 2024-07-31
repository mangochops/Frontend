import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../assets/images/benjamin-child-7Cdw956mZ4w-unsplash.jpg"; // Ensure you import the correct image
import Image from "../designLayouts/Image";

const HeroSection = () => (
  <div className="relative bg-gray-900 flex flex-col justify-center items-center h-screen w-full p-4 text-center">
    <Image className="absolute top-0 left-0 w-full h-full object-cover opacity-60" imgSrc={bannerImg} />
    <div className="relative z-10 max-w-lg mx-auto px-4 md:px-0">
      <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight w-full lg:w-full">
        Experience the Freedom of the Road
      </h1>

      <p className="mb-6 text-base sm:text-lg md:text-xl text-gray-300">
        Discover the best car hire deals and drive your adventure with us.
      </p>
      <Link to="/book-now">
        <button className="bg-primeColor text-white text-base sm:text-lg md:text-xl font-bodyFont w-40 sm:w-48 h-10 sm:h-12 hover:bg-black duration-300 font-bold">
          Book Now
        </button>
      </Link>
    </div>
  </div>
);

export default HeroSection;
