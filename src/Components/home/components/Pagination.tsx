import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Products } from "../base";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Pagination = ({
  productsData,
  setSelectedData,
}: {
  productsData: Products[],
  setSelectedData:  React.Dispatch<React.SetStateAction<Products[]>>,
}) => {

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productPerPage] = useState<number>(9);

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProcuct = indexOfLastProduct - productPerPage;

  useEffect(() => {
    setSelectedData(productsData.slice(indexOfFirstProcuct,indexOfLastProduct));
  },[currentPage]);
  
  const paginationCount = [];
  for (let i = 1; i < Math.ceil(productsData.length / productPerPage); i++) {
    paginationCount.push(i);
  };

  const onChangePagination = (number: number) => {
   setCurrentPage(number);
};

  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex flex-1 justify-between sm:hidden">
        <Link
          to="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-[3px] text-sm font-medium text-gray-700 hover:bg-gray-400 hover:text-gray-50 duration-200"
        >
          Previous
        </Link>
        <Link
          to="#"
          className="relative ml-3 inline-flex items-center rounded-md border px-4 border-gray-300  bg-white text-sm font-medium text-gray-700 hover:bg-gray-400 hover:text-gray-50 duration-200"
        >
          Next
        </Link>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <nav className="flex items-center justify-center text-[#091852]">
            <AiOutlineArrowLeft size={13}/>
            {paginationCount.map((number) => (
              <Link
                onClick={() => onChangePagination(number)}
                key={number}
                to="#"
                aria-current="page"
                className="border-b mx-[10px] px-[3px] border-[#091852] text-sm font-medium text-[#091852] cursor-pointer"
              >
                {number}
              </Link>
            ))}
            <AiOutlineArrowRight size={13}/>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
