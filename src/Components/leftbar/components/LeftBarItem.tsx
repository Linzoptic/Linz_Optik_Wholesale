import React, { useState } from "react";
import { MdArrowRight, MdOutlineArrowDropDown } from "react-icons/md";
import { Fillter } from "../../home/base";

const LeftBarItem = ({item, dataList, changeHandler}:{item: Fillter, dataList:string[], changeHandler: (clickProps: string) => void}) => {
  const [icon, setIcon] = useState(false);

  return (
    <div className=" text-[#295189] cursor-pointer mb-4 border-b-2 pb-1 last:border-b-0 last:mb-0">
      <div className="flex items-center" onClick={() => setIcon(!icon)}>
        {!icon ? <MdArrowRight size={24} /> : <MdOutlineArrowDropDown size={24} />}
        <h1 className="text-[14px] md:text-[15px] uppercase font-[600] hover:underline  hover:text-[#2286c5] duration-150">
          {item.name}
        </h1>
      </div>
      <div className={icon ? "block ml-2 duration-150" : "hidden"}>
        <div>
          <ul>
            {item.name_category?.map((el, index) => (
              <label key={index}>
                <li className="text-[13px] text-gray-600 flex items-center cursor-pointer hover:text-[#2286c5]">
                  <input
                    type="checkbox"
                    className="mr-[5px] accent-black0"
                    onChange={() => changeHandler(el.filter_name)}
                    checked={dataList.includes(el.filter_name)}
                  />
                  {el.filter_name}
                </li>
              </label>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftBarItem;
