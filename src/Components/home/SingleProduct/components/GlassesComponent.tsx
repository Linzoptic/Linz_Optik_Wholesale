
import { SinglePageTextsType, TypesTexts } from "../../../../utils/interface";
import IncrementDecrement from "./utils/IncrementDecrement";

const GlassesComponent = ({
  singleProductTexts,
  socialIcons,
}: {
   socialIcons : TypesTexts[] | undefined;
  singleProductTexts: SinglePageTextsType | undefined;
}) => {
  
  return (
    <div>
      <div className=" w-full xs:max-w-[150px]">
       <IncrementDecrement name={singleProductTexts?.choose.description}/>
      </div>
      <div className="mt-2 lg:mt-10 lg:flex justify-between  items-center">
        <div>
          <div className="border-2 text-[#384275] border-[#384275] rounded-xl bg-transparent text-[14px] xs:text-[16px] px-5 py-[5px] flex items-center justify-center hover:text-[#2549f9] cursor-pointer duration-150">
            <p className="font-[600]">{singleProductTexts?.addToCart.description}</p>
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

export default GlassesComponent;
