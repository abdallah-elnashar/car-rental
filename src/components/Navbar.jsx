import { FiSearch } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";

const Navbar = ({ searchText, setSearchText }) => {
  return (
    <nav className="  px-3 py-4 m-auto mt-3 rounded-lg shadow-md p-2 flex items-center w-[60%] bg-slate-200 ">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3 rounded-xl bg-white p-3 pt-2 pb-2  ">
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            className=" w-60  bg-white text-sm focus:outline-none"
            placeholder="Search"
          ></input>
          <FiSearch size={20} color="gray" className="cursor-pointer" />
        </div>
        <p className="flex text-sm font-medium cursor-pointer items-center  gap-[5px] text-indigo-950">
          Relevance
          <span className="mt-1 font-medium">
            <BsChevronDown size={12} />
          </span>
        </p>
        <p className="cursor-pointer flex text-sm font-medium items-center  gap-[5px] text-indigo-950">
          All brands
          <span className="mt-1 font-medium">
            <BsChevronDown size={12} />
          </span>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
