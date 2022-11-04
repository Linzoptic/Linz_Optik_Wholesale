import React from "react";
import { Link } from "react-router-dom";
import { Products } from "./base";


const ProductItem = (props: Products) => {

  return (
    <Link to={`/product/${props.id}`}>
      <div className="text-center border border-[#0c333b56] p-3 shadow-xl hover:scale-105 duration-200 rounded-md cursor-pointer">
        <div className="flex items-center justify-center">
          <img
            src={props.img}
            alt="glasses"
            className=" md:w-[200px] md:h-[200px] shadow-2xl rounded-full"
          />
        </div>
        <div className="text-left w-full">
          <h1 className="text-2xl ">{props.name}</h1>
          <p className="text-black/40 ">{props.code}</p>
          <p className="text-right font-bold">
            <span className="text-gray-700 font-normal">from $</span>
            {props.price_from}
          </p>
          <p className="text-[12px] text-right text-gray-500 ">
            Suggested retail price ${props.price_to}
          </p>
          <button className="bg-[#223353]">Add to Cart</button>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
