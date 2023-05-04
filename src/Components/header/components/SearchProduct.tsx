import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ISingleProducts } from "../../../utils/interface";
import useSearchProducts from "./hooks/useSearchProducts";
import { PAGES } from "../../../utils/constants/constants";
import Loader from "../../../utils/loader/Loader";

const SearchProduct = ({
  search,
  notFoundProduct,
  setSearch,
  currency,
}: {
  search: string;
  notFoundProduct: string | undefined;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  currency: string | undefined;
}) => {

  const [ searchProduct, setSearchProduct ] = useState<ISingleProducts[]>();

  const {searchCatch, isSrearchLoading} = useSearchProducts(setSearchProduct,search)

  return (
    <div>
      {searchCatch && <h1>{searchCatch.data.message}</h1>}
      {isSrearchLoading ? (
        <div className="w-[300px] md:w-[450px] flex items-center justify-center">
         <Loader loading={isSrearchLoading} size={30}/>
        </div>
      ) : (
        <div>
          {!searchProduct?.length && (
            <div className="w-[300px] md:w-[450px] flex items-center justify-center">
              <h1 className="">{notFoundProduct}</h1>
            </div>
          )}
          {searchProduct?.map((product, index) => (
            <Link to={`${PAGES.PRODUCT}/${product.id}`} key={index}>
              <div
                className="w-[300px] md:w-[450px] flex items-center border border-cyan-100 my-[5px] cursor-pointer hover:scale-105 duration-100"
                onClick={() => setSearch("")}
              >
                <div className="rounded-full">
                  <img
                    src={product?.images[0]?.src}
                    alt="galsees"
                    className="w-[100px] h-[100px] md:w-[180px] md:h-auto object-contain"
                  />
                </div>
                <div className="ml-[20px]">
                  <div>
                    <p className="text-[12px] text-gray-400">{product?.sku}</p>
                    <h1 className="text-[14px]">{product?.name}</h1>
                  </div>
                  <div>
                    {product?.sale_price ? (
                      <div className="flex items-center justify-between">
                        <p className="text-[12px] lg:text-[14px] font-[600]">
                          {product?.sale_price}
                          <span className="text-[12px] lg:text-[14px] ml-[2px]">
                            {currency}
                          </span>
                        </p>
                        <p className="text-[12px] lg:text-[14px] line-through mx-2">
                          {product?.regular_price}
                          <span className="text-[12px] lg:text-[14px] ml-[2px]">
                            {currency}
                          </span>
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-[12px] lg:text-[14px] font-[600]">
                          {product?.regular_price}
                          <span className="text-[12px] lg:text-[14px] ml-[2px]">
                            {currency}
                          </span>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchProduct;
