import React from "react";
import { httpClient } from "../../../../../http-client/HttpClient";
import {
  CONSUMER_KEY,
  LOCAL_STORAGE_KEYS,
  SINGLE_PRODUCT_TYPES,
} from "../../../../../utils/constants/constants";
import {
  ICatchError,
  IVariationAttributes,
} from "../../../../../utils/interface";

export const AddToCartFunction = async (
  id: number | undefined,
  count: number,
  setAddToCartCatchError: React.Dispatch<
    React.SetStateAction<ICatchError | undefined>
  >,
  setAddToCartLoading: React.Dispatch<
    React.SetStateAction<boolean | undefined>
  >,
  variationAdd: string | undefined,
  variationAttributes: IVariationAttributes[] | undefined
) => {
  const data: { id?: number; quantity: number; variation?: IVariationAttributes[] | undefined } = {
    id: id,
    quantity: count,
  };
  if (variationAdd === SINGLE_PRODUCT_TYPES.IN_STOCK) {
    data.variation = variationAttributes
  };
  try {
    setAddToCartLoading(true);
    if (!id) {
      return false;
    } else {
      const response = await httpClient.post(
        `/wc/store/v1/cart/add-item?${CONSUMER_KEY}`,
        data,
        {
          headers: {
            Nonce: localStorage.getItem(LOCAL_STORAGE_KEYS.NONCE),
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${localStorage.getItem(
              LOCAL_STORAGE_KEYS.JWT_TOKEN
            )}`,
          },
        }
      );
      if (response){
        setAddToCartLoading(false);
      }
    }
  } catch (error: any | undefined) {
    setAddToCartCatchError(error);
    setAddToCartLoading(false);
  }
};
