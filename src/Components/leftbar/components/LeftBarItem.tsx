import React, { useState } from "react";
import { MdArrowRight, MdOutlineArrowDropDown } from "react-icons/md";
import { AttributeCategory } from "../../../utils/interface";

const LeftBarItem = ({
  categories,
  name,
  filterItemList,
  onChangeHandler,
}: {
  categories: AttributeCategory[];
  name: string;
  filterItemList: string[];
  onChangeHandler: (filtersItem: string) => void;
}) => {
  const [icon, setIcon] = useState(false);

  return (
    <div className=" text-[#295189] cursor-pointer mb-4 border-b-2 pb-1 last:border-b-0 last:mb-0">
      <div className="flex items-center" onClick={() => setIcon(!icon)}>
        {!icon ? (
          <MdArrowRight size={24} />
        ) : (
          <MdOutlineArrowDropDown size={24} />
        )}
        <h1 className="text-[14px] md:text-[15px] uppercase font-[600] hover:underline  hover:text-[#2286c5] duration-150">
          {name}
        </h1>
      </div>
      <div className={icon ? "block ml-2 duration-150" : "hidden"}>
        <div>
          <ul>
            {categories?.map((el, index) => (
              <label key={index}>
                <li className="text-[13px] flex text-gray-600 items-center cursor-pointer hover:text-[#2286c5]">
                  <div>
                    <input
                      type="checkbox"
                      className="mr-[5px] accent-black0"
                      onChange={() => onChangeHandler(el.name)}
                      checked={filterItemList.includes(el.name)}
                    />
                  </div>
                  <div>
                    {el.description.includes("https://") ? (
                      <img
                        src={el.description}
                        alt="#"
                        className="h-[12px] px-2"
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  {el.name}
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
