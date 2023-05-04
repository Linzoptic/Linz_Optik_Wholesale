import React, { useEffect, useState } from "react";
import { ICatchError, ISingleProducts } from "../../../../utils/interface";
import { CONSUMER_KEY, PRODUCTS, WC_V3 } from "../../../../utils/constants/constants";
import { httpClient } from "../../../../http-client/HttpClient";

const useSimiliarProducts = (
  setSimilarProducts: React.Dispatch<
    React.SetStateAction<ISingleProducts[] | undefined>
  >,
  singleProduct: ISingleProducts | undefined
) => {
  const [similarLoading, setSimilarloading] = useState<boolean>(false);
  const [similarCatch, setSimilarCatch] = useState<ICatchError>();

  useEffect(() => {
    setSimilarloading(true);
    const productsIds = singleProduct?.related_ids.toString();
    (async () => {
      try {
        const products = await httpClient.get(
          `/${WC_V3}/${PRODUCTS}?include=${productsIds}&${CONSUMER_KEY}`
        );
        if (products) {
          setSimilarProducts(products.data);
        }
      } catch (error: any | null) {
        setSimilarCatch(error);
      } finally {
        setSimilarloading(false);
      }
    })();
  }, [setSimilarProducts, singleProduct?.related_ids]);

  return {
    similarLoading,
    similarCatch,
  };
};

export default useSimiliarProducts;
