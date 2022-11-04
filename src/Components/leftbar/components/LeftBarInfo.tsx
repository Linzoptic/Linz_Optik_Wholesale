import { IoIosClose } from "react-icons/io";
import { BsSearch } from "react-icons/bs";

const LeftBarInfo = ({dataList , setDataList}:{dataList:string[], setDataList:React.Dispatch<React.SetStateAction<string[]>>}) => {
  
  const ClearHandler = (elem: string) => {
     const newDataList = dataList.filter(item => item !== elem)
     setDataList(newDataList);
  };

  return (
    <div className="bg-[#c2c8ce] text-center md:text-left">
      <div className="py-3 px-4">
        <p className="text-2xl font-[600] md:text-[14px] text-[#022e5a] mb-4">YOUR SELECTION</p>
        {dataList?.map((elem, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-3 py-[4px] mb-2 text-gray-200 font-bold bg-[#022e5a] rounded-2xl"
          >
            <p className="text-[12px]">{elem}</p>
            <IoIosClose 
              size={18}
              className="cursor-pointer" 
              onClick={() => ClearHandler(elem)}
            />
          </div>
        ))}
        <p className="underline text-[16px] md:text-xs pt-4 cursor-pointer hover:text-[#022e5a] duration-150"
        onClick={() => setDataList([])}
        >
          clear selection
        </p>
      </div>
      <div className="border-t-[1px] border-[#ffffff48] py-4 px-4">
        <div>
          <p className="text-[12px] md:text-[14px] font-[600] text-[#022e5a] pb-4">REFINE YOUR SEARCH</p>
        </div>
        <div className="flex">
          <div className="w-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none rounded-none rounded-tl-xl rounded-bl-xl py-[3px] border-none"
            />
          </div>
          <div className="flex items-center justify-center cursor-pointer bg-[#abaeb0] text-white py-[3px] px-4 rounded-tr-xl rounded-br-xl">
            <BsSearch size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBarInfo;
