import React from "react";
import { useLocation } from "react-router-dom";
import ChooseComponent from "./components/ChooseComponent";

const NavbarInfo = () => {

  const showOpsh: string[] = [
    "Suggested retail price",
    "All prices",
    "No prices",
  ];

  const location = useLocation(); 
   
  return (
    <div>
      <div className="flex justify-between pb-8">
        <div className="">
          <p className="text-[#094570] font-[600] text-[10px] md:text-[13px]">You are here: {">"} {location.pathname}</p>
        </div>
        <div>
          <ChooseComponent props={showOpsh}  title="show"/>
        </div>
      </div>
    </div>
  );
};

export default NavbarInfo;
