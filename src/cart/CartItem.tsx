import React from "react";
import { useAppDispach, useAppSelector } from "../redux/Hook";
import { MdDeleteOutline } from "react-icons/md";
import {
  RemoveCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/CartSlice";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const CartItem = () => {
  const dispatch = useAppDispach();
  const selector = useAppSelector((state) => state.AddCart);

  return (
    <div>
      {selector.CartList.map((cart, index) => (
        <div
          key={index}
          className="border-b-2 mt-2 w-[200px] md:w-[350px] lg:w-[450px]"
        >
          <div className="object-cover flex justify-between">
            <img src={cart.images[0].src} alt="#" className="w-full" />
            <MdDeleteOutline
              onClick={() => dispatch(RemoveCart(cart.id))}
              size={24}
              className="cursor-pointer absolute right-0 text-red-600"
            />
          </div>
          <div>
            <div className="flex justify-between flex-wrap">
              <h1 className="text-cyan-900 text-[16px] md:text-[20px]">
                {cart.name}
              </h1>
              <p className="text-[14px] text-cyan-700">{cart.sku}</p>
            </div>
          </div>
          <div className="flex justify-between my-2">
            <div>
              {cart?.sale_price ? (
                <p className="text-[16px] md:text-[18px] font-[600] text-cyan-900">
                  {cart.sale_price} AMD
                </p>
              ) : (
                <p className="text-[16px] md:text-[18px] font-[600] text-cyan-900">
                  {cart?.regular_price} AMD
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center text-cyan-800">
            <AiOutlinePlus
              className="cursor-pointer"
              onClick={() => dispatch(incrementQuantity(cart.id))}
            />
            <div className="border border-white px-4 py-[4px] rounded">
              <p className="text-cyan-800 font-bold">
                {cart.quantity}
                <span className="text-cyan-900 ml-2 font-[400]">In Cart</span>
              </p>
            </div>
            <AiOutlineMinus
              className="cursor-pointer"
              onClick={() => dispatch(decrementQuantity(cart.id))}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
