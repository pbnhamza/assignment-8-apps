import React from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import { FiDownload } from "react-icons/fi";
import { IoIosStar } from "react-icons/io";
import { TbFileLike } from "react-icons/tb";
const Apps = () => {
  const { id } = useParams();
  const { allApps } = useApps();
  const allAppsId = allApps.find((apps) => String(apps.id) === id);
  const {
    image,
    title,
    downloads,
    ratingAvg,
    companyName,
    reviews,
    size,
    description,
  } = allAppsId || {};

  return (
    <div className="md:px-20">
      <div className=" bg-white rounded shadow-sm p-4 flex justify-between items-center gap-10 ">
        <figure className="md:h-[350px] h-[390px] overflow-hidden ">
          <img
            className="w-full h-full object-cover rounded "
            src={image}
            alt=""
          />
        </figure>
        <div className="flex-1">
          <div className=" mb-7">
            <h2 className="text-[#001931] text-[32px] py-4 font-semibold text-left">
              {title}
            </h2>
            <h2>
              Developed by <span className="text-[#632EE3]">{companyName}</span>
            </h2>
          </div>
          <hr className="text-gray-300 " />
          <div className="flex justify-items-start gap-6 mt-4 ">
            <div className="space-y-2 ml-6">
              <FiDownload className="text-[#00d390] w-[40px] h-[40px]" />
              <p className="text-[#001931]">Downloads</p>
              <p className="text-[#001931]  font-extrabold text-[40px]">
                {downloads}M
              </p>
            </div>
            <div className="space-y-2 ml-6">
              <IoIosStar className="text-[#FF8811] w-[40px] h-[40px]" />
              <p>Average Ratings</p>
              <p className="text-[#001931]  font-extrabold text-[40px]">
                {ratingAvg}
              </p>
            </div>
            <div className="space-y-2 ml-6">
              <TbFileLike className="text-[#632EE3] w-[40px] h-[40px]" />
              <p>Total Reviews</p>
              <p className="text-[#001931]  font-extrabold text-[40px]">
                {reviews}K
              </p>
            </div>
          </div>
          <div className="pt-6">
            <button className="bg-[#00d390] py-[14px] px-[20px] rounded text-white text-[20px] font-semibold">
              Install Now <span>({size}MB)</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1>Ratings</h1>
      </div>
      <div>
        <h1 className="text-[#001931] font-semibold">Description</h1>
        <p className="text-justify">{description}</p>
      </div>
    </div>
  );
};

export default Apps;
