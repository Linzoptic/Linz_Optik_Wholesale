import axios from "axios";
import React from "react";
import {
  BASE_URL,
  CONSUMER_KEY,
  LOCAL_STORAGE_KEYS,
} from "../../../../../utils/constants/constants";
import { CatchError } from "../../../../../utils/interface";

export const AddToCartFunctionCom = async (
  id: number | undefined,
  count: number,
  setAddToCartCatchError: React.Dispatch<React.SetStateAction<CatchError | undefined>>,
  setAddToCartLoading: React.Dispatch<React.SetStateAction<boolean | undefined>>
) => {
  try {
    setAddToCartLoading(true);
    if (!id) {
      return false;
    } else {
      const response = await axios.post(
        `${BASE_URL}/wc/store/v1/cart/add-item?${CONSUMER_KEY}`,
        JSON.stringify({
          id,
          quantity: count,
        }),
        {
          headers: {
            "Nonce": "b96be96539",
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${localStorage.getItem(
              LOCAL_STORAGE_KEYS.JWT_TOKEN
            )}`,
          },
        },
      );
      if(response){
        setAddToCartLoading(false);
      }
    }
  } catch (error: any | undefined) {
    setAddToCartCatchError(error);
    setAddToCartLoading(false);
  }
};
