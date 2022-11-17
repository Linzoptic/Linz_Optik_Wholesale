import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { frames } from "../../../utils/interface";

const Dropdown = () => {

  const framesProcuct: string[] = [];
  const [selectedProduct, setSelectedProduct] = useState<string[]>([frames[0].name]);

  const onMouseHandler = (productName: string) => {
    if (framesProcuct.includes(productName)) {
      return framesProcuct;
    } else {
      framesProcuct.push(productName);
      setSelectedProduct(framesProcuct);
    }
  };

  return (
    <div className="absolute w-full left-0 p-12 bg-white shadow-[0_35px_70px_-15px_#06509aee] z-40 flex justify-between">
      <div className=" grid grid-cols-3 mt-8">
        {frames.map((elem, index) => (
          <div key={index} className="flex items-center px-2 lg:px-6">
            <p
              className="font-[700] text-[10px] lg:text-[14px] text-[#06509aee] hover:text-[#b1c1ffee] duration-100 cursor-pointer"
              onMouseOver={() => onMouseHandler(elem.name)}
            >
              {elem.name}
            </p>
            <MdOutlineKeyboardArrowRight className="text-gray-500" />
          </div>
        ))}
      </div>
      <div className="w-[25%] h-[100px] flex items-center justify-center mt-8">
        <p className="text-[2.5rem] lg:text-[3.5rem] font-bold text-center text-[#06509aee] drop-shadow-textSh"> 
          {selectedProduct[0]}
        </p>
      </div>
    </div>
  );
};

export default Dropdown;
