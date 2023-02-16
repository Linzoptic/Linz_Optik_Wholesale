import { ISinglePageTexts } from "../../../../utils/interface";
import IncrementDecrement from "./utils/IncrementDecrement";

const GlassesInfo = ({
  singleProductTexts,
  stockQuantity,
}: {
  stockQuantity: number | undefined;
  singleProductTexts: ISinglePageTexts | undefined;
}) => {
  
  return (
    <div>
      <div className=" w-full xs:max-w-[150px]">
       <IncrementDecrement name={singleProductTexts?.choose.description} stockQuantity={stockQuantity}/>
      </div>
    </div>
  );
};

export default GlassesInfo;
