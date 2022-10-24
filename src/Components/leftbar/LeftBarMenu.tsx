import React from "react";
import { filter } from "../home/base";
import FillterTitle from "./components/FillterTitle";
import LeftBarInfo from "./components/LeftBarInfo";
import LeftBarItem from "./components/LeftBarItem";

const LeftBarMenu = () => {

  return (
    <div className="">
      <div>
        <LeftBarInfo />
        <div className="py-5 px-4 border">
          <h1 className="uppercase text-[#1366a1] text-[14px]">narrow by</h1>
        </div>
        <FillterTitle title="cotegory attributes" />
        <div className="border p-2">
          {filter?.map((item, index) => (
            <LeftBarItem
              key={index}
              name={item.name}
              name_category={item.name_category}
            />
          ))}
        </div>
        <FillterTitle title="product attributes" />
      </div>
    </div>
  );
};

export default LeftBarMenu;
