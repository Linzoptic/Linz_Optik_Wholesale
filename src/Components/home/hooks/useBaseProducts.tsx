import React, { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { httpClient } from "../../../http-client/HttpClient";
import { BASE_PRODUCT, QUERY_PARAMS } from "../../../utils/constants/constants";
import { ICatchError, IProducts } from "../../../utils/interface";

const useBaseProducts = (
  URL_PARAMS: string,
  currentPage: number,
  setPricesRange: React.Dispatch<
    React.SetStateAction<{ [key: string]: number | null }[]>
  >
) => {
  const [productsData, setProductsData] = useState<IProducts[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [oerderBySort, setOrderBySort] = useState<string>();
  const [currencyName, setCurrencyName] = useState<string>();
  const [searchParams] = useSearchParams();
  const [isError, setIsError] = useState<ICatchError>();
  const productPerPage: number = 9;
  const totolCountRef = useRef(0);
  const MinPriceQuery =
    searchParams.get(QUERY_PARAMS.MIN_PRICE) || QUERY_PARAMS.DEFAULT_MIN_PRICE;
  const MaxPriceQuery =
    searchParams.get(QUERY_PARAMS.MAX_PRICE) || QUERY_PARAMS.DEFAULT_MAX_PRICE;
  const OrderBy =
    searchParams.get(QUERY_PARAMS.ORDER_BY) || QUERY_PARAMS.DEFAULT_ORDER_BY;
  const categories = searchParams.get(QUERY_PARAMS.CATEGORY) || QUERY_PARAMS.FRAMES;


  useEffect(() => {
    if (OrderBy) {
      setOrderBySort(`&orderby=${OrderBy}`);
    }
  }, [OrderBy]);

  useEffect(() => {
    (async () => {
      setIsloading(true);
      try {
        const correctData = await httpClient.get(
          `/${BASE_PRODUCT}&category=${categories}&per_page=${productPerPage}&page=${currentPage}&filter[min_price]=${MinPriceQuery}&filter[max_price]=${MaxPriceQuery}${URL_PARAMS}${oerderBySort}`
        );
        if (correctData) {
          setProductsData(correctData.data.products);
          totolCountRef.current = correctData.data.total_count;
          setCurrencyName(correctData.data.currency);
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
  }, [
    MaxPriceQuery,
    MinPriceQuery,
    URL_PARAMS,
    setPricesRange,
    currentPage,
    oerderBySort,
    categories,
  ]);

  return {
    productsData,
    isError,
    isLoading,
    totolCountRef,
    productPerPage,
    currencyName,
  };
};

export default useBaseProducts;
