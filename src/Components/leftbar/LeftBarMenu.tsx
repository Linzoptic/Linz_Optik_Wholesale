import React, { useState, useEffect } from "react";
import axios from "axios";
import { AttributeCategory, Attributes } from "../../utils/interface";
import FillterTitle from "./components/FillterTitle";
import LeftBarInfo from "./components/LeftBarInfo";
import LeftBarItem from "./components/LeftBarItem";

const LeftBarMenu = () => {
  const [attributes, setAttributes] = useState<Attributes[]>([]);
  const [filterItemList, setFilterItemList] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const correctData = await axios.get(
        "https://tiknikstyle.10web.site/wp-json/all/attributes"
      );

      const attributesArray: Attributes[] = [];
      for (const [key, value] of Object.entries(correctData.data)) {
        attributesArray.push({
          name: key,
          name_category: (value as AttributeCategory[]).map((e) => {
            return {
              term_id: e.term_id,
              name: e.name,
              taxonomy: e.taxonomy,
              description: e.description,
            } as AttributeCategory;
          }),
        });
      }
      setAttributes(attributesArray);  
    })();
  }, []);

  const onChangeHandler = (filtersItem: string) => {
    if (filterItemList.includes(filtersItem)) {
      return setFilterItemList(
        filterItemList.filter((el) => el !== filtersItem)
      );
    } else {
      return setFilterItemList([...filterItemList, filtersItem]);
    }
  };

  return (
    <div>
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
              name={item.name}
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
