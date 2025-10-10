import { FiDownload } from "react-icons/fi";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router";
const AppsCard = ({ apps }) => {
  const { title, image, downloads, ratingAvg, id } = apps;

  return (
    <Link
      to={`/apps/${id}`}
      className=" hover:scale-105  transition ease-in-out "
    >
      <div className=" bg-white rounded shadow-sm p-4 ">
        <figure className="md:h-[250px] h-[390px] overflow-hidden ">
          <img
            className="w-full h-full object-cover rounded "
            src={image}
            alt="image"
          />
        </figure>
        <div className=" ">
          <h2 className="text-[#001931] text-1rem py-4 font-semibold text-left">
            {title}
          </h2>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            <FiDownload className="text-[#00d390]" />
            <p className="text-[#00d390] font-medium text-1rem">{downloads}M</p>
          </div>
          <div className="flex gap-1 items-center">
            <IoIosStar className="text-[#FF8811]" />
            <p className="text-[#FF8811] font-medium text-1rem">{ratingAvg}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppsCard;
