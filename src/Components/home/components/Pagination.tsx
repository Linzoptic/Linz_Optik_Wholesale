import React from "react";
import ChooseComponent from "../../header/components/ChooseComponent";
import { productItems } from "../base";

const Pagination = () => {
  const sortBy: string[] = [
    "ADVERTISING",
    "BESTSELLERS",
    "ALPHABETICAL",
    "NEW RELEASES",
  ];

  return (
    <div className="block w-full md:grid gap-4 grid-cols-4 justify-between items-center pb-2 ">
      <div className="col-span-1">
        <div className="text-center text-white bg-[#094570] mb-2">
          <h1>SHOP BEST SELLER</h1>
        </div>
        <div className="text-center text-white bg-[#094570]">
          <h1>WISHLIST</h1> 
        </div>
      </div>
      <div className="block text-center md:flex items-center justify-between py-2 border-b-[2px] col-span-3 flex-wrap">
        <div className="flex justify-between items-center">
          <div className="border-r-0 px-[5px] sm:border-r-2">
            <ChooseComponent props={sortBy} title="sort by" />
          </div>
          <div className="hidden xs:block ml-0 border-r-0 px-[5px] sm:border-r-2 md:ml-2">
            <p className="text-[12px] text-[#094579] font-[600]">
              {productItems.length}: ITEMS
            </p>
          </div>
          <div className="ml-0 border-r-0 px-[5px] sm:border-r-2 md:ml-2">
            <p className="text-[10px] md:text-[12px] text-[#094579] font-[600]">
              <span className="underline">{productItems.length / 2}</span> ITEMS  PER PAGE
            </p>
          </div>
        </div>
        <div className="text-right mt-3 lg:text-center md:mt-0">
          <p>here will be pagination</p>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
