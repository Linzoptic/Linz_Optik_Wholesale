import React, { useState, Dispatch, SetStateAction } from "react";
import { AttributeCategory, HomePageTextsType } from "../../utils/interface";
import FillterTitle from "./components/FillterTitle";
import LeftBarInfo from "./components/LeftBarInfo";
import LeftBarItem from "./components/LeftBarItem";
import ReactRangeSlider from "./components/ReactRangeSlider";
import { useSearchParams } from "react-router-dom";
import useAttributesCall from "../../Product/Hooks/useAttributesCall";

const LeftBarMenu = ({
  pricesRange,
  setPricesRange,
  homePageTexts,
}: {
  pricesRange: { [key: string]: number | null }[];
  setPricesRange: Dispatch<SetStateAction<{ [key: string]: number | null }[]>>;
  homePageTexts: HomePageTextsType | undefined;
}) => {
  const [filterItemList, setFilterItemList] = useState<AttributeCategory[]>();
  const [searchparams, setSearchParams] = useSearchParams();

  const { attributes } = useAttributesCall();

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
          homePageTexts={homePageTexts}
          filterItemList={filterItemList}
          setFilterItemList={setFilterItemList}
        />
        <FillterTitle
          filterIcon={homePageTexts?.filterIcon}
          filter={homePageTexts?.filter}
        />
        <div className="border p-2">
          {attributes?.map((item, index) => (
            <LeftBarItem
              key={index}
              filterItems_name={item.name}
              categories={item.name_category}
              filterItemList={filterItemList}
              onChangeHandler={onChangeHandler}
            />
          ))}
        </div>
        <div className="my-2 w-full">
          <ReactRangeSlider
            homePageTexts={homePageTexts}
            pricesRange={pricesRange}
            setPricesRange={setPricesRange}
          />
        </div>
      </div>
    </div>
  );
};

export default LeftBarMenu;
