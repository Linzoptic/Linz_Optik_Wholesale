import axios from "axios";
import {
  BASE_URL,
  CONSUMER_KEY,
  LOCAL_STORAGE_KEYS,
} from "../../../utils/constants/constants";
import { IBasketProduct } from "../../../utils/interface";

export const onRemoveAllBasket = (
  setBasket: React.Dispatch<React.SetStateAction<IBasketProduct[] | undefined>>
) => {
  (async () => {
      const { data } = await axios.delete(
        `${BASE_URL}/wc/store/cart/items?${CONSUMER_KEY}`,
        {
          headers: {
            Nonce: "b96be96539",
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
  })();
};
