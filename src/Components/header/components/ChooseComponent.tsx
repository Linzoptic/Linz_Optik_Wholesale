import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const ChooseComponent = ({props,title}: {props: string[],title: string}) => {

  const [showInfo, setShowInfo] = useState<string>(props[0]);
  const [toggleShow, setToggleShow] = useState<boolean>(false);

  const handelClick = (elem: string) => {
    setToggleShow(!toggleShow);
    setShowInfo(elem);
  };

  return (
    <div className="flex items-center relative ">
      <div className="block text-center md:flex items-center justify-center">
        <div>
          <p className="text-[#094570] font-[600] text-[10px]  uppercase md:text-[12px]">
            {title}:
          </p>
        </div>
        <div>
          <h1
            className="w-[100px] xs:w-[150px] border-2 border-sky-200 rounded-xl px-3 ml-2 text-[10px] cursor-pointer relative"
            onClick={() => setToggleShow(!toggleShow)}
          >
            {showInfo}
          </h1>
        </div>
      </div>
      <AiFillCaretDown size={10} className="absolute right-2 top-5 md:top-1" />
      <div
        className={toggleShow ? "absolute w-[90%] px-2 py-3  right-[50%] translate-x-[50%] md:right-20 top-[34px] bg-gray-100 text-[10px] rounded-2xl md:top-5" : "hidden"}>
        {props.map((elem, index) => (
          <li
            key={index}
            onClick={(e: any) => handelClick(elem)}
            className="list-none cursor-pointer "
          >
            {elem}
          </li>
        ))}
      </div>
    </div>
  );
};

export default ChooseComponent;
