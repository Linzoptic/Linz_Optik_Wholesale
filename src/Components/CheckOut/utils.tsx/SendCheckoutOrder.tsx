import { httpClient } from "../../../http-client/HttpClient";
import { LOCAL_STORAGE_KEYS, PAGES, SEND_CHEKOUT } from "../../../utils/constants/constants";
import { ICatchError } from "../../../utils/interface";

export const SendCheckoutOrder = async (
  firstName: string,
  lastName: string,
  userAddress: string,
  userEmail: string,
  company: string,
  phoneNumber: string,
  checkoutBasketItemsKeys: (string | number)[],
  city: string,
  postAddress: string,
  setSendLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setCheckOutSendError: React.Dispatch<React.SetStateAction<ICatchError | undefined>>
) => {
  try {
    setSendLoading(true)
    const data = await httpClient.post(
      SEND_CHEKOUT,
      JSON.stringify({
         payment_data:[
          checkoutBasketItemsKeys,
         ],
         billing_address: {
            first_name: firstName,
            last_name: lastName,
            company,
            address_1: userAddress,
            phone: phoneNumber,
            email: userEmail,
            country: "AM",
            city,
            postcode: postAddress,
            state: "Erevan"
         },
         payment_method: "cheque",
         create_account: false
      }),
      {
        headers: {
          Nonce: `${localStorage.getItem(LOCAL_STORAGE_KEYS.NONCE)}`,
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem(
            LOCAL_STORAGE_KEYS.JWT_TOKEN
          )}`,
        },
      }
    );
    setSendLoading(false)
  } catch (error: any | undefined) {
    setCheckOutSendError(error)
    setSendLoading(true)
  }
};


