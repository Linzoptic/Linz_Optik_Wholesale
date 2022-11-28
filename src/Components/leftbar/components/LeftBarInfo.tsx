import { IoIosClose } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { FiltersItemList } from "../../../utils/interface";

const LeftBarInfo = ({
  filterItemList,
  setFilterItemList,
}: {
  filterItemList: FiltersItemList[];
  setFilterItemList: React.Dispatch<React.SetStateAction<FiltersItemList[]>>;
}) => {
  const ClearHandler = (elem: string) => {
    const newDataList = filterItemList.filter((item) => item.name !== elem);
    setFilterItemList(newDataList);
  };

  return (
    <div className="text-center md:text-left border border-cyan-200">
      <div className="py-3 px-4">
        <p className="text-xl font-[600] md:text-[14px] text-cyan-900 mb-4">
          YOUR SELECTION
        </p>
        {filterItemList?.map((elem, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-3 py-[4px] mb-2 text-gray-900 font-bold bg-[#d1d1d2] rounded-2xl"
          >
            <div className="flex items-center">
              {elem.description.includes("https://") && (
                <div>
                  <img
                    src={elem.description}
                    alt="#"
                    className="w-[20px] "
                  />
                </div>
              )}
              <div
                className="w-[10px] h-[10px] rounded-full mr-[3px]"
                style={{ backgroundColor: elem.name.toLowerCase() }}
              ></div>
              <p className="text-[12px]">{elem.name}</p>
            </div>
            <div>
              <IoIosClose
                size={18}
                className="cursor-pointer flex justify-end"
                onClick={() => ClearHandler(elem.name)}
              />
            </div>
          </div>
        ))}
        <p
          className="underline text-[14px] md:text-xs pt-4 cursor-pointer hover:text-[#022e5a] duration-150"
          onClick={() => setFilterItemList([])}
        >
          clear selection
        </p>
      </div>
    </div>
  );
};

export default LeftBarInfo;
