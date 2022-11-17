import React, { useState, useEffect } from "react";
import { Products } from "../../utils/interface";
import axios from "axios";
import LeftBarMenu from "../leftbar/LeftBarMenu";
import ProductItem from "./ProductItem";
import InformationBlock from "./components/InformationBlock";
import Pagination from "./components/Pagination";
import { useSearchParams } from "react-router-dom";

const HomePage: React.FC = () => {
  const [productsData, setProductsData] = useState<Products[]>([]);
  const [searchParams] = useSearchParams();
  const productQuery = searchParams.get("product") || "";

  useEffect(() => {
    (async () => {
      const correctData = await axios.get(
        "https://tiknikstyle.10web.site/wp-json/all/products?category=frames"
      );
      if (correctData) {
        setProductsData(correctData.data);
      }
    })();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex flex-col items-center justify-center">
        <InformationBlock
          selectedDatalength={productsData.length}
          productsDataLength={productsData.length}
        />
        <div className="hidden sm:block">
          <Pagination
            productsData={productsData}
            setProductsData={setProductsData}
          />
        </div>
      </div>
      <div className="sm:grid grid-cols-4">
        <div className="col-span-2 md:col-span-1 md:max-w-[300px] mr-0 sm:mr-3">
          <LeftBarMenu />
        </div>
        <div className="sm:hidden flex items-center justify-center">
          <Pagination
            productsData={productsData}
            setProductsData={setProductsData}
          />
        </div>
        <div className="mt-3 gap-3 grid grid-cols-2  sm:mt-0 sm:grid  sm:grid-cols-1 col-span-2 md:grid-cols-2 md:col-span-3 lg:grid-cols-3">
          {productsData.length === 0 ? (
            <h1 className="text-xl">Loading...</h1>
          ) : (
            productsData
              ?.filter((product) =>
                product.name.toLowerCase().includes(productQuery)
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
                />
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
