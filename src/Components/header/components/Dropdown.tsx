import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { frames } from "../../home/base";

const Dropdown = () => {
  const framesArr: string[] = [];
  const [arr, setArr] = useState<string[]>([frames[0].name]);

  const mouseHandler = (props: string) => {
    if (framesArr.includes(props)) {
      return framesArr;
    } else {
      framesArr.push(props);
      setArr(framesArr);
    }
  };

  return (
    <div className="absolute left-0 w-full p-12 bg-white shadow-[0_35px_70px_-15px_#06509aee] z-40 flex justify-between">
      <div className="justify-between grid grid-cols-3 mt-8">
        {frames.map((elem, index) => (
          <div key={index} className="flex items-center px-6">
            <p
              className="font-[700] text-[14px] text-[#06509aee] hover:text-[#b1c1ffee] duration-100 cursor-pointer"
              onMouseOver={() => mouseHandler(elem.name)}
            >
              {elem.name}
            </p>
            <MdOutlineKeyboardArrowRight className="text-gray-500" />
          </div>
        ))}
      </div>
      <div className="w-[25%] h-[100px] flex items-center justify-center mt-8">
        <p className="text-[2rem] font-bold text-center text-[#06509aee] drop-shadow-textSh"> 
          {arr[0]}
        </p>
      </div>
    </div>
  );
};

export default Dropdown;
