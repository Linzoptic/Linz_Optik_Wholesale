import { httpClient } from "../../../http-client/HttpClient";
import { CONSUMER_KEY, LOCAL_STORAGE_KEYS } from "../../../utils/constants/constants";
import { IBasketProduct } from "../../../utils/interface";

export const onRemoveBasketItem = async (
  key: string | number,
  setBasket: React.Dispatch<React.SetStateAction<IBasketProduct[]>>,
  setRemoveItemLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setRemoveItemLoading(true);
  const { data } = await httpClient.post(
    `/wc/store/cart/remove-item?${CONSUMER_KEY}`,
    JSON.stringify({
      key,
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
  if (data) {
    setBasket(data.items);
    setRemoveItemLoading(false);
  }
};
