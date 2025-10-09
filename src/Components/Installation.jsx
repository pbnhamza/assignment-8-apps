import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { IoIosStar } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import AppsNotFound from "./AppsNotFound";
import { loadInstall } from "../Utils/localStorage";
import useApps from "../Hooks/useApps";
import Loader from "./Loader";
const Installation = () => {
  const { loading } = useApps;
  const [install, setInstall] = useState(() => loadInstall());
  const [sort, setSort] = useState("none");

  if (!install.length) return <AppsNotFound></AppsNotFound>;
  const sortSize = (() => {
    if (sort === "size-asc") {
      return [...install.sort((a, b) => a.size - b.size)];
    } else if (sort === "size-dsc") {
      return [...install.sort((a, b) => b.size - a.size)];
    } else {
      return install;
    }
  })();

  const handleRemove = (id) => {
    const existingList = JSON.parse(localStorage.getItem("install"));

    let storedUpdateList = existingList.filter((p) => p.id !== id);

    setInstall(storedUpdateList);
    toast("Uninstall this apps");
    localStorage.setItem("install", JSON.stringify(storedUpdateList));
  };

  return (
    <div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="md:p-20 bg-gray-200">
          <ToastContainer />
          <div className=" ">
            <h1 className="text-5xl font-semibold text-center">
              Our All Applications
            </h1>
            <p className="text-[#627382] text-1.25rem text-center px-2 py-4">
              Explore All Apps on the Market developed by us. We code for
              Millions
            </p>
          </div>
          <div className="">
            <div className=" flex justify-between items-center py-3">
              <h1 className="text-[#001931] text-2xl font-semibold">
                {install.length} Apps Found
              </h1>
              <div>
                <label className="form-control w-full max-w-xl">
                  <select
                    className="select select-bordered"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <option value="none">Sort by Size</option>
                    <option value="size-asc">Low to High</option>
                    <option value="size-dsc">High to Low</option>
                  </select>
                </label>
              </div>
            </div>
            <div>
              {sortSize.map((p, index) => (
                <div key={index} className="py-1">
                  <div className="flex justify-between items-center p-4 rounded gap-6 border-1 border-gray-200 bg-[#ffffff] shadow ">
                    <figure className="w-[80px] h-[80px] overflow-hidden ">
                      <img
                        className="w-full h-full object-cover rounded "
                        src={p.image}
                        alt="#"
                      />
                    </figure>

                    <div className="mt-4 flex-1 ">
                      <h1 className="text-[#001931] text-[20px]">{p.title}</h1>
                      <div className="flex  items-center gap-6">
                        <div className=" flex justify-center items-center gap-1 font-medium">
                          <FiDownload className="text-[#00d390] h-[20px] " />
                          <p className="text-[#001931]   text-[16px]">
                            {p.downloads}M
                          </p>
                        </div>
                        <div className=" flex justify-baseline items-center gap-1 font-medium">
                          <IoIosStar className="text-[#FF8811] h-[20px] " />
                          <p className="text-[#001931]  text-[16px]">
                            {p.ratingAvg}
                          </p>
                        </div>
                        <div className=" flex justify-center items-center gap-1 font-medium">
                          <p className="text-[#001931]   text-[16px]">
                            {p.size}MB
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemove(p.id)}
                      className="bg-[#00d390] py-3 px-4 rounded text-white  font-semibold"
                    >
                      Uninstall
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Installation;
