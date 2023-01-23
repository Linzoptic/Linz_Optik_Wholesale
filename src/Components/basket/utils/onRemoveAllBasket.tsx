import { httpClient } from "../../../http-client/HttpClient";
import {
  CONSUMER_KEY,
  LOCAL_STORAGE_KEYS,
} from "../../../utils/constants/constants";
import { IBasketProduct } from "../../../utils/interface";

export const onRemoveAllBasket = (
  setBasket: React.Dispatch<React.SetStateAction<IBasketProduct[] | undefined>>
) => {
  (async () => {
      const { data } = await httpClient.delete(
        `/wc/store/cart/items?${CONSUMER_KEY}`,
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
      if (data) {
        setBasket(data);
      }
  })();
};
