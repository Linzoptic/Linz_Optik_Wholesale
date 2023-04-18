import { useEffect } from "react";
import { ICheckOutText } from "../../../utils/interface";
import { GrClose } from "react-icons/gr";
import BorderComponent from "./BorderComponent";
import Utils from "../../basket/utils/Utils";
import { getTotalSaleAllPrices } from "../utils.tsx/getTotalSaleAllPrices";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../../../utils/constants/constants";
import Loader from "../../../utils/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { setCheckoutBasket } from "../../../store/createSlice";

const CheckOutCart = ({
  checkoutText,
  onSubmitForm,
  hasError,
  sendIsLoading,
  deleveriPrice,
}: {
  checkoutText: ICheckOutText | undefined;
  onSubmitForm: () => void;
  hasError: boolean;
  sendIsLoading: boolean;
  deleveriPrice: string | undefined;
}) => {
  const navigate = useNavigate();
  const checkoutBasket = useSelector((state: RootState) => state.checkoutBasket);
  const currency = checkoutBasket?.map((el) => el.prices.currency_code);
  const dispatch = useDispatch();

  const { allPrices, sale, totalPrice } = getTotalSaleAllPrices(
    checkoutBasket,
    deleveriPrice
  );

  const onDelelteItem = (id: number) => {
    const newCheckOutBasket = checkoutBasket.filter((el) => el.id !== id);
    dispatch(setCheckoutBasket(newCheckOutBasket));
  };

  useEffect(() => {
    if (!checkoutBasket.length) {
      navigate(PAGES.BASKET);
    }
  }, [checkoutBasket.length, navigate]);

  return (
    <>
      {checkoutText && checkoutBasket.length ? (
        <div className="h-auto">
          <div className="mb-[50px] mt-[20px]">
            <h1 className="text-[#2D2A2E] text-[18px] xs:text-[20px] md:text-[24px] font-[700]">
              {checkoutText?.["your-order"].description}
            </h1>
          </div>
          <div>
            {checkoutBasket?.map((el, index) => (
              <div key={index} className="relative pb-8">
                <div className="flex flex-col justify-between md:flex-row">
                  <div className="flex">
                    <div className="w-[90px] h-[90px] bg-[#fff] flex items-center justify-center rounded-xl">
                      <img
                        src={el.images[0].src}
                        alt="pictur"
                        className="object-cover"
                      />
                      <div
                        className="absolute left-[-20px] top-[-20px] p-[10px] rounded-full bg-white cursor-pointer"
                        onClick={() => onDelelteItem(el.id)}
                      >
                        <GrClose size={14} />
                      </div>
                    </div>
                    <div className="ml-4">
                      <div>
                        <p className="text-[#2D2A2E] ">{el.sku}</p>
                        <p className="text-[#2D2A2E] font-[700]">{el.name}</p>
                      </div>
                      {checkoutBasket.find((el) => el.variation) && (
                        <div className="flex flex-wrap">
                          {el.variation?.map((item, i) => (
                            <p
                              key={i}
                              className="text-[12px] [&:not(:first-child)]:ml-[5px] font-[600]"
                            >
                              {item.attribute.split(" ")[1]}:
                              <span className="mx-1 font-[500]">
                                {item.value}
                              </span>
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center mt-3 md:mt-0 justify-between md:flex-col md:items-end">
                    <div className="flex items-center bg-white px-[10px] py-[5px] rounded-xl">
                      <p>{checkoutText?.["quantity"].description}</p>
                      <p className="font-[700] ml-2">{el.quantity}</p>
                    </div>
                    {el?.prices?.sale_price !== "0" ? (
                      <div className="flex items-end md:block  lg:flex">
                        <p className="text-[16px] lg:text-[20px] font-[600]">
                          {Utils(el.prices?.sale_price, el.quantity)}
                          <span className=" text-[16px] lg:text-[20px]">
                            {el?.prices.currency_code}
                          </span>
                        </p>
                        <p className="text-[16px] lg:text-[20px] line-through ml-2">
                          {Utils(el.prices?.regular_price, el.quantity)}
                          <span className=" text-[16px] lg:text-[20px]">
                            {el?.prices.currency_code}
                          </span>
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-[16px] lg:text-[20px] font-[600]">
                          {Utils(el.prices?.regular_price, el.quantity)}
                          <span className=" text-[16px] lg:text-[20px] ml-1">
                            {el?.prices.currency_code}
                          </span>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-[30px]">
                  <BorderComponent bg={"bg-white"} />
                </div>
              </div>
            ))}
            {checkoutText && currency && (
              <div className="flex flex-col items-end">
                <div className="flex">
                  <p>{checkoutText?.["order-price"].description}</p>
                  <p className="ml-5 font-semibold">
                    {allPrices.toLocaleString()}
                  </p>
                  <p className="ml-1">{currency[0]}</p>
                </div>
                <div className="flex">
                  <p>{checkoutText?.["delivery-price"].description}</p>
                  <p className="ml-5 font-semibold">{deleveriPrice}</p>
                  <p className="ml-1">{currency[0]}</p>
                </div>
                <div className="flex">
                  <p>{checkoutText?.sale.description}</p>
                  <p className="ml-5 font-semibold">{sale.toLocaleString()}</p>
                  <p className="ml-1">{currency[0]}</p>
                </div>
                <div className="w-[30%]">
                  <BorderComponent bg="bg-white" />
                </div>
                <div className="flex">
                  <p className="font-[700]">{checkoutText?.total.description}</p>
                  <p className="ml-5 font-[600]">
                    {totalPrice?.toLocaleString()}
                  </p>
                  <p className="ml-1">{currency[0]}</p>
                </div>
                {hasError && (
                  <p className="text-red-900 font-bold mt-3">
                    {checkoutText?.["fill-all-fields"].description}
                  </p>
                )}
                {sendIsLoading && <Loader loading={sendIsLoading} size={30} />}
                <div
                  className="mt-3 bg-[#384275] px-7 py-2 rounded-xl text-white cursor-pointer text-center"
                  onClick={onSubmitForm}
                >
                  <p>{checkoutText?.["confirm-order"].description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CheckOutCart;
