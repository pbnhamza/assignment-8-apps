import play from "../assets/googlePlay.png";
import apps from "../assets/apps.png";
import hero from "../assets/hero.png";

const Banner = () => {
  const goLink1 = () => {
    window.open("https://play.google.com/store/games?hl=en");
  };
  const goLink2 = () => {
    window.open("https://www.apple.com/app-store/");
  };
  return (
    <div className="bg-gray-200">
      <div className="py-20 ">
        <div className="space-y-4">
          <h1 className="text-7xl font-semibold text-center">
            We Build <br />
            <span className=" bg-clip-text text-transparent bg-gradient-to-r from-[#632ee3] to-[#9f62f2]">
              Productive
            </span>{" "}
            Apps
          </h1>
          <p className="text-[#627382] text-1.25rem text-center px-2">
            AtHERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br />
            Our goal is to turn your ideas into digital experiences that truly
            make an impact.
          </p>
        </div>
        <div className="flex justify-center items-center gap-4 py-10">
          <button
            onClick={goLink1}
            className="bg-[#d2d2d2] cursor-pointer text-[#001931] text-1.25rem font-semibold flex justify-between gap-2.5 items-center py-3 px-6 rounded"
          >
            <img src={play} alt="" />
            <h3>Google Play</h3>
          </button>
          <button
            onClick={goLink2}
            className="bg-[#d2d2d2] cursor-pointer text-[#001931] text-1.25rem font-semibold flex justify-between gap-2.5 items-center py-3 px-6 rounded"
          >
            <img src={apps} alt="" />
            <h3>App Store</h3>
          </button>
        </div>
        <div className="flex justify-center items-center px-4 ">
          <img className="object-cover" src={hero} alt="" />
        </div>
        <div className="bg-gradient-to-tr from-[#632ee3] to-[#9F62F2] p-20">
          <h1 className="text-5xl font-bold text-center text-white ">
            Trusted by Millions, Built for You
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center md:gap-6 md:pt-10 ">
            <div className="text-white text-center">
              <h2 className="font-normal text-1rem">Total Downloads</h2>
              <p className="font-extrabold text-[64px] px-[70px]">29.6M</p>
              <h3 className="font-normal text-1rem">
                21% more than last month
              </h3>
            </div>
            <div className="text-white text-center">
              <h2 className="font-normal text-1rem">Total Downloads</h2>
              <p className="font-extrabold text-[64px] px-[70px]">29.6M</p>
              <h3 className="font-normal text-1rem">
                21% more than last month
              </h3>
            </div>
            <div className="text-white text-center">
              <h2 className="font-normal text-1rem">Total Downloads</h2>
              <p className="font-extrabold text-[64px] px-[70px]">29.6M</p>
              <h3 className="font-normal text-1rem">
                21% more than last month
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
