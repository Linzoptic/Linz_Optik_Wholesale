import React from "react";
import { Link } from "react-router-dom";
import { Products } from "../../utils/interface";


const ProductItem = (props: Products) => {

  return (
    <Link to={`/product/${props.id}`}>
      <div className="relative overflow-hidden text-center border shadow-xl hover:scale-[102%] bg-gradient-to-b from-cyan-100 to-[#004f87ac] duration-100 rounded-md cursor-pointer">
        <div className="flex items-center justify-center ">
          <img
            src={props.image_url[0]}
            alt="glasses"
            className="w-full max-h-[200px] object-cover"
          />
        </div>
        <div className="text-left p-2  text-white">
          <h1 className="text-[13px] font-[600] sm:text-[16px] md:text-[20px] uppercase">{props.name}</h1>
          <p className="text-black/60 font-[600] text-[12px] md:text-[14px]">{props.sku}</p>
          <p className="text-right font-bold text-[12px] sm:text-[16px] md:text-[20px] font-mono -tracking-[2px]">
            <span className="text-black font-normal text-[14px] mr-2">from $</span>
            {props.regular_price}
          </p>
          <p className= {props.sale_price ? "text-[9px] text-right text-gray-500 md:text-[13px]" : "pb-[19px]"}>
            {props.sale_price ? `Suggested retail price ${props.sale_price}`: ""}
          </p>
        </div>
        {/* {props.new && 
          <div className="absolute w-[150px] top-[-10px] right-[-58px] bg-[#0e75c0] pb-2 pt-5 rotate-45 leading-3 flex flex-col ">
            {props.new.split(" ").map((el,i) => (
              <p key={i} className="uppercase font-[650] text-white/80 text-[11px]">{el}</p>
            ))}
          </div>
        } */}
      </div>
    </Link>
  );
};

export default ProductItem;
