import React, { useEffect, useState } from "react";
import {
  SinglePageTextsType,
  SingleProductAttributes,
  TypesTexts,
} from "../../../../utils/interface";
import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import SelectComponent from "./utils/SelectComponent";
import IncrementDecrement from "./utils/IncrementDecrement";

const LinsComponents = ({
  singleProductTexts,
  attributes,
  socialIcons,
  choose,
}: {
  singleProductTexts: SinglePageTextsType | undefined;
  attributes: SingleProductAttributes[] | undefined;
  socialIcons: TypesTexts[] | undefined;
  choose: string | undefined;
}) => {
  const [rigthADD, setRigthADD] = useState<SingleProductAttributes[]>();
  const [rigthSPH, setRigthSPH] = useState<SingleProductAttributes[]>();
  const [leftADD, setLeftADD] = useState<SingleProductAttributes[]>();
  const [leftSPH, setLeftSPH] = useState<SingleProductAttributes[]>();

  useEffect(() => {
    if (attributes) {
      const rigthAdd = attributes.filter(
        (el) => el.name.toLowerCase() === "ajadd"
      );
      setRigthADD(rigthAdd);
      const rigthSPH = attributes.filter(
        (el) => el.name.toLowerCase() === "ajsph"
      );
      setRigthSPH(rigthSPH);
      const leftAdd = attributes.filter(
        (el) => el.name.toLowerCase() === "dzaxadd"
      );
      setLeftADD(leftAdd);
      const leftSph = attributes.filter(
        (el) => el.name.toLowerCase() === "dzaxsph"
      );
      setLeftSPH(leftSph);
    }
  }, [attributes]);

  return (
    <div>
      <div className="flex items-center mb-3">
        <img src={singleProductTexts?.worningIcon.description} alt="worning" />
        <p className="mx-2">
          {singleProductTexts?.one_product_price.description}
        </p>
      </div>
      <div className="border-2 p-2 rounded-lg">
        <h1 className="text-[20px] font-[600]">
          {singleProductTexts?.rigth.description}
        </h1>
        <div className="block xs:flex items-center justify-between mt-2">
          <div className="w-full mt-3 md:mt-0 md:w-[31%]">
            <SelectComponent
              name={singleProductTexts?.sph.description}
              choose={choose}
              option={rigthSPH}
            />
          </div>
          <div className="w-full mt-3 md:mt-0 md:w-[31%]">
            <SelectComponent
              name={singleProductTexts?.ADD.description}
              choose={choose}
              option={rigthADD}
            />
          </div>
          <div className="w-full mt-3 md:mt-0 md:w-[31%]">
            <IncrementDecrement name={singleProductTexts?.count.description}/>
          </div>
        </div>
      </div>
      <div className="border-2 p-2 rounded-lg mt-0 md:mt-3">
        <h1 className="text-[20px] font-[600]">
          {singleProductTexts?.left.description}
        </h1>
        <div className="block xs:flex items-center justify-between mt-2">
          <div className="w-full mt-3 md:mt-0 md:w-[31%]">
            <SelectComponent
              name={singleProductTexts?.sph.description}
              choose={choose}
              option={leftSPH}
            />
          </div>
          <div className="w-full mt-3 md:mt-0 md:w-[31%]">
            <SelectComponent
              name={singleProductTexts?.ADD.description}
              choose={choose}
              option={leftADD}
            />
          </div>
          <div className="w-full mt-3 md:mt-0 md:w-[31%]">
            <IncrementDecrement name={singleProductTexts?.count.description}/>
          </div>
        </div>
      </div>
      <div className="mt-2 lg:mt-10 lg:flex justify-between  items-center">
        <div>
          <div className="border-2 text-cyan-900 border-cyan-700 rounded-xl bg-transparent text-[14px] xs:text-[16px] px-5 py-[5px] flex items-center justify-center hover:bg-cyan-700 hover:text-white cursor-pointer duration-150">
            <p>{singleProductTexts?.addToCart.description}</p>
            <img
              src={singleProductTexts?.basket_icon.description}
              alt="basketIcon"
              className="mx-2"
            />
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 p-2 border-t border-t-cyan-800 lg:border-0 lg:mb-3">
          <div>
            <p className="text-[16px]">
              {singleProductTexts?.share.description}
            </p>
          </div>
          <div className="flex justify-between">
            {socialIcons?.map((el, i) => (
              <img
                key={i}
                src={el.description}
                alt="icon"
                className="ml-10 cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinsComponents;
