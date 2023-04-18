import React from "react";
import { IHomePageTexts } from "../../../utils/interface";
import ChooseComponent from "../../header/components/SortHeader";

const InformationBlock = ({
  totolCountRef,
  homePageTexts,
}: {
  totolCountRef: React.MutableRefObject<number>;
  homePageTexts: IHomePageTexts | undefined;
}) => {
  return (
    <div className="block w-full md:grid gap-4 grid-cols-4 justify-between items-center">
      <div className="col-span-1">
        {homePageTexts ? (
          <div className="text-center text-white bg-[#384275]">
            <h1 className="tracking-[10px]">LINZ OPTIK</h1>
          </div>
        ) : (
          <div className="w-[230px] h-[30px]  bg-gray-300 animate-pulse"></div>
        )}
      </div>
      <div className="flex items-center justify-between py-2 border-b-[2px] col-span-3 flex-wrap">
        <div className="border-r-0 px-[5px] sm:border-r-2 z-10">
          <ChooseComponent homePageTexts={homePageTexts} />
        </div>
        <div className=" ml-0 border-r-0 px-[5px] sm:border-r-2 md:ml-2">
          {!!totolCountRef.current ? (
            <p className="text-[10px] text-[#094579] font-[700] underline xs:text-[13px]">
              {totolCountRef.current}
              <span className="font-[600]"> :items</span>
            </p>
          ) : (
            <div className="w-[80px] h-[20px] bg-gray-300 animate-pulse rounded-xl"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InformationBlock;
