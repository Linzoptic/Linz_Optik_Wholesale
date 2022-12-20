import { useState } from "react";
import { Link } from "react-router-dom";
import { SingleProducts } from "../../../utils/interface";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SimilarProducts from "./SimilarProducts";
import useSingleProductCall from "../../../Product/Hooks/useSingleProductCall";
import useSimiliarProductsCall from "../hooks/useSimiliarProductsCall";
import { PAGES, SWIPER_SINGLE_CONFIG } from "../../../Product/constants";
import SingleProductSkeleton from "../../../skeleton/SingleProductSkeleton";

const SingleProduct = () => {

  const [singleProduct, setSingleProduct] = useState<SingleProducts>();
  const [similarProducts, setSimilarProducts] = useState<SingleProducts[] | undefined>();
  
  const {isError,isLoading} = useSingleProductCall(setSingleProduct);
  const {similarLoading} = useSimiliarProductsCall(setSimilarProducts,singleProduct);

  return (
    <div className="mx-auto">
      <Link to={PAGES.HOME} className="bg-gray-600 text-white px-3 py-1 rounded-xl">
        go home
      </Link>
      {isError && <h1>{isError.response.data.message}</h1>}
      {isLoading ? (
        <SingleProductSkeleton/>
      ) : (
        <div className="mx-auto grid  grid-cols-1 gap-5 md:grid-cols-2 my-5">
          <div className="flex items-center justify-center">
            <Swiper
            {...SWIPER_SINGLE_CONFIG}
            modules={[Autoplay, Pagination, Navigation]}
            >
              {singleProduct?.images.map((el, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={el?.src}
                    alt="products"
                    className="w-full md:h-[300px] lg:h-[400px] object-cover bg-[#b3b3b366]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div>
            <div>
              <div className="flex justify-between">
                <div>
                  <p className="text-[16px]">{singleProduct?.sku}</p>
                  <h1 className="text-[18px] xs:text-[25px] md:text[20px] lg:text-[2rem] font-[700]">
                    {singleProduct?.name}
                  </h1>
                </div>
                <div
                  className="w-8 h-8 flex justify-center items-center border border-sky-900 text-sky-900 rounded-lg cursor-pointer"
                >
                  <AiOutlineHeart size={22} />
                </div>
              </div>
              <div>
                {singleProduct?.sale_price ? (
                  <div className="flex items-center justify-between">
                    <p className="text-[20px] md:text-[25px] font-[600]">
                      {singleProduct?.sale_price} AMD
                    </p>
                    <p className="line-through  text-[16px] md:text-[20px] font-[600]">
                      {singleProduct?.regular_price} AMD
                    </p>
                  </div>
                ) : (
                  <p className="text-[20px] md:text-[25px] font-[600]">
                    {singleProduct?.regular_price} AMD
                  </p>
                )}
              </div>
            </div>
            <div className="mt-10">
              <div className="mt-5 lg:mt-10 lg:flex justify-between  items-center">
                <div>
                  <div
                    className="border-2 text-cyan-900 border-cyan-700 rounded-xl bg-transparent text-[14px] xs:text-[16px] px-5 py-[5px] flex items-center justify-center hover:bg-cyan-700 hover:text-white cursor-pointer duration-150"
                  >
                    Ավելացնել
                    <HiShoppingCart className="mt-[6px] ml-3 w-[20px]" />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2 p-2 border-t border-t-cyan-800 lg:border-0 lg:mb-3">
                  <p className="text-[16px]">Կիսվել:</p>
                  <FaFacebook className="text-black/40 ml-4 lg:ml-4 cursor-pointer hover:text-cyan-700 duration-100" />
                  <FaInstagram className="text-black/40 ml-4 lg:ml-4 cursor-pointer hover:text-cyan-700 duration-100" />
                  <FaTwitter className="text-black/40 ml-4 lg:ml-4 cursor-pointer hover:text-cyan-700 duration-100" />
                  <FaLinkedinIn className="text-black/40 ml-4 lg:ml-4 cursor-pointer hover:text-cyan-700 duration-100" />
                </div>
              </div>
            </div>
          </div>
          {typeof singleProduct?.description === "string" ? (
            <div>
              <div dangerouslySetInnerHTML={{ __html: singleProduct.description }} />
            </div>
          ) : null}
          {typeof singleProduct?.short_description === "string" ? (
            <div className="flex justify-between">
              <div dangerouslySetInnerHTML={{ __html: singleProduct.short_description }} />
            </div>
          ) : null}
        </div>
      )}
      <div>
        <SimilarProducts similarProducts={similarProducts} similarLoading={similarLoading} />
      </div>
    </div>
  );
};

export default SingleProduct;
