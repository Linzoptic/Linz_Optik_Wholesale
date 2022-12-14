import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CatchError, SingleProducts } from "../../../utils/interface";
import ClipLoader from "react-spinners/ClipLoader";

const SearchProduct = ({
  search,
  searchProduct,
  setSearch,
  setSearchProduct,
}: {
  search: string;
  searchProduct: SingleProducts[] | undefined;
  setSearchProduct: React.Dispatch<
    React.SetStateAction<SingleProducts[] | undefined>
  >;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [searchCatch, setSearchCatch] = useState<CatchError>();
  const [isLoading, setisLoading] = useState<boolean>(false);

  useEffect(() => {
    setisLoading(true);
    const searchTime = setTimeout(async () => {
      try {
        const correncSearch = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/wc/v3/products?search=${search}&consumer_key=ck_91dcee2c1dda0dee993904bc2e5f59fe6be3895d&consumer_secret=cs_5c79352efe06c166099b85d537767a28afe619e5`
        );
        if (correncSearch.data) {
          setSearchProduct(correncSearch.data);
        }
      } catch (error: any | undefined) {
        setSearchCatch(error);
      } finally {
        setisLoading(false);
      }
    }, 700);
    return () => clearTimeout(searchTime);
  }, [search, setSearchProduct]);

  return (
    <div>
      {isLoading ? (
        <div className="w-[300px] md:w-[450px] flex items-center justify-center">
          <ClipLoader
            color={"cyan"}
            loading={isLoading}
            size={40}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          {!searchProduct?.length && (
            <div className="w-[300px] md:w-[450px] flex items-center justify-center">
              <h1 className="">Ոչինչ չի գտնվել</h1>
            </div>
          )}
          {searchProduct?.map((product, index) => (
            <Link to={`/product/${product.id}`} key={index}>
              <div
                className="w-[300px] md:w-[450px] flex items-center border border-cyan-100 my-[5px] cursor-pointer hover:scale-105 duration-100"
                onClick={() => setSearch("")}
              >
                <div className="rounded-full">
                  <img
                    src={product.images[0].src}
                    alt=""
                    className="w-[100px] h-[100px] md:w-[180px] md:h-auto object-contain"
                  />
                </div>
                <div className="ml-[20px]">
                  <div>
                    <p className="text-[12px] text-gray-400">{product.sku}</p>
                    <h1 className="text-[14px]">{product.name}</h1>
                  </div>
                  <div>
                    {product?.sale_price ? (
                      <div className="flex justify-between">
                        <p className="text-[12px] lg:text-[14px] font-[600]">
                          {product.sale_price}
                          <span className="text-[12px] lg:text-[14px]">
                            AMD
                          </span>
                        </p>
                        <p className="text-[12px] lg:text-[14px] line-through">
                          {product.regular_price}
                          <span className="text-[12px] lg:text-[14px]">
                            AMD
                          </span>
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-[12px] lg:text-[14px] font-[600]">
                          {product.regular_price}
                          <span className="text-[12px] lg:text-[14px]">
                            {" "}
                            AMD
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
