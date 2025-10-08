import { Outlet } from "react-router";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const LayOuts = () => {
  return (
    <div className="inter  max-w-[1600px] mx-auto ">
      <Navbar></Navbar>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LayOuts;
