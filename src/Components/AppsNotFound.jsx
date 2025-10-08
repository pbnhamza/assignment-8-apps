import error from "../assets/App-Error.png";
const AppsNotFound = () => {
  return (
    <div className="">
      <div>
        <div className="flex justify-center ">
          <img className="w-[300px] h-[300px] pt-2" src={error} alt="" />
        </div>
        <div className="text-center">
          <h1 className="text-[#001931] text-5xl">Oops, Apps not found!</h1>
          <p className="text-[#627382] py-2">
            The Apps you are looking for is not available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppsNotFound;
