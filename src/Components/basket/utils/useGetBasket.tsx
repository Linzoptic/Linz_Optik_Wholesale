import axios from "axios";
import { useEffect, useState } from "react";
import {
  BASE_URL,
  CONSUMER_KEY,
  LOCAL_STORAGE_KEYS,
} from "../../../utils/constants/constants";
import { CatchError, IBasketProduct } from "../../../utils/interface";

const useGetBasket = (
  setBasket: React.Dispatch<React.SetStateAction<IBasketProduct[] | undefined>>
) => {
  const [basketLoading, setBasketLoading] = useState<boolean>(false);
  const [basketError, setBasketError] = useState<CatchError>();

  useEffect(() => {
    (async () => {
      try {
        setBasketLoading(true);
        const { data } = await axios.get(
          `${BASE_URL}/wc/store/cart/items?${CONSUMER_KEY}`,
          {
            headers: {
              "Content-Type": "application/json; charset=UTF-8",
              Authorization: `Bearer  ${localStorage.getItem(
                LOCAL_STORAGE_KEYS.JWT_TOKEN
              )}`,
            },
          }
        );
        if (data) {
          setBasket(data);
        }
      } catch (error: any | undefined) {
        setBasketError(error);
      } finally {
        setBasketLoading(false);
      }
    })();
  }, [setBasket]);

  return {
    basketLoading,
    basketError,
  };
};

export default useGetBasket;
