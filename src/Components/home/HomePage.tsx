import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import LeftBarMenu from "../leftbar/LeftBarMenu";
import ProductItem from "./ProductItem";
import InformationBlock from "./components/InformationBlock";
import Pagination from "./components/Pagination";
import CartSkeleton from "../../skeleton/CartSkeleton";
import { ERROR_MASSEGE } from "../../Product/constants";
import { TfiFaceSad } from "react-icons/tfi";
import useBaseProductsCall from "./hooks/useBaseProductsCall";
import useHomePageTextsCall from "./hooks/useHomePageTextsCall";

const HomePage: React.FC = () => {
  
  const [URL_PARAMS, setURL_PARAMS] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pricesRange, setPricesRange] = useState<{ [key: string]: number | null }[]>([
    { borderPrice: null, currentPrice: null },
    { borderPrice: null, currenPrice: null },
  ]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    let currentQueries = "";
    const newCurrentQueries = Array.from(searchParams);
    for (const [key, value] of newCurrentQueries) {
      if(key.includes("pa")){
        currentQueries += `&filter[${key}]=${value}`;
      }else{
        currentQueries += ""
      }
    }
    setURL_PARAMS(currentQueries);
  }, [URL_PARAMS, searchParams]); 

  const { isError, isLoading, productsData, totolCountRef, productPerPage,currencyName } =
    useBaseProductsCall(URL_PARAMS, currentPage, setPricesRange);

  const { homePageTexts } = useHomePageTextsCall();

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <InformationBlock totolCountRef={totolCountRef} homePageTexts={homePageTexts}/>
        <div className="hidden sm:block">
          <Pagination
            totolCountRef={totolCountRef}
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
            homePageTexts={homePageTexts}
          />
        </div>
        <div className="sm:hidden flex items-center justify-center">
          <Pagination
            totolCountRef={totolCountRef}
            currentPage={currentPage}
            productPerPage={productPerPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <div className="mt-3 gap-3 grid grid-cols-2 sm:mt-0 sm:grid sm:grid-cols-1 col-span-2 md:grid-cols-2 md:col-span-3 lg:grid-cols-3">
          {isLoading ? (
            <div className="mt-3 gap-3 grid grid-cols-2 sm:mt-0 sm:grid sm:grid-cols-1 col-span-2 md:grid-cols-2 md:col-span-3 lg:grid-cols-3">
              <CartSkeleton count={9} />
            </div>
          ) : !!productsData ? (
            productsData.map((item, index) => (
              <ProductItem
                key={index}
                id={item.id}
                name={item.name}
                regular_price_string={item.regular_price_string}
                sale_price_string={item.sale_price_string}
                image_url={item.image_url}
                sku={item.sku}
                stock_status={item.stock_status}
                notAvailable={homePageTexts?.notAvailable.description}
                currencyName={currencyName}
              />
            ))
          ) : (
            <div className="flex">
              <h1 className="w-full">
                {ERROR_MASSEGE}
                <TfiFaceSad size={24} />
              </h1>
            </div>
          )}
          {isError ? <h1>{isError?.response.data?.message}</h1> : null}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
