import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { BASE_PRODUCT, BASE_URL } from "../../../Product/constants";
import { CatchError, Products } from "../../../utils/interface";

function useBaseProductsCall(
  URL_PARAMS: string,
  currentPage: number,
  setPricesRange: React.Dispatch<
    React.SetStateAction<
      {
        [key: string]: number | null;
      }[]
    >
  >
) {
  const [productsData, setProductsData] = useState<Products[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const [isError, setIsError] = useState<CatchError>();
  const productPerPage: number = 9;
  const totolCountRef = useRef(0);
  const MinPriceQuery = searchParams.get("min_price") || "5000";
  const MaxPriceQuery = searchParams.get("max_price") || "1000000";

  useEffect(() => {
    (async () => {
      setIsloading(true);
      try {
        const correctData = await axios.get(
          `${BASE_URL}/${BASE_PRODUCT}&per_page=${productPerPage}&page=${currentPage}&filter[min_price]=${MinPriceQuery}&filter[max_price]=${MaxPriceQuery}${URL_PARAMS}`
        );
        if (correctData) {
          setProductsData(correctData.data.products);
          totolCountRef.current = correctData.data.total_count;
          setPricesRange([
            {
              borderPrice: correctData.data.min_price,
              currentPrice: correctData.data.min_price,
            },
            {
              borderPrice: correctData.data.max_price,
              currentPrice: correctData.data.max_price,
            },
          ]);
        }
      } catch (err: any | undefined) {
        setIsError(err);
      } finally {
        setIsloading(false);
      }
    })();
  }, [MaxPriceQuery, MinPriceQuery, URL_PARAMS, setPricesRange, currentPage]);

  return {
    productsData,
    isError,
    isLoading,
    totolCountRef,
    productPerPage,
  };
}

export default useBaseProductsCall;
