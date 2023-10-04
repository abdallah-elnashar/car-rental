import { FcPrevious, FcNext } from "react-icons/fc";

const Pagination = ({ setCurrentPage, currentPage }) => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className=" px-3 py-4 m-auto my-3 rounded-lg shadow-md p-2 flex justify-between items-center w-[60%] bg-slate-200">
      <p className="text-gray-700"> {currentPage} from 10 pages</p>
      <div className="flex items-center gap-2">
        <button
          onClick={() => {
            if (currentPage == 1) return;
            setCurrentPage(currentPage - 1);
          }}
          className=" rounded-md px-2 py-[7px] bg-white text-gray-600"
        >
          <FcPrevious size={14} />
        </button>
        {pages.map((page, index) => {
          return (
            <button
              onClick={() => {
                setCurrentPage(page);
              }}
              className={`rounded-md  px-2 py-[1px] text-gray-600 ${
                page == currentPage ? "bg-blue-400 text-white" : "bg-white"
              }`}
              key={index}
            >
              {page}
            </button>
          );
        })}
        <button
          onClick={() => {
            if (currentPage == 10) return;
            setCurrentPage(currentPage + 1);
          }}
          className=" rounded-md px-2 py-[7px] bg-white text-gray-600"
        >
          <FcNext size={14} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
