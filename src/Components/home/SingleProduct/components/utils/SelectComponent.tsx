import {
  IOptionsAttributes,
  IVariationAttributes,
} from "../../../../../utils/interface";

const SelectComponent = ({
  name,
  choose,
  options,
  setVariationAttributes,
  variationAttributes,
}: {
  name: string | undefined;
  choose: string | undefined;
  options: IOptionsAttributes[] | undefined;
  setVariationAttributes: React.Dispatch<
    React.SetStateAction<IVariationAttributes[]>
  >;
  variationAttributes: IVariationAttributes[];
}) => {

  const onchange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (variationAttributes) {
      const newVariationAttr = [...variationAttributes];
      newVariationAttr.push({
        attribute: options?.find((elem) => elem.name === event.target.value)?.taxonomy || "",
        value: options?.find((elem) => elem.name === event.target.value)?.name || "",
      });
      setVariationAttributes(newVariationAttr);
    }
  };

  return (
    <div>
      <h1>{name}</h1>
      <div className="p-2 border rounded-xl">
        <select
          onChange={onchange}
          className="w-full justify-between outline-none cursor-pointer"
        >
          <option hidden>{choose}</option>
          {options?.map((el, i) => (
            <option key={i}>{el.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectComponent;
