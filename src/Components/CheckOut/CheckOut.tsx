import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { CHECKOUT_TEXTS } from "../../utils/constants/constants";
import {
  IBasketProduct,
  IBasketText,
  ICatchError,
} from "../../utils/interface";
import useGetText from "../basket/utils/useGetText";
import CheckOutCart from "./components/CheckOutCart";
import { SendCheckoutOrder } from "./utils.tsx/SendCheckoutOrder";

const CheckOut = ({
  checkoutBasket,
  setCheckoutBasket,
}: {
  checkoutBasket: IBasketProduct[];
  setCheckoutBasket: React.Dispatch<React.SetStateAction<IBasketProduct[]>>;
}) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [userAddress, setUserAddress] = useState<string>("");
  const [postAddress, setPostAddress] = useState<string>("");
  const [sendError, setSendError] = useState<boolean>(false);
  const [chekOutSendError, setCheckOutSendError] = useState<ICatchError>();
  const [sendLoading, setSendLoading] = useState<boolean>(false);

  const [checkoutText, setCheckoutText] = useState<IBasketText[] | undefined>();
  useGetText(setCheckoutText, CHECKOUT_TEXTS);
  const deleveriPrice = checkoutText && checkoutText[29].description;
  const navigate = useNavigate();

  const productIds = checkoutBasket.map((el) => {
    return {
      product_id: el.id,
      quantity: el.quantity,
      total:
        el.prices.sale_price !== "0"
          ? ((+el.prices.sale_price * el.quantity) / 100).toString()
          : ((+el.prices.regular_price * el.quantity) / 100).toString(),
    };
  });
  console.log("productIds>>>", productIds)

  const onSubmitForm = () => {
    if (
      firstName &&
      lastName &&
      userEmail &&
      company &&
      userAddress &&
      checkoutText
    ) {
      SendCheckoutOrder(
        firstName,
        lastName,
        userAddress,
        userEmail,
        company,
        phoneNumber,
        productIds,
        checkoutText[2].description,
        postAddress,
        setSendLoading,
        setCheckOutSendError,
        deleveriPrice
      );
      setSendError(false);
    } else {
      setSendError(true);
      setTimeout(() => {
        setSendError(false);
      }, 2000);
    }
  };

  return (
    <>
      {checkoutText && (
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative p-8">
            <div className="flex">
              <div
                onClick={() => navigate(-1)}
                className="flex items-center cursor-pointer"
              >
                <IoIosArrowBack />
                <p className="ml-2">{checkoutText[3].description}</p>
              </div>
            </div>
            <div className="absolute top-[20px] right-[20px] lg:right-[50%] lg:translate-x-[50%]">
              <img src={checkoutText[15].description} alt="" />
            </div>
            <div className="mt-[50px]">
              <h1 className="font-[700] text-[16px] xs:text-[20px] md:text-[24px] leading-7">
                {checkoutText[9].description}
              </h1>
            </div>
            <form className="w-full" onSubmit={(e) => e.preventDefault()}>
              <label className="flex mt-[20px] flex-col">
                <div className="flex">
                  {checkoutText[16].description}
                  <img
                    src={checkoutText[24].description}
                    alt="mandatory"
                    className="w-[8px] h-[8px]"
                  />
                </div>
                <input
                  type="text"
                  placeholder={checkoutText[17].description}
                  name="firstName"
                  value={firstName}
                  className="w-full border outline-none mt-2"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFirstName(e.target.value)
                  }
                />
              </label>
              <label className="flex mt-[20px] flex-col">
                <div className="flex">
                  {checkoutText[32].description}
                  <img
                    src={checkoutText[24].description}
                    alt="mandatory"
                    className="w-[8px] h-[8px]"
                  />
                </div>
                <input
                  type="text"
                  placeholder={checkoutText[34].description}
                  name="lastName"
                  value={lastName}
                  className="w-full border outline-none mt-2"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setLastName(e.target.value)
                  }
                />
              </label>
              <label className="flex mt-[20px] flex-col">
                <div className="flex">
                  {checkoutText[20].description}
                  <img
                    src={checkoutText[24].description}
                    alt="mandatory"
                    className="w-[8px] h-[8px]"
                  />
                </div>
                <input
                  type="text"
                  placeholder={checkoutText[21].description}
                  name="phoneNumber"
                  className="w-full border outline-none mt-2"
                  value={phoneNumber}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPhoneNumber(e.target.value)
                  }
                />
              </label>
              <label className="flex mt-[20px] flex-col">
                <div className="flex">
                  {checkoutText[11].description}
                  <img
                    src={checkoutText[24].description}
                    alt="mandatory"
                    className="w-[8px] h-[8px]"
                  />
                </div>
                <input
                  type="email"
                  placeholder={checkoutText[12].description}
                  name="userEmail"
                  className="w-full border  outline-none mt-2"
                  value={userEmail}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setUserEmail(e.target.value)
                  }
                />
              </label>
              <label className="flex mt-[20px] flex-col">
                <div className="flex">
                  {checkoutText[36].description}
                  <img
                    src={checkoutText[24].description}
                    alt="mandatory"
                    className="w-[8px] h-[8px]"
                  />
                </div>
                <input
                  type="text"
                  placeholder={checkoutText[36].description}
                  name="postAddress"
                  className="w-full border  outline-none mt-2"
                  value={postAddress}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPostAddress(e.target.value)
                  }
                />
              </label>
              <label className="flex mt-[20px] flex-col">
                <div className="flex">
                  {checkoutText[31].description}
                  <img
                    src={checkoutText[24].description}
                    alt="mandatory"
                    className="w-[8px] h-[8px]"
                  />
                </div>
                <input
                  type="text"
                  placeholder={checkoutText[33].description}
                  name="company"
                  className="w-full border outline-none mt-2"
                  value={company}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setCompany(e.target.value)
                  }
                />
              </label>
              <div className="mt-4">
                <div className="flex">
                  <h2>{checkoutText[8].description}</h2>
                  <img
                    src={checkoutText[24].description}
                    alt="mandatory"
                    className="w-[8px] h-[8px]"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center mt-2">
                  <div className="bg-[#F1EFE8] text-[#2D2A2E] rounded-xl p-2">
                    <p>{checkoutText[2].description}</p>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder={checkoutText[1].description}
                      name="userAddress"
                      className="w-full border rounded-xl outline-none"
                      value={userAddress}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUserAddress(e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="bg-[#F1EFE8] h-screen px-[20px]">
            <CheckOutCart
              checkoutBasket={checkoutBasket}
              setCheckoutBasket={setCheckoutBasket}
              checkoutText={checkoutText}
              onSubmitForm={onSubmitForm}
              sendError={sendError}
              sendLoading={sendLoading}
              deleveriPrice={deleveriPrice}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CheckOut;
