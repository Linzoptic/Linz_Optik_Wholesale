import React, { useEffect, useState } from "react";
import { SingleProductAttributes } from "../../../../../utils/interface";

const SelectComponent = ({
  name,
  option,
  choose,
}: {
  name: string | undefined;
  choose: string | undefined;
  option: SingleProductAttributes[] | undefined;
}) => {
  const [correctOption, setCorrectOption] = useState<string[] | undefined>();

  useEffect(() => {
    const values: string[] | undefined = [];
    option?.forEach((item) => {
      item.options.map((el) => values?.push(el));
    });
    setCorrectOption(values);
  }, [option]);

  return (
    <div>
      <h1>{name}</h1>
      <div className="p-2 border rounded-xl">
        <select className="w-full justify-between outline-none">
          <option hidden>{choose}</option>
          {correctOption?.map((el, i) => (
            <option key={i} value={el} >
              {el}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectComponent;
