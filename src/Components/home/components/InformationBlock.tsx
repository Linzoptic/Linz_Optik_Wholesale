import React from "react";
import ChooseComponent from "../../header/components/ChooseComponent";
import { productItems } from "../base";

const InformationBlock = ({selectedDatalength}:{selectedDatalength:number}) => {
  const sortBy: string[] = [
    "ADVERTISING",
    "BESTSELLERS",
    "ALPHABETICAL",
    "NEW RELEASES",
  ];

  return (
    <div className="block w-full md:grid gap-4 grid-cols-4 justify-between items-center">
      <div className="col-span-1">
        <div className="text-center text-white bg-[#094570] mb-2">
          <h1>SHOP BEST SELLER</h1>
        </div>
        <div className="text-center text-white bg-[#094570]">
          <h1>WISHLIST</h1>
        </div>
      </div>
      <div className="flex items-center justify-between py-2 border-b-[2px] col-span-3 flex-wrap">
        <div className="border-r-0 px-[5px] sm:border-r-2 z-10">
          <ChooseComponent props={sortBy} title="sort by" />
        </div>
        <div className=" ml-0 border-r-0 px-[5px] sm:border-r-2 md:ml-2">
          <p className="text-[14px] text-[#094579] font-[700] underline">
            {productItems.length}
            <span className="text-[13px] font-[600]"> :ITEMS</span>
          </p>
        </div>
        <div className=" hidden xs:block ml-0 border-r-0 px-[5px] sm:border-r-2 md:ml-2">
          <p className="text-[14px] text-[#094579] font-[700] underline">
              {selectedDatalength}
            <span className="text-[13px] font-[600]"> :ITEMS PER PAGE</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InformationBlock;
