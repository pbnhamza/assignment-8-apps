import React from "react";
import { PacmanLoader, PropagateLoader } from "react-spinners";
import image from "../assets/logo.png";

const Loader = () => {
  return (
    <div className="flex justify-center  items-center mt-[180px]  ">
      <div className="py-5">
        <PacmanLoader className="scale-400" color="#00d390"></PacmanLoader>
      </div>
      <div className="scale-90 py-5 ml-60">
        <img
          className="h-[100px] w-[100px] animate-spin"
          src={image}
          alt="Loader....."
        />
      </div>
    </div>
  );
};

export default Loader;
