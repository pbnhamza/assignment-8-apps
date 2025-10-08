import { Link } from "react-router";
import AppsCard from "../Components/AppsCard";
import Banner from "../Components/Banner";
import useApps from "../Hooks/useApps";

const Home = () => {
  const { allApps } = useApps();

  const fetchApps = allApps.slice(0, 8);

  return (
    <div>
      <Banner></Banner>
      <div className="md:px-20 lg:px-20 bg-gray-200 py-10">
        <div>
          <h1 className="text-5xl font-semibold text-center">Trending Apps</h1>
          <p className="text-[#627382] text-1.25rem text-center px-2 py-4">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 ">
          {fetchApps.map((apps) => (
            <AppsCard key={apps.id} apps={apps}></AppsCard>
          ))}
        </div>
        <div className="flex justify-center pt-10">
          <Link
            to={"/allApps"}
            className="bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] py-3 px-4 text-white rounded"
          >
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
