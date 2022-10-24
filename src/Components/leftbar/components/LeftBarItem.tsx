import React, { useState } from "react";
import { MdArrowRight, MdOutlineArrowDropDown } from "react-icons/md";
import { Fillter } from "../../home/base";

const LeftBarItem = (props: Fillter) => {

  const [icon, setIcon] = useState(false);

  return (
    <div className=" text-[#095c96] cursor-pointer mb-4 border-b-2 pb-1 last:border-b-0 last:mb-0">
      <div className="flex items-center"
         onClick={() => setIcon(!icon)}
      >
        {!icon ? <MdArrowRight /> : <MdOutlineArrowDropDown />}
        <h1 className="text-[16px] uppercase">{props.name}</h1>
      </div>
     <div className={icon ? "block ml-2" : "hidden"}>
      <div>
        <ul>
          {props.name_category?.map((item, index) => (
            <label key={index}>
              <li className="text-[13px] text-gray-600 flex items-center cursor-pointer">
                <input type="checkbox" className="mr-[5px] accent-black0"/>
                {item.filter_name}
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
