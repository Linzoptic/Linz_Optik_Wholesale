import React, { useState, Dispatch, SetStateAction } from "react";
import { IAttributeCategory, IHomePageTexts } from "../../utils/interface";
import FillterTitle from "./components/FillterTitle";
import LeftBarInfo from "./components/LeftBarInfo";
import LeftBarItem from "./components/LeftBarItem";
import ReactRangeSlider from "./components/ReactRangeSlider";
import { useSearchParams } from "react-router-dom";
import useAttributes from "./components/Hooks/useAttributes";

const LeftBarMenu = ({
  pricesRange,
  setPricesRange,
  homePageTexts,
}: {
  pricesRange: { [key: string]: number | null }[];
  setPricesRange: Dispatch<SetStateAction<{ [key: string]: number | null }[]>>;
  homePageTexts: IHomePageTexts | undefined;
}) => {
  const [filterItemList, setFilterItemList] = useState<IAttributeCategory[]>();
  const [searchparams, setSearchParams] = useSearchParams();

  const { attributes } = useAttributes();

  const onChangeHandler = (term_id: number, taxonomy: string) => {
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
    <div>
      <div>
        <FillterTitle
          filterIcon={homePageTexts?.filterIcon}
          filter={homePageTexts?.filter}
        />
        <LeftBarInfo
          attributes={attributes}
          homePageTexts={homePageTexts}
          filterItemList={filterItemList}
          setFilterItemList={setFilterItemList}
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
