import React from "react";
import { DotLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center mt-[200px]">
      <DotLoader></DotLoader>
    </div>
  );
};

export default Loader;
