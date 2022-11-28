import React, { useState, useEffect } from "react";
import axios from "axios";
import { AttributeCategory, Attributes } from "../../utils/interface";
import FillterTitle from "./components/FillterTitle";
import LeftBarInfo from "./components/LeftBarInfo";
import LeftBarItem from "./components/LeftBarItem";
import { FiltersItemList } from "../../utils/interface";

const LeftBarMenu = () => {
  const BASE_URL: string = process.env.REACT_APP_BASE_URL as string;

  const [attributes, setAttributes] = useState<Attributes[]>([]);
  const [filterItemList, setFilterItemList] = useState<FiltersItemList[]>([]);

  useEffect(() => {
    (async () => {
      const correctData = await axios.get(`${BASE_URL}/wholesale/attributes`);
      const attributesArray: Attributes[] = [];
      for (const [key, value] of Object.entries(correctData.data)) {
        attributesArray.push({
          name: key,
          name_category: (value as AttributeCategory[]).map((elem) => {
            return {
              term_id: elem.term_id,
              name: elem.name,
              taxonomy: elem.taxonomy,
              description: elem.description,
            } as AttributeCategory;
          }),
        });
      }
      setAttributes(attributesArray);
    })();
  }, [BASE_URL]);

  const onChangeHandler = (filtersItemNmae: string, filtersItemDes: string) => {
    let filters = [...filterItemList];
    const existingFilter = filterItemList.find(
      (i) => i.name === filtersItemNmae
    );
    if (existingFilter) {
      filters = filters.filter((i) => i.name !== existingFilter.name);
      setFilterItemList(filters);
    } else {
      filters.push({
        name: filtersItemNmae,
        description: filtersItemDes,
      });
      setFilterItemList(filters)
    }
  };

  return (
    <div className="w-[100%]">
      <div>
        <LeftBarInfo
          filterItemList={filterItemList}
          setFilterItemList={setFilterItemList}
        />
        <div className="py-5 px-4 border">
          <h1 className="uppercase text-[#1366a1] text-[14px]">narrow by</h1>
        </div>
        <FillterTitle title="cotegory attributes" />
        <div className="border p-2">
          {attributes?.map((item, index) => (
            <LeftBarItem
              key={index}
              filterItems_name={item.name}
              categories={item.name_category}
              onChangeHandler={onChangeHandler}
              filterItemList={filterItemList}
            />
          ))}
        </div>
        <FillterTitle title="product attributes" />
      </div>
    </div>
  );
};

export default LeftBarMenu;
