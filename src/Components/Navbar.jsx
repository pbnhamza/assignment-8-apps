import { FaGithub } from "react-icons/fa6";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const goLink = () => {
    window.open("https://react-icons.github.io/react-icons/icons/fc/");
  };
  return (
    <div>
      <div className="navbar bg-[#e9e9e9] shadow-sm py-4 md:px-20 lg:px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavLink to={"/"}>
                <li className="mr-8">Home</li>
              </NavLink>
              <li className="mr-8">Apps</li>
              <li className="mr-8">Installation</li>
            </ul>
          </div>
          <div>
            <Link to={"/"} className="flex justify-between items-center gap-1">
              <img className="w-[40px] h-[40px]" src={logo} alt="" />
              <h1 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#632ee3] to-[#9f62f2] ">
                APPS HERO
              </h1>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLink to={"/"}>
              <li className="mr-8 font-semibold hover:text-purple-950">Home</li>
            </NavLink>
            <NavLink to={"/apps"}>
              <li className="mr-8 font-semibold ">Apps</li>
            </NavLink>

            <li className="mr-8 font-semibold">Installation</li>
          </ul>
        </div>
        <div className="navbar-end">
          <button
            onClick={goLink}
            className=" btn flex justify-between gap-1 items-center bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] py-3 px-4 text-white rounded"
          >
            <FaGithub />
            <h2 className="font-semibold">Contribute</h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
