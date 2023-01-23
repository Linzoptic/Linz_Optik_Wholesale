import axios from "axios";
import {
  BASE_URL,
  CONSUMER_KEY,
  LOCAL_STORAGE_KEYS,
} from "../../../utils/constants/constants";
import { IBasketProduct } from "../../../utils/interface";

export const onRemoveBasketItem = async (
  key: string | number,
  setBasket: React.Dispatch<React.SetStateAction<IBasketProduct[] | undefined>>,
  setRemoveItemLoading: React.Dispatch<
    React.SetStateAction<boolean | undefined>
  >
) => {
  setRemoveItemLoading(true);
  const result = await axios.post(
    `${BASE_URL}/wc/store/cart/remove-item?${CONSUMER_KEY}`,
    JSON.stringify({
      key,
    }),
    {
      headers: {
        Nonce: "b96be96539",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(
          LOCAL_STORAGE_KEYS.JWT_TOKEN
        )}`,
      },
    }
  );
  if (result?.data?.items) {
    setBasket(result.data.items);
    setRemoveItemLoading(false);
  }
};
