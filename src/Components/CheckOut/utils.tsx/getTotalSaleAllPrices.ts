import { IBasketProduct } from "../../../utils/interface";

export const getTotalSaleAllPrices = (
  checkoutBasket: IBasketProduct[],
  deleveriPrice: string | undefined,
) => {
  let totalPrice;
  let allPrices = checkoutBasket?.reduce((acc, elem) => {
    return acc + (+elem.prices.regular_price / 100) * elem.quantity;
  }, 0);
  const sale = checkoutBasket.reduce((acc, elem) => {
    if (elem.prices.sale_price === "0") {
      return acc;
    }
    return acc + (+elem.prices.regular_price - +elem.prices.sale_price) / 100;
  }, 0);
  if (allPrices && deleveriPrice && sale) {
    totalPrice = +allPrices - +sale + +deleveriPrice;
  }else if(deleveriPrice){
    totalPrice = +allPrices + +deleveriPrice
  }

  return { allPrices, sale, totalPrice };
};
