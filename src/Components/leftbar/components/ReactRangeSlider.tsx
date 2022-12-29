import { Dispatch, SetStateAction } from "react";
import { Range } from "react-range";
import { useSearchParams } from "react-router-dom";
import { HomePageTextsType } from "../../../utils/interface";

const ReactRangeSlider = ({
  pricesRange,
  homePageTexts,
  setPricesRange,
}: {
  pricesRange: { [key: string]: number | null }[];
  homePageTexts: HomePageTextsType | undefined;
  setPricesRange: Dispatch<SetStateAction<{[key: string]: number | null}[]>>;
}) => {

  const [searchParams, setSearchParams] = useSearchParams();
  // @ts-ignore:next-line
  const currentQueries = Object.fromEntries([...searchParams])
  const range = [pricesRange[0]?.currentPrice || 0,pricesRange[1]?.currentPrice || 1];

  const onFinalChange = () => {
    setSearchParams({...currentQueries, min_price:range[0].toString(), max_price:range[1].toString()})
  };
   
  return (
    <>
      {homePageTexts?.value.description && (
         <div className="mt-10 px-2 w-full">
         <div>
           <h1>{homePageTexts?.value.description}</h1>
         </div>
         <div className="flex justify-between items-center my-4 flex-wrap">
           <div className="flex items-center my-2">
             <h2 className="border py-[5px] md:px-[10px] lg:px-[20px] ">{pricesRange[0].currentPrice}</h2>
           </div>
           <div className="flex items-center">
             <h2 className="border py-[5px] md:px-[10px] lg:px-[20px]">{pricesRange[1].currentPrice}</h2>
           </div>
         </div>
           <Range
             step={100}
             min={pricesRange[0].borderPrice || 0}
             max={pricesRange[1].borderPrice || 1}
             values={range}
             onChange={(values) => setPricesRange(state=>{
               return state.map((elem:any,index)=>({
                  ...elem,currentPrice:values[index]
               }))
             })}
             onFinalChange={onFinalChange}
             renderTrack={({ props, children }) => (
               <div
                 {...props}
                 style={{
                   ...props.style,
                   height: "2px",
                   width: "100%",
                   backgroundColor: "#6e6e",
                   outline: "none",
                 }}
               >
                 {children}
               </div>
             )}
             renderThumb={({ props }) => (
               <div
                 {...props}
                 style={{
                   ...props.style,
                   height: "15px",
                   width: "15px",
                   borderRadius: "50%",
                   backgroundColor: "cyan",
                   outline: "none",
                   cursor: "pointer",
                 }}
               />
             )}
           />
       </div>
      )}    
    </>
   
  );
};

export default ReactRangeSlider;
