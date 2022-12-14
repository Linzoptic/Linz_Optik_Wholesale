import React, { useState, useEffect } from "react";
import { CatchError, Products } from "../../utils/interface";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import LeftBarMenu from "../leftbar/LeftBarMenu";
import ProductItem from "./ProductItem";
import InformationBlock from "./components/InformationBlock";
import Pagination from "./components/Pagination";
import CartSkeleton from "../../skeleton/CartSkeleton";

const HomePage: React.FC = () => {

  const BASE_URL = process.env.REACT_APP_BASE_URL as string;
  const PRODUCT = process.env.REACT_APP_PRODUCT as string;

  const [productsData, setProductsData] = useState<Products[]>([]);
  const [URL_PARAMS, setURL_PARAMS] = useState<string>("");
  const [totolCount, setTotalCount] = useState<number>(0);
  const [productPerPage] = useState<number>(9);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [isError, setIsError] = useState<CatchError>();
  const [pricesRange, setPricesRange] = useState<
    { [key: string]: number | null }[]
  >([
    { borderPrice: null, currentPrice: null },
    { borderPrice: null, currenPrice: null },
  ]);
  const [searchParams] = useSearchParams();
  const MinPriceQuery = searchParams.get("min_price") || "5000";
  const MaxPriceQuery = searchParams.get("max_price") || "1000000";

  useEffect(() => {
    let correctQueries = "";
    const currentQueries = Array.from(searchParams);
    for (const [key, value] of currentQueries) {
      correctQueries += `&filter[${key}]=${value}`;
    }
    setURL_PARAMS(correctQueries);
  }, [URL_PARAMS, searchParams]);

  useEffect(() => {
    (async () => {
      setIsloading(true);
      try {
        const correctData = await axios.get(
          `${BASE_URL}/${PRODUCT}&per_page=${productPerPage}&page=${currentPage}&filter[min_price]=${MinPriceQuery}&filter[max_price]=${MaxPriceQuery}${URL_PARAMS}`
        );
        if (correctData) {
          setProductsData(correctData.data.products);
          setTotalCount(correctData.data.total_count);
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
    BASE_URL,
    productPerPage,
    currentPage,
    PRODUCT,
    MinPriceQuery,
    MaxPriceQuery,
    URL_PARAMS,
  ]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <InformationBlock
          totolCount={totolCount}
          productPerPage={productPerPage}
        />
        <div className="hidden sm:block">
          <Pagination
            totolCount={totolCount}
            currentPage={currentPage}
            productPerPage={productPerPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      <div className="sm:grid grid-cols-4">
        <div className="col-span-2 md:col-span-1 mr-0 sm:mr-3">
          <LeftBarMenu
            pricesRange={pricesRange}
            setPricesRange={setPricesRange}
          />
        </div>
        <div className="sm:hidden flex items-center justify-center">
          <Pagination
            totolCount={totolCount}
            currentPage={currentPage}
            productPerPage={productPerPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <div className="mt-3 gap-3 grid grid-cols-2 sm:mt-0 sm:grid sm:grid-cols-1 col-span-2 md:grid-cols-2 md:col-span-3 lg:grid-cols-3">
          {isLoading ? (
            <div className="mt-3 gap-3 grid grid-cols-2 sm:mt-0 sm:grid sm:grid-cols-1 col-span-2 md:grid-cols-2 md:col-span-3 lg:grid-cols-3">
              <CartSkeleton count={9}/>
            </div>
          ) : (
            productsData?.map((item, index) => (
              <ProductItem
                key={index}
                id={item.id}
                name={item.name}
                regular_price_string={item.regular_price_string}
                sale_price_string={item.sale_price_string}
                image_url={item.image_url}
                sku={item.sku}
                stock_status={item.stock_status}
              />
            ))
          )}
          {isError ? <h1>{isError?.response.data?.message}</h1> : null}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
