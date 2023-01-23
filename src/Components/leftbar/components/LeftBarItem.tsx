import React, { useState } from "react";
import { MdArrowRight, MdOutlineArrowDropDown } from "react-icons/md";
import { AttributeCategory } from "../../../utils/interface";

const LeftBarItem = ({
  categories,
  filterItems_name,
  filterItemList,
  onChangeHandler,
}: {
  categories: AttributeCategory[];
  filterItems_name: string;
  filterItemList: AttributeCategory[] | undefined,
  onChangeHandler: (term_id: number,taxonomy:string) => void;
}) => {

  const [Toggleicon, setToggleIcon] = useState(false);

  return (
    <div className=" text-[#295189] cursor-pointer mb-4 border-b-2 pb-1 last:border-b-0 last:mb-0">
      <div className="flex items-center" onClick={() => setToggleIcon(!Toggleicon)}>
        {!Toggleicon ? (
          <MdArrowRight size={24} />
        ) : (
          <MdOutlineArrowDropDown size={24} />
        )}
        <h1 className="text-[14px] md:text-[15px] uppercase font-[600] hover:underline  hover:text-[#2286c5] duration-150">
          {filterItems_name}
        </h1>
      </div>
      <div className={Toggleicon ? "block ml-2 duration-150" : "hidden"}>
        <div>
          <ul>
            {categories?.map((el, index) => (
              <label key={index}>
                <li className="text-[13px] flex text-gray-900 items-center cursor-pointer hover:text-[#2286c5]">
                  <div>
                    <input
                      type="checkbox"
                      className="mr-[8px] accent-black0"
                      onChange={() => onChangeHandler(el.term_id, el.taxonomy)}
                      checked={filterItemList?.some((item) => item.term_id === el.term_id)}
                    />
                  </div>
                  <div>
                    {el.description.includes("https://") && (
                      <img
                        src={el?.description}
                        alt="glasses"
                        className="h-[12px] w-[40px] px-2"
                      />
                    )}
                  </div>
                  {filterItems_name.toLowerCase() === "գույն" && (
                    <div
                      style={{ backgroundColor: el?.name }}
                      className="w-[15px] h-[15px] mr-1 rounded-full"
                    >
                    </div>
                  )}
                  <div>{el.name}</div>
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
