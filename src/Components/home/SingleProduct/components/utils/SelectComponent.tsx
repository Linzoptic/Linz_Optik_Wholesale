import React, { useState } from "react";
import { IOptionsAttributes } from "../../../../../utils/interface";

const SelectComponent = ({
  name,
  choose,
  options,
}: {
  name: string | undefined;
  choose: string | undefined;
  options: IOptionsAttributes[] | undefined;
}) => {
  const [correctOption, setCorrectOption] = useState<string[] | undefined>();


  return (
    <div>
      <h1>{name}</h1>
      <div className="p-2 border rounded-xl">
        <select  className="w-full justify-between outline-none cursor-pointer">
          <option hidden>{choose}</option>
          {options?.map((el, i) => (
            <option key={i}>
              {el.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectComponent;
