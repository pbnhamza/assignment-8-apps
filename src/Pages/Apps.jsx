import React from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import { FiDownload } from "react-icons/fi";
import { IoIosStar } from "react-icons/io";
import { TbFileLike } from "react-icons/tb";
const Apps = () => {
  const { id } = useParams();
  const { allApps, loading } = useApps();
  const allAppsId = allApps.find((apps) => String(apps.id) === id);
  if (loading) return <p>loading.......</p>;
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

  const handleInstall = () => {
    const existingList = JSON.parse(localStorage.getItem("install"));

    let storedUpdateList = [];
    if (existingList) {
      const isDuplicates = existingList.some((p) => p.id === allAppsId.id);
      if (isDuplicates) return alert("add hobe na vai");
      storedUpdateList = [...existingList, allAppsId];
    } else {
      storedUpdateList.push(allAppsId);
    }
    localStorage.setItem("install", JSON.stringify(storedUpdateList));
  };

  return (
    <div className="md:px-20">
      <div className=" bg-white   shadow-sm p-4  md:flex md:justify-between items-center gap-10  ">
        <figure className="md:h-[350px] h-[390px] overflow-hidden ">
          <img
            className="w-full h-full object-cover rounded "
            src={image}
            alt=""
          />
        </figure>
        <div className="flex-col md:flex-1">
          <div className=" mb-7">
            <h2 className="text-[#001931] text-[32px] py-4 font-semibold text-left">
              {title}
            </h2>
            <h2>
              Developed by <span className="text-[#632EE3]">{companyName}</span>
            </h2>
          </div>
          <hr className="text-gray-300 " />
          <div className="flex flex-col md:flex-row  justify-items-start gap-6 mt-4 ">
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
            <button
              onClick={handleInstall}
              className="bg-[#00d390] py-[14px] px-[20px] rounded text-white text-[20px] font-semibold"
            >
              Install Now <span>({size}MB)</span>
            </button>
          </div>
        </div>
      </div>
      <div className="px-4">
        <h1 className="text-[#001931] font-semibold">Ratings</h1>
      </div>
      <div className="px-4">
        <h1 className="text-[#001931] font-semibold">Description</h1>
        <p className="text-justify text-[#627382]">{description}</p>
      </div>
    </div>
  );
};

export default Apps;
