import React from "react";
import { Link } from "react-router-dom";
import { PAGES } from "../../Product/constants";
import { Products } from "../../utils/interface";

const ProductItem = (props: Products) => {
  return (
    <Link to={`${PAGES.PRODUCT}/${props.id}`}>
      <div
        style={{ position: "relative" }}
        className="overflow-hidden cursor-pointer hover:shadow-[0_20px_40px_1px] hover:scale-[101%] rounded-tl-lg rounded-tr-lg duration-150"
      >
        <figure className="flex items-center justify-center rounded-tl-lg rounded-tr-lg bg-gradient-to-b to-[#7f868d65] from-[#056cc67e]  w-full h-[150px] md:h-[300px] sm:h-[200px] ">
          {props?.stock_status.includes("out") && (
            <div
              className="w-36 bg-red-500 top-4 right-[-40px] rotate-[45deg] flex items-center justify-center p-1 text-white"
              style={{ position: "absolute" }}
            >
              <p>{props?.notAvailable}</p>
            </div>
          )}
          <img
            src={props?.image_url[0]}
            alt="glasses"
            className="w-full  object-cover"
          />
        </figure>
        <div className="text-center p-2 text-cyan-900 shadow-[0_-5px_14px_0] ">
          <div>
            <p className="text-[#02020266] font-[600] text-[8px] md:text-[14px]">
              {props?.sku}
            </p>
            <h1 className="text-[14px] font-[600] sm:text-[16px] md:text-[18px] uppercase">
              {props?.name}
            </h1>
          </div>
          {props?.sale_price_string ? (
            <div className="flex justify-around">
              <p className="text-[10px] md:text-[14px] lg:text-[16px] font-[600]">
                {props?.sale_price_string}
                <span className="text-[10px] md:text-[14px] lg:text-[16px]">
                  {props.currencyName}
                </span>
              </p>
              <p className="text-[10px] md:text-[14px] lg:text-[16px] line-through">
                {props?.regular_price_string}
                <span className="text-[10px] md:text-[14px] lg:text-[16px]">
                  {props.currencyName}
                </span>
              </p>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-[10px] md:text-[14px] lg:text-[16px] font-[600]">
                {props?.regular_price_string}
                <span className="text-[10px] md:text-[14px] lg:text-[16px] ml-1">
                  {props.currencyName}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
