import axios from "axios";
import React, { useEffect, useState } from "react";
import { CatchError, SingleProducts } from "../../../utils/interface";
import { BASE_URL, CONSUMER_KEY, PRODUCTS, WC_V3 } from "../../../Product/constants";

const useSimiliarProductsCall = (
  setSimilarProducts: React.Dispatch<
    React.SetStateAction<SingleProducts[] | undefined>
  >,
  singleProduct: SingleProducts | undefined
) => {
  const [SimilarLoading, setSimilarloading] = useState<boolean>(false);
  const [SimilarCatch, setSimilarCatch] = useState<CatchError>();

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
    SimilarLoading,
    SimilarCatch,
  };
};

export default useSimiliarProductsCall;
