import React, { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { IoIosStar } from "react-icons/io";
import { TbFileLike } from "react-icons/tb";

const Installation = () => {
  const [install, setInstall] = useState([]);

  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem("install"));
    if (saveList) setInstall(saveList);
  }, []);

  return (
    <div className="md:p-20">
      <div className=" ">
        <h1 className="text-5xl font-semibold text-center">
          Our All Applications
        </h1>
        <p className="text-[#627382] text-1.25rem text-center px-2 py-4">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="">
        <div className=" flex justify-between items-center">
          <h1 className="text-[#001931] text-2xl font-semibold">
            {install.length} Apps Found
          </h1>
          <button>Short</button>
        </div>
        <div className="flex justify-between items-center bg-red-400 p-4 rounded gap-6">
          <figure className="w-[80px] h-[80px] overflow-hidden ">
            <img
              className="w-full h-full object-cover rounded "
              src=""
              alt="#"
            />
          </figure>

          <div className="mt-4 flex-1 ">
            <h1 className="text-[#001931] text-[20px]">Name</h1>
            <div className="flex  items-center gap-6">
              <div className=" flex justify-center items-center gap-1 font-medium">
                <FiDownload className="text-[#00d390] h-[20px] " />
                <p className="text-[#001931]   text-[16px]">50M</p>
              </div>
              <div className=" flex justify-baseline items-center gap-1 font-medium">
                <IoIosStar className="text-[#FF8811] h-[20px] " />
                <p className="text-[#001931]  text-[16px]">4.5</p>
              </div>
              <div className=" flex justify-center items-center gap-1 font-medium">
                <TbFileLike className="text-[#632EE3] h-[20px]" />
                <p className="text-[#001931]   text-[16px]">0K</p>
              </div>
            </div>
          </div>
          <button className="bg-[#00d390] py-3 px-4 rounded text-white  font-semibold">
            Uninstall
          </button>
        </div>
      </div>
    </div>
  );
};

export default Installation;
