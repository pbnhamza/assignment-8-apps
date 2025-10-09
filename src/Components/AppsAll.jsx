import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import AppsCard from "../Components/AppsCard";
import AppsNotFound from "../Components/AppsNotFound";
import Loader from "./Loader";

const AppsAll = () => {
  const { allApps } = useApps();

  const [search, setSearch] = useState("");
  const searchTrim = search.trim().toLowerCase();

  const searchApps = searchTrim
    ? allApps.filter((apps) => apps.title.toLowerCase().includes(searchTrim))
    : allApps;

  return (
    <div className="">
      <div className="md:px-20 lg:px-20 bg-gray-200 py-10">
        <div>
          <h1 className="text-5xl font-semibold text-center">
            Our All Applications
          </h1>
          <p className="text-[#627382] text-1.25rem text-center px-2 py-4">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="pt-10 pb-4 flex justify-between items-center px-2">
          <div>
            <h1 className="text-[#001931] text-2xl font-semibold">
              <span>({searchApps.length})</span> Apps Found
            </h1>
          </div>
          <div>
            <label className="input">
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="Search Apps"
              />
            </label>
          </div>
        </div>
        {searchApps.length ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 ">
            {searchApps.map((apps) => (
              <AppsCard key={apps.id} apps={apps}></AppsCard>
            ))}
          </div>
        ) : (
          <AppsNotFound></AppsNotFound>
        )}
      </div>
    </div>
  );
};

export default AppsAll;
