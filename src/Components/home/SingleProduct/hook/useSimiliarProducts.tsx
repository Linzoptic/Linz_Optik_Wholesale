import axios from "axios";
import React, { useEffect, useState } from "react";
import { CatchError, ISingleProducts } from "../../../../utils/interface";
import { BASE_URL, CONSUMER_KEY, PRODUCTS, WC_V3 } from "../../../../utils/constants/constants";

const useSimiliarProducts = (
  setSimilarProducts: React.Dispatch<
    React.SetStateAction<ISingleProducts[] | undefined>
  >,
  singleProduct: ISingleProducts | undefined
) => {
  const [similarLoading, setSimilarloading] = useState<boolean>(false);
  const [similarCatch, setSimilarCatch] = useState<CatchError>();

  useEffect(() => {
    setSimilarloading(true);
    const productsIds = singleProduct?.related_ids.toString();
    (async () => {
      try {
        const products = await axios.get(
          `${BASE_URL}/${WC_V3}/${PRODUCTS}/?include=${productsIds}&${CONSUMER_KEY}`
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
