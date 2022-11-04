import React, { useState } from "react";
import { filter } from "../home/base";
import FillterTitle from "./components/FillterTitle";
import LeftBarInfo from "./components/LeftBarInfo";
import LeftBarItem from "./components/LeftBarItem";

const LeftBarMenu  = () => {

  const [filterItemList, setFilterItemList] = useState<string[]>([]);

  const onChangeHandler = (filtersItem: string) => {
    if (filterItemList.includes(filtersItem)) {
      return setFilterItemList(filterItemList.filter((el) => el !== filtersItem));
    } else {
      return setFilterItemList([...filterItemList, filtersItem]);
    }
  };

  return (
    <div>
      <div>
        <LeftBarInfo filterItemList={filterItemList} setFilterItemList={setFilterItemList}/>
        <div className="py-5 px-4 border">
          <h1 className="uppercase text-[#1366a1] text-[14px]">narrow by</h1>
        </div>
        <FillterTitle title="cotegory attributes"/>
        <div className="border p-2">
          {filter?.map((item, index) => (
            <LeftBarItem
              key={index}
              item={item}
              onChangeHandler={onChangeHandler}
              filterItemList={filterItemList}
            />
          ))}
        </div>
        <FillterTitle title="product attributes" />
      </div>
    </div>
  );
};

export default LeftBarMenu;
