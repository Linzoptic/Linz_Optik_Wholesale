import {
  ISinglePageTexts,
  ISingleProductAttributes,
} from "../../../../utils/interface";
import SelectComponent from "./utils/SelectComponent";
import IncrementDecrement from "./utils/IncrementDecrement";

const LinsInfo = ({
  singleProductTexts,
  variation_attributes,
  choose,
}: {
  singleProductTexts: ISinglePageTexts | undefined;
  variation_attributes: ISingleProductAttributes[] | undefined;
  choose: string | undefined;
}) => {
  return (
    <div>
      <div className="flex items-center mb-3">
        <img src={singleProductTexts?.worningIcon.description} alt="worning" />
        <p className="mx-2">
          {singleProductTexts?.one_product_price.description}
        </p>
      </div>
      {variation_attributes?.map((elem, index) => {
        return (
          <div
            key={index}
            className={`border-2 p-2 rounded-lg ${
              index === 1 ? "mt-0 md:mt-3" : ""
            }`}
          >
            <h1 className="text-[20px] font-[600]">{elem?.name}</h1>
            <div className="block xs:flex items-center justify-between mt-2">
              <div className="w-full mt-3 md:mt-0 md:max-w-[230px] flex justify-between">
                {elem?.types.map((type, index) => {
                  return (
                    <SelectComponent
                      key={index}
                      name={type.name}
                      choose={choose}
                      options={type.options}
                    />
                  );
                })}
              </div>
              <div className="w-full mt-3 md:mt-0 md:max-w-[150px]">
                <IncrementDecrement
                  name={singleProductTexts?.count.description}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LinsInfo;
