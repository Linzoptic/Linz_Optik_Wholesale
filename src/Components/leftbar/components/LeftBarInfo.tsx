import { IoIosClose } from "react-icons/io";
import { BsSearch } from "react-icons/bs";

const LeftBarInfo = ({
  filterItemList,
  setFilterItemList,
}: {
  filterItemList: string[];
  setFilterItemList: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const ClearHandler = (elem: string) => {
    const newDataList = filterItemList.filter((item) => item !== elem);
    setFilterItemList(newDataList);
  };

  return (
    <div className="text-center md:text-left border border-cyan-200">
      <div className="py-3 px-4">
        <p className="text-2xl font-[600] md:text-[14px] text-cyan-900 mb-4">
          YOUR SELECTION
        </p>
        {filterItemList?.map((elem, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-3 py-[4px] mb-2 text-gray-200 font-bold bg-cyan-900 rounded-2xl"
          >
            <p className="text-[12px]">{elem}</p>
            <IoIosClose
              size={18}
              className="cursor-pointer"
              onClick={() => ClearHandler(elem)}
            />
          </div>
        ))}
        <p
          className="underline text-[16px] md:text-xs pt-4 cursor-pointer hover:text-[#022e5a] duration-150"
          onClick={() => setFilterItemList([])}
        >
          clear selection
        </p>
      </div>
      <div className="border-t-[1px] border-[#ffffff48] py-4 px-4">
        <div>
          <p className="text-[12px] md:text-[14px] font-[600] text-[#022e5a] pb-4">
            REFINE YOUR SEARCH
          </p>
        </div>
        <div className="flex">
          <div className="w-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none rounded-none rounded-tl-xl rounded-bl-xl py-[3px] border border-cyan-800"
            />
          </div>
          <div className="flex items-center justify-center cursor-pointer bg-cyan-800 text-white py-[3px] px-4 rounded-tr-xl rounded-br-xl">
            <BsSearch size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBarInfo;
