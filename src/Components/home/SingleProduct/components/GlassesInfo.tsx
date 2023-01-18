import { ISinglePageTexts } from "../../../../utils/interface";
import IncrementDecrement from "./utils/IncrementDecrement";

const GlassesInfo = ({
  singleProductTexts,
}: {
  singleProductTexts: ISinglePageTexts | undefined;
}) => {
  
  return (
    <div>
      <div className=" w-full xs:max-w-[150px]">
       <IncrementDecrement name={singleProductTexts?.choose.description}/>
      </div>
    </div>
  );
};

export default GlassesInfo;
