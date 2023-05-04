import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import { CHECKOUT_TEXTS, ERROR_MASSEGE } from "../../utils/constants/constants";
import { ICatchError, ICheckOutText } from "../../utils/interface";
import CheckOutCart from "./components/CheckOutCart";
import InputGroupComponent from "./components/InputGroupComponent";
import { SendCheckoutOrder } from "./utils.tsx/SendCheckoutOrder";
import { httpClient } from "../../http-client/HttpClient";

const CheckOut = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [userAddress, setUserAddress] = useState<string>("");
  const [postAddress, setPostAddress] = useState<string>("");

  const [hasError, setHasError] = useState<boolean>(false);
  const [chekOutSendHasError, setCheckOutSendHasError] =
    useState<ICatchError>();
  const [sendIsLoading, setSendIsLoading] = useState<boolean>(false);
  const [checkoutText, setCheckoutText] = useState<ICheckOutText | undefined>();

  useEffect(() => {
  try {
    (async () => {
      const { data } = await httpClient.get(CHECKOUT_TEXTS);
      if (data) {
       setCheckoutText(data);
      }
    })();
  } catch (error: any | undefined) {
    setHasError(true)
  }
 }, []);


  const deleveriPrice = checkoutText?.["delivery-frames"]?.description;
  const checkoutBasket = useSelector(
    (state: RootState) => state.checkoutBasket
  );
  const navigate = useNavigate();

  const productDetils = checkoutBasket.map((basketItem) => {
    return {
      product_id: basketItem.id,
      quantity: basketItem.quantity,
      total:
        basketItem.prices.sale_price !== "0"
          ? ((+basketItem.prices.sale_price * basketItem.quantity) / 100).toString()
          : ((+basketItem.prices.regular_price * basketItem.quantity) / 100).toString(),
    };
  });

  const onSubmitForm = () => {
    setHasError(false);
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
        productDetils,
        checkoutText?.["address-region"]?.description,
        postAddress,
        setSendIsLoading,
        setCheckOutSendHasError,
        deleveriPrice
      );
      setHasError(false);
    } else {
      setHasError(true);
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
                <p className="ml-2">{checkoutText?.backto.description}</p>
              </div>
            </div>
            <div className="absolute top-[20px] right-[20px] lg:right-[50%] lg:translate-x-[50%]">
              <img src={checkoutText?.logo.description} alt="logo" />
            </div>
            <div className="mt-[50px]">
              <h1 className="font-[700] text-[16px] xs:text-[20px] md:text-[24px] leading-7">
                {checkoutText?.["delivery-data"].description}
              </h1>
            </div>
            <form className="w-full" onSubmit={(event) => event.preventDefault()}>
              <InputGroupComponent
                name={checkoutText?.name.description}
                imgSrc={checkoutText?.["required-red-icon"].description}
                placeholder={checkoutText?.["name-placeholder"].description}
                inputValue={firstName}
                setInputValue={setFirstName}
              />
              <InputGroupComponent
                name={checkoutText?.["last-name"].description}
                imgSrc={checkoutText?.["required-red-icon"].description}
                placeholder={checkoutText?.["press-your-last-name"].description}
                inputValue={lastName}
                setInputValue={setLastName}
              />
              <InputGroupComponent
                name={checkoutText?.phone.description}
                imgSrc={checkoutText?.["required-red-icon"].description}
                placeholder={checkoutText?.["phone-placeholder"].description}
                inputValue={phoneNumber}
                setInputValue={setPhoneNumber}
              />
              <InputGroupComponent
                name={checkoutText?.email.description}
                imgSrc={checkoutText?.["required-red-icon"].description}
                placeholder={checkoutText?.["email-placeholder"].description}
                inputValue={userEmail}
                setInputValue={setUserEmail}
              />
              <InputGroupComponent
                name={checkoutText?.["postal-code"].description}
                imgSrc={checkoutText?.["required-red-icon"].description}
                placeholder={checkoutText?.["postal-code"].description}
                inputValue={postAddress}
                setInputValue={setPostAddress}
              />
              <InputGroupComponent
                name={checkoutText?.["company"].description}
                imgSrc={checkoutText?.["required-red-icon"].description}
                placeholder={checkoutText?.["press-company-name"].description}
                inputValue={company}
                setInputValue={setCompany}
              />
              <div className="mt-4">
                <div className="flex">
                  <h2>{checkoutText?.address.description}</h2>
                  <img
                    src={checkoutText?.["required-red-icon"].description}
                    alt="mandatory"
                    className="w-[8px] h-[8px]"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center mt-2">
                  <div className="bg-[#F1EFE8] text-[#2D2A2E] rounded-xl p-2">
                    <p>{checkoutText?.address.description}</p>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder={checkoutText?.["address-region"].description}
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
            {hasError ? (
              <div className="text-center mt-10">
                <p className="text-red-900 font-bold mt-3">
                  {checkoutText?.["fill-all-fields"].description}
                </p>
              </div>
            ) : null}
          </div>
          <div className="bg-[#F1EFE8] h-screen px-[20px]">
            <CheckOutCart
              checkoutText={checkoutText}
              onSubmitForm={onSubmitForm}
              sendIsLoading={sendIsLoading}
              deleveriPrice={deleveriPrice}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CheckOut;
