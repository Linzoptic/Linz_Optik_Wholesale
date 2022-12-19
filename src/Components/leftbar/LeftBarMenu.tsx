import React, { useState, Dispatch, SetStateAction } from "react";
import { AttributeCategory } from "../../utils/interface";
import FillterTitle from "./components/FillterTitle";
import LeftBarInfo from "./components/LeftBarInfo";
import LeftBarItem from "./components/LeftBarItem";
import ReactRangeSlider from "./components/ReactRangeSlider";
import { useSearchParams } from "react-router-dom";
import useAttributesCall from "../../Product/Hooks/useAttributesCall";

const LeftBarMenu = ({
  pricesRange,
  setPricesRange,
}: {
  pricesRange: { [key: string]: number | null }[];
  setPricesRange: Dispatch<SetStateAction<{ [key: string]: number | null }[]>>;
}) => {

  const [FilterItemList, setFilterItemList] = useState<AttributeCategory[]>();
  const [searchparams, setSearchParams] = useSearchParams();

  const { attributes } = useAttributesCall()

  const onChangeHandler = (term_id: number, taxonomy: string) => {
    // @ts-ignore:next-line
    const currentQueries = Object.fromEntries([...searchparams]);
    if (!currentQueries[taxonomy]) {
      setSearchParams({ ...currentQueries, [taxonomy]: `${term_id}` });
    } else {
      setSearchParams({
        ...currentQueries,
        [taxonomy]: `${currentQueries[taxonomy]},${term_id}`,
      });
    }
    if (currentQueries[taxonomy]) {
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
    <div className="w-[100%]">
      <div>
        <LeftBarInfo
          attributes={attributes}
          FilterItemList={FilterItemList}
          setFilterItemList={setFilterItemList}
        />
        <div className="py-5 px-4 border">
          <h1 className="uppercase text-[#1366a1] text-[14px]">narrow by</h1>
        </div>
        <FillterTitle title="product attributes" />
        <div className="border p-2">
          {attributes?.map((item, index) => (
            <LeftBarItem
              key={index}
              filterItems_name={item.name}
              categories={item.name_category}
              FilterItemList={FilterItemList}
              onChangeHandler={onChangeHandler}
            />
          ))}
        </div>
        <div className="my-2 w-full">
          <ReactRangeSlider
            pricesRange={pricesRange}
            setPricesRange={setPricesRange}
          />
        </div>
      </div>
    </div>
  );
};

export default LeftBarMenu;
