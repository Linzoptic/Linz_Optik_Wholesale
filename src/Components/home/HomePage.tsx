import React, { useState, useEffect } from "react";
import { CatchError, Products } from "../../utils/interface";
import axios from "axios";
import LeftBarMenu from "../leftbar/LeftBarMenu";
import ProductItem from "./ProductItem";
import InformationBlock from "./components/InformationBlock";
import Pagination from "./components/Pagination";
import { useSearchParams } from "react-router-dom";

const HomePage: React.FC = () => {
  const BASE_URL: string = process.env.REACT_APP_BASE_URL as string;

  const [productsData, setProductsData] = useState<Products[]>([]);
  const [totolCount, setTotalCount] = useState<number>(0);
  const [productPerPage] = useState<number>(9);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [isError, setIsError] = useState<CatchError>();
  const [searchParams] = useSearchParams();
  const productQuery = searchParams.get("product") || "";

  useEffect(() => {
    (async () => {
      setIsloading(true);
      try {
        const correctData = await axios.get(
          `${BASE_URL}/wholesale/products?filter[pa_market]=446&per_page=${productPerPage}&page=${currentPage}`
        );
        if (correctData) {
          setProductsData(
            correctData.data.products.filter(
              (el: any) => el.regular_price !== ""
            )
          );
          setTotalCount(correctData.data.total_count);
        }
      } catch (err: any | undefined) {
        setIsError(err);
      } finally {
        setIsloading(false);
      }
    })();
  }, [BASE_URL, productPerPage, currentPage]);

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
          <LeftBarMenu />
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
              <h1 className="text-xl">Loading...</h1>
            ) : (
              productsData
                ?.filter((product) =>
                  product.name
                    .toLowerCase()
                    .includes(productQuery.toLowerCase())
                )
                .map((item, index) => (
                  <ProductItem
                    key={index}
                    id={item.id}
                    name={item.name}
                    regular_price={item.regular_price}
                    sale_price={item.sale_price}
                    image_url={item.image_url}
                    sku={item.sku}
                    stock_status={item.stock_status}
                  />
                ))
            )}
            {isError ? <h1>{isError?.response.data.message}</h1> : ""}
          </div>
      </div>
    </div>
  );
};

export default HomePage;
