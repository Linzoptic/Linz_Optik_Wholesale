import React from "react";
import { HomePageTextsType } from "../../../utils/interface";
import ChooseComponent from "../../header/components/ChooseComponent";

const InformationBlock = ({
  totolCountRef,
  homePageTexts,
}: {
  totolCountRef: React.MutableRefObject<number>;
  homePageTexts: HomePageTextsType | undefined;
}) => {

  return (
    <div className="block w-full md:grid gap-4 grid-cols-4 justify-between items-center">
      <div className="col-span-1">
        <div className="text-center text-white bg-[#384275]">
          <h1 className="tracking-[10px]">LINZ OPTIK</h1>
        </div>
      </div>
      <div className="flex items-center justify-between py-2 border-b-[2px] col-span-3 flex-wrap">
        <div className="border-r-0 px-[5px] sm:border-r-2 z-10">
          <ChooseComponent homePageTexts={homePageTexts} />
        </div>
        <div className=" ml-0 border-r-0 px-[5px] sm:border-r-2 md:ml-2">
          {!!totolCountRef.current ? (
            <p className="text-[10px] text-[#094579] font-[700] underline xs:text-[13px]">
              {totolCountRef.current}
              <span className="font-[600]"> :ITEMS</span>
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default InformationBlock;
