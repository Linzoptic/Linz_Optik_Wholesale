import React, { useState } from "react";
import { filter } from "../home/base";
import FillterTitle from "./components/FillterTitle";
import LeftBarInfo from "./components/LeftBarInfo";
import LeftBarItem from "./components/LeftBarItem";

const LeftBarMenu  = () => {

  const [dataList, setDataList] = useState<string[]>([]);

  const changeHandler = (listItem: string) => {
    if (dataList.includes(listItem)) {
      return setDataList(dataList.filter((el) => el !== listItem));
    } else {
      return setDataList([...dataList, listItem]);
    }
  };

  return (
    <div>
      <div>
        <LeftBarInfo dataList={dataList} setDataList={setDataList}/>
        <div className="py-5 px-4 border">
          <h1 className="uppercase text-[#1366a1] text-[14px]">narrow by</h1>
        </div>
        <FillterTitle title="cotegory attributes"/>
        <div className="border p-2">
          {filter?.map((item, index) => (
            <LeftBarItem
              key={index}
              item={item}
              changeHandler={changeHandler}
              dataList={dataList}
            />
          ))}
        </div>
        <FillterTitle title="product attributes" />
      </div>
    </div>
  );
};

export default LeftBarMenu;
