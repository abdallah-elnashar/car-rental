import React, { useEffect, useState } from "react";
import CarItem from "./CarItem";
import Pagination from "./Pagination";
import { data } from "../mock-data";

const CarCard = ({ searchText }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cars, setCars] = useState([]);
  const lastPostIndex = currentPage * 6;
  const firstPostIndex = lastPostIndex - 6;

  useEffect(() => {
    const filter = () => {
      let filteredData = data.filter((item) => {
        return searchText.toLowerCase() === ""
          ? item
          : item.model.toLowerCase().includes(searchText);
      });
      let newData =
        filteredData.length < firstPostIndex
          ? filteredData
          : filteredData.slice(firstPostIndex, lastPostIndex);
      setCars(newData);
    };

    filter();
  }, [searchText, firstPostIndex, lastPostIndex]);
  return (
    <>
      <div className="flex justify-between flex-wrap px-3 py-4 m-auto mt-5  rounded-lg shadow-md items-center w-[60%] bg-transparent">
        {cars.map((item) => {
          return <CarItem key={item.price} {...item} />;
        })}
      </div>
      <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </>
  );
};

export default CarCard;
