import { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useSearchParams } from "react-router-dom";
import {
  AttributeCategory,
  Attributes,
  HomePageTextsType,
} from "../../../utils/interface";

const LeftBarInfo = ({
  attributes,
  filterItemList,
  homePageTexts,
  setFilterItemList,
}: {
  filterItemList: AttributeCategory[] | undefined;
  setFilterItemList: React.Dispatch<
    React.SetStateAction<AttributeCategory[] | undefined>
  >;
  attributes: Attributes[];
  homePageTexts: HomePageTextsType | undefined;
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [newCurrectValues, setNewCurrectValues] = useState<number[]>([]);
  // @ts-ignore:next-line
  const currentQueries = Object.fromEntries([...searchParams]);

  useEffect(() => {
    const values: [string, string][] = Array.from(searchParams);
    const currectValues: number[] = [];
    values.forEach((el) => {
      el[1].split(",").map((el) => currectValues.push(Number(el)));
    });
    setNewCurrectValues(currectValues);
  }, [searchParams]);

  useEffect(() => {
    const selectedIds: AttributeCategory[] = [];
    attributes.forEach((atribute) => {
      atribute.name_category.forEach((category) => {
        if (newCurrectValues.includes(category.term_id)) {
          selectedIds.push(category);
        }
      });
    });
    setFilterItemList(selectedIds);
  }, [newCurrectValues, attributes, setFilterItemList]);

  const ClearHandler = (term_id: number, taxonomy: string) => {
    const newCurrenctQueries = { ...currentQueries };
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
      }
    }
  };

  return (
    <>
      {!!filterItemList?.length && (
        <div className="text-center md:text-left border border-cyan-200">
          <div className="py-3 px-4">
            {filterItemList?.map((elem, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-3 py-[2px] mb-2 text-gray-900 font-bold bg-[#d1d1d2] rounded-2xl"
              >
                <div className="flex items-center">
                  {elem.description.includes("https://") && (
                    <div>
                      <img
                        src={elem?.description}
                        alt="product"
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
              {homePageTexts?.cleaer.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default LeftBarInfo;
