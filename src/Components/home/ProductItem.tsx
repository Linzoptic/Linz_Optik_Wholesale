import React from "react";
import { Link } from "react-router-dom";
import { Products } from "../../utils/interface";

const ProductItem = (props: Products) => {
  return (
    <Link to={`/product/${props.id}`}>
      <div className="cursor-pointer hover:shadow-[0_20px_40px_1px] hover:scale-[101%] duration-150 ">
        <div className="flex items-center justify-center rounded-tl-lg rounded-tr-lg bg-gradient-to-b to-[#7f868d65] from-[#056cc67e]  w-full h-[150px] md:h-[300px] sm:h-[200px] ">
          <img 
            src={props.image_url[0]}
            alt="glasses"
            className="w-full  object-cover"
          />
        </div>
        <div className="text-center p-2 text-cyan-900 shadow-[0_-5px_14px_0] ">
          <div>
            <p className="text-[#02020266] font-[600] text-[8px] md:text-[14px]">
              {props.sku}
            </p>
            <h1 className="text-[14px] font-[600] sm:text-[16px] md:text-[18px] uppercase">
              {props.name}
            </h1>
          </div>
          {props.sale_price ? (
            <div className="flex justify-around">
              <p className="text-[10px] md:text-[14px] lg:text-[16px] font-[600]">
                {props.sale_price}
                <span className="text-[10px] md:text-[14px] lg:text-[16px]"> AMD</span>
              </p>
              <p className="text-[10px] md:text-[14px] lg:text-[16px] line-through">
                {props.regular_price}
                <span className="text-[10px] md:text-[14px] lg:text-[16px]"> AMD</span>
              </p>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-[10px] md:text-[14px] lg:text-[16px] font-[600]">
                {props.regular_price}
                <span className="text-[10px] md:text-[14px] lg:text-[16px]"> AMD</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
