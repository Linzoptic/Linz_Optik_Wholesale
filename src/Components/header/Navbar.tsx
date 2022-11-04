import React, { useState } from "react";
import logo from "../../images/logo.svg";
import { navbar } from "../home/base";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Dropdown from "./components/Dropdown";

const Navbar = () => {
  
  const [opendiv, setOpendiv] = useState<boolean>(true);
  const [dropDown, setDropDown] = useState<boolean>(false);

  const handleClick = () => {
    setOpendiv(!opendiv);
  };

  return (
    <div className="py-12 flex items-center  relative md:grid grid-cols-3  justify-between">
      <div className="flex items-center col-span-1 ">
        <img src={logo} alt="logo" className="w-16 md:w-11" />
        <h1 className="hidden md:block text-3xl text-sky-400 mb-1 tracking-[-3px]">
          LiNz{" "}
          <span className="text-xl tracking-[2px] text-blue-900 font-bold">
            OptiK
          </span>
        </h1>
      </div>
      <div className="hidden md:block max-w-[800px] col-span-2">
        <ul className="flex px-4 py-2 bg-[#094570] text-white rounded-md justify-between"
          onMouseOver={() => setDropDown(true)}
        >
          {navbar.map((elem, index) => (
            <li
              key={index}
              className="text-sm lg:text-xl cursor-pointer"
            >
              {elem.name}
            </li>
          ))}
        </ul>
        <div
          className={dropDown? "absolute left-0 w-full p-3 bg-white shadow-2xl z-40 flex justify-between" : "hidden" }
          onMouseLeave={() => setDropDown(false)}
          >
         <Dropdown/>
        </div>
      </div>
      <div className="block cursor-pointer text-[#094570] md:hidden">
        <div onClick={handleClick}>
          {opendiv ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
        </div>
        <div
          className={!opendiv ? "absolute w-full left-0  text-center z-20" : "hidden"}
          >
          <ul className=" bg-[#094570] text-white rounded-md justify-between">
            {navbar.map((elem, index) => (
              <li key={index} className="text-xl py-7">
                {elem.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
