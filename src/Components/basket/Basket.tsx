import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../../utils/constants/constants";
import { AiOutlineHome } from "react-icons/ai";
import { IoMdArrowBack } from "react-icons/io";
import useGetBasket from "./utils/useGetBasket";
import BasketSkeleton from "../../skeleton/BasketSkeleton";
import useBasketText from "./utils/useBasketText";
import BasketProductItem from "./BasketProductItem";
import { MdDeleteOutline } from "react-icons/md";
import { IBasketProduct } from "../../utils/interface";
import { onRemoveAllBasket } from "./utils/onRemoveAllBasket";

const Basket = () => {
  const [basket, setBasket] = useState<IBasketProduct[]>();
  const { basketError, basketLoading } = useGetBasket(setBasket);
  const { basketText } = useBasketText();

  const navigate = useNavigate();

  const BackTo = () => {
    navigate(-1);
  };

  const BackToHOme = () => {
    navigate(PAGES.HOME);
  };

  console.log(basket)

  return (
    <>
      {basketLoading ? (
        <>
          <div className="flex items-center flex-col xs:flex-row justify-center  xs:justify-between">
            <div className="w-32 h-8 animate-bounce rounded-2xl bg-gray-300"></div>
            <div className="w-44 h-8 animate-bounce rounded-2xl bg-gray-300"></div>
          </div>
          <BasketSkeleton count={basket?.length} />
        </>
      ) : (
        <div>
          <div className="rounded-2xl  px-3 py-1 mt-2 border-2 border-[#F1EFE8]  text-[#384275] font-[600] flex items-center flex-col xs:flex-row justify-center  xs:justify-between">
            <div className="flex items-center">
              <div
                onClick={BackToHOme}
                className="px-4 bg-[#F1EFE8] rounded-2xl py-2 cursor-pointer"
              >
                <AiOutlineHome />
              </div>
              <div
                onClick={BackTo}
                className="px-4 bg-[#F1EFE8] rounded-2xl py-2 ml-2 cursor-pointer"
              >
                <IoMdArrowBack />
              </div>
            </div>
            <div 
              className="px-4 py-[3px] cursor-pointer  bg-[#F1EFE8] rounded-2xl text-black flex items-center "
              onClick={() => onRemoveAllBasket(setBasket)}
              >
              {basketText && <button>{basketText[4].description}</button>}
              <MdDeleteOutline size={20} className="ml-[5px]" />
            </div>
          </div>
          <div>
            {basket?.length ? (
              basket?.map((elem, index) => (
                <BasketProductItem
                  key={elem.key}
                  itemKey={elem.key}
                  name={elem.name}
                  sku={elem.sku}
                  images={elem.images}
                  prices={elem.prices}
                  id={elem.id}
                  quantity={elem.quantity}
                  count={basketText && basketText[2]?.description}
                  setBasket={setBasket}
                />
              ))
            ) : (
              <div className="text-center text-[20px] font-[600]">
                <h1>{basketText && basketText[3].description}</h1>
              </div>
            )}
          </div>
        </div>
      )}
      {basketError && (
        <div>
          <h1>{basketError?.response?.data.message}</h1>
        </div>
      )}
    </>
  );
};

export default Basket;
