import { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useSearchParams } from "react-router-dom";
import { AttributeCategory, Attributes } from "../../../utils/interface";

const LeftBarInfo = (
  {attributes,
  FilterItemList,
  setFilterItemList,
  }:{
    FilterItemList:AttributeCategory[] | undefined,
  setFilterItemList:React.Dispatch<React.SetStateAction<AttributeCategory[] | undefined>>
  attributes: Attributes[],
}) => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [newCurrectValues, setNewCurrectValues] = useState<number[]>([]);
  // @ts-ignore:next-line
  const currentQueries = Object.fromEntries([...searchParams]);
  
  useEffect(() => {
    const values:string[] = Object.values(currentQueries)
    const currectValues:number[] = [];
    values.forEach(el => {
      el.split(",").forEach(el => {
        currectValues.push(Number(el))
      })
    });
    setNewCurrectValues(currectValues)
  },[searchParams])

  useEffect(() => {
    const selectedIds:AttributeCategory[] = [];
    attributes.forEach( atribute => {
      atribute.name_category.forEach(category => {
        if(newCurrectValues.includes(category.term_id)){
          selectedIds.push(category);
        }
      })
    })
    setFilterItemList(selectedIds)
    },[newCurrectValues,attributes,setFilterItemList])

  const ClearHandler = (term_id: number, taxonomy: string) => {

    const newCurrenctQueries = {...currentQueries}

    if (newCurrenctQueries[taxonomy]) {
      const newQurrentQueries = currentQueries[taxonomy]
        .split(",")
        .includes(term_id.toString());
      if (newQurrentQueries) {
        let newValues = currentQueries[taxonomy]
          .replace(`${term_id},`, "")
          .replace(`${term_id}`, "");
        if (newValues.slice(-1) === ",") {
          newValues = newValues.slice(0, -1);
        }
        if (newValues === "") {
          delete currentQueries[taxonomy];
        } else {
          currentQueries[taxonomy] = newValues;
        }
        setSearchParams({ ...currentQueries });
      };
    };
  };

  return (
    <div className="text-center md:text-left border border-cyan-200">
      <div className="py-3 px-4">
        <p className="text-xl font-[600] md:text-[14px] text-cyan-900 mb-4">
          Ըտրված
        </p>
        {FilterItemList?.map((elem, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-3 py-[2px] mb-2 text-gray-900 font-bold bg-[#d1d1d2] rounded-2xl"
          >
            <div className="flex items-center">
              {elem.description.includes("https://") && (
                <div>
                  <img
                    src={elem.description}
                    alt=""
                    className="w-[20px]"
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
                size={30}
                className="cursor-pointer flex justify-end"
                onClick={() => ClearHandler(elem.term_id, elem.taxonomy)}
              />
            </div>
          </div>
        ))}
        <p
          className="underline text-[14px] md:text-base font-bold pt-4 cursor-pointer text-[#022e5a] hover:text-[#67839f] duration-100"
          onClick={() => setSearchParams()}
        >
          Մաքրել Ամբողջը
        </p>
      </div>
    </div>
  );
};

export default LeftBarInfo;
