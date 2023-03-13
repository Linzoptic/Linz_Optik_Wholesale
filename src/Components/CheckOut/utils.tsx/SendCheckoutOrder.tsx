import { httpClient } from "../../../http-client/HttpClient";
import {
  LOCAL_STORAGE_KEYS,
  SEND_CHEKOUT,
} from "../../../utils/constants/constants";
import { ICatchError, IProductIds } from "../../../utils/interface";

export const SendCheckoutOrder = async (
  firstName: string,
  lastName: string,
  userAddress: string,
  userEmail: string,
  company: string,
  phoneNumber: string,
  productIds: IProductIds[],
  city: string,
  postAddress: string,
  setSendLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setCheckOutSendError: React.Dispatch<
    React.SetStateAction<ICatchError | undefined>
  >,
  deleveriPrice: string | undefined
) => {
  try {
    setSendLoading(true);
    await httpClient.post(
      SEND_CHEKOUT,
      JSON.stringify({
        line_items: productIds,
        billing: {
          first_name: firstName,
          last_name: lastName,
          company,
          address_1: userAddress,
          phone: phoneNumber,
          email: userEmail,
          country: "AM",
          city,
          postcode: postAddress,
          state: "Erevan",
        },
        status: "completed",
        shipping_lines: [
          {
            method_id: "flat_rate",
            total: "1000",
          },
        ],
      }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem(
            LOCAL_STORAGE_KEYS.JWT_TOKEN
          )}`,
        },
      }
    );
    setSendLoading(false);
  } catch (error: any | undefined) {
    setCheckOutSendError(error);
    setSendLoading(true);
  }
};
