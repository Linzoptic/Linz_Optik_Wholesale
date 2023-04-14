import { useEffect, useState } from "react";
import { httpClient } from "../../../http-client/HttpClient";
import { setBasket } from "../../../store/createSlice";
import {
  CONSUMER_KEY,
  LOCAL_STORAGE_KEYS,
} from "../../../utils/constants/constants";
import { ICatchError } from "../../../utils/interface";
import {useDispatch} from "react-redux"

const useGetBasket = () => {
  
  const [basketLoading, setBasketLoading] = useState<boolean>(false);
  const [basketError, setBasketError] = useState<ICatchError>();
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      try {
        setBasketLoading(true);
        const { data } = await httpClient.get(
          `/wc/store/cart/items?${CONSUMER_KEY}`,
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
          dispatch(setBasket(data));
        }
      } catch (error: any | undefined) {
        setBasketError(error);
      } finally {
        setBasketLoading(false);
      }
    })();
  }, [dispatch]);

  return {
    basketLoading,
    basketError,
  };
};

export default useGetBasket;
