import image from "../assets/1.jpg";
import { GoPeople } from "react-icons/go";
import { BiGasPump, BiHeart } from "react-icons/bi";
import { BsSpeedometer2 } from "react-icons/bs";
import { PiSteeringWheelLight } from "react-icons/pi";
const CarItem = ({ km, price, model, year }) => {
  return (
    <div className="w-[31%] h-[380px] m-2 flex justify-between  shadow-lg  flex-col bg-slate-100 px-2 py-2 rounded-lg">
      <div className=" mb-2 rounded-lg overflow-hidden">
        <img src={image} alt="car" />
      </div>
      {/* description */}
      <div className="flex flex-col mb-2">
        <div className="flex justify-between mb-2 items-center">
          <p className=" font-medium text-indigo-950">{model}</p>
          <p className="border font-medium border-dashed rounded-xl border-blue-500 text-indigo-950 px-[6px] py-[2px]">
            {year}
          </p>
        </div>
        {/* specs */}
        <div className="w-[90%] flex flex-wrap items-center justify-between gap-2">
          <p className="flex items-center gap-1 text-gray-600 text-[12px]">
            <span className="block">
              <GoPeople color={"rgba(26, 137, 235, 0.8)"} size={14} />
            </span>
            4 People
          </p>
          <p className="text-gray-600 flex items-center mr-[18px] gap-1 text-[12px]">
            <span className="block">
              <BiGasPump color={"rgba(26, 137, 235, 0.8)"} size={14} />
            </span>
            Hybrid
          </p>

          <p className="text-gray-600 flex items-center gap-1 text-[12px]">
            <span className="block">
              <BsSpeedometer2 color={"rgba(26, 137, 235, 0.8)"} size={14} />
            </span>
            {km}Km/1-Litre
          </p>
          <p className="text-gray-600 flex items-center gap-1 text-[12px]">
            <span className="block">
              <PiSteeringWheelLight
                color={"rgba(26, 137, 235, 0.8)"}
                size={14}
              />
            </span>
            Automatic
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mb-2 bg-gray-400 h-[.5px]  w-[90%]" />
      </div>

      <div className="flex justify-between items-center ">
        <p className="">
          ${price} <span className="text-[10px]">/month</span>
        </p>
        <div className="flex justify-between items-center">
          <span className=" text-white   bg-blue-200 py-2 mr-2 px-2 rounded-lg">
            <BiHeart size={16} color={"rgba(26, 137, 235, 0.8)"} />
          </span>
          <button className=" text-white font-medium bg-blue-500 py-1 px-2 rounded-lg">
            Rent now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
