import React from "react";
import error from "../assets/error-404.png";
import { Link } from "react-router";
const ErrorPage = () => {
  return (
    <div className="">
      <div className="flex justify-center ">
        <img className="w-[300px] h-[300px] pt-2" src={error} alt="" />
      </div>
      <div className="text-center">
        <h1 className="text-[#001931] text-5xl">Oops, page not found!</h1>
        <p className="text-[#627382] py-2">
          The page you are looking for is not available.
        </p>
        <div className="py-4">
          <Link
            to={"/"}
            className="items-center bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] py-2 px-4 text-white rounded"
          >
            Go Back!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
