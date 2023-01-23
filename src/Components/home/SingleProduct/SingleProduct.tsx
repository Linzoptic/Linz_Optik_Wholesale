import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ISingleProducts,
  IGetTexts,
  ICatchError,
  IVariationAttributes,
} from "../../../utils/interface";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SimilarProducts from "../components/SimilarProducts";
import useSingleProduct from "./hook/useSingleProduct";
import useSimiliarProducts from "./hook/useSimiliarProducts";
import {
  PAGES,
  SINGLE_PRODUCT_TYPES,
  SOCIAL_MEDIA,
  SWIPER_SINGLE_CONFIG,
} from "../../../utils/constants/constants";
import SingleProductSkeleton from "../../../skeleton/SingleProductSkeleton";
import useSIngleProductTexts from "./hook/useSIngleProductTexts";
import GlassesInfo from "./components/GlassesInfo";
import LinsInfo from "./components/LinsInfo";
import { TfiBackLeft } from "react-icons/tfi";
import { AddToCartFunction } from "./components/utils/AddToCartFunction";
import Loader from "../../../utils/loader/Loader";

const SingleProduct = () => {
  const [productCount, setProductCount] = useState<number>(1);
  const [variationAttributes, setVariationAttributes] = useState<IVariationAttributes[]>([]);
  const [addToCartCatchError, setAddToCartCatchError] = useState<ICatchError>();
  const [addToCartLoading, setAddToCartLoading] = useState<boolean>();
  const [singleProduct, setSingleProduct] = useState<ISingleProducts>();
  const [socialIcons, setSocialIcons] = useState<IGetTexts[] | undefined>();
  const [similarProducts, setSimilarProducts] = useState<
    ISingleProducts[] | undefined
  >();
  const { isError, isLoading } = useSingleProduct(setSingleProduct);
  const { similarLoading } = useSimiliarProducts(
    setSimilarProducts,
    singleProduct
  );
  const { singleProductTexts } = useSIngleProductTexts();
  const currency = singleProductTexts?.single_product_currency?.description;
  const choose = singleProductTexts?.choose?.description;

  useEffect(() => {
    const socialMediaTexts: IGetTexts[] | undefined = Object.values({
      ...singleProductTexts,
    });
    const nextSocialMediaTexts = socialMediaTexts.filter((el) =>
      el.name.includes(SOCIAL_MEDIA.SOCIAL)
    );
    setSocialIcons(nextSocialMediaTexts);
  }, [singleProductTexts, setSocialIcons]);

  return (
    <div className="mx-auto">
      {!singleProductTexts?.go_products.description ? (
        <div className="h-[30px] w-[150px] rounded-xl bg-gray-300 animate-pulse"></div>
      ) : (
        <Link
          to={PAGES.HOME}
          className="bg-[#384275] text-white px-3 py-1 rounded-xl flex items-center justify-center w-[150px]"
        >
          {singleProductTexts?.go_products.description}
          <TfiBackLeft />
        </Link>
      )}
      {isError && (
        <div className="text-center">
          <h1>{isError.data.message}</h1>
        </div>
      )}
      {isLoading ? (
        <SingleProductSkeleton />
      ) : (
        <div className="mx-auto grid  grid-cols-1 gap-5 md:grid-cols-2 my-5 border rounded-xl p-2">
          <div className="relative flex items-center justify-center overflow-hidden">
            <Swiper
              {...SWIPER_SINGLE_CONFIG}
              modules={[Autoplay, Pagination, Navigation]}
              className="rounded-xl"
            >
              {singleProduct?.images.map((el, i) => (
                <SwiperSlide key={i} className="bg-[#F1EFE8]">
                  <img
                    src={el?.src}
                    alt="products"
                    className="w-full h-[330px] md:h-[400px] lg:h-[500px] object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            {singleProduct?.stock_status ===
              SINGLE_PRODUCT_TYPES.OUT_OFF_STOCK && (
              <div className="absolute px-3 rounded-full text-center bg-red-500 left-1 top-1  flex items-center justify-center p-1 text-white z-10">
                <p>{singleProductTexts?.notAvailable.description}</p>
              </div>
            )}
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
                <div className="w-8 h-8 flex justify-center items-center border border-sky-900 text-sky-900 rounded-lg cursor-pointer">
                  <img
                    src={singleProductTexts?.wishList_icon.description}
                    alt="wishlistIcon"
                    className="w-4"
                  />
                </div>
              </div>
              <div>
                {singleProduct?.sale_price_string ? (
                  <div className="flex items-center justify-between">
                    <p className="text-[20px] md:text-[25px] font-[600]">
                      {singleProduct?.sale_price_string} <span>{currency}</span>
                    </p>
                    <p className="line-through  text-[16px] md:text-[20px] font-[600]">
                      {singleProduct?.regular_price_string}
                      <span>{currency}</span>
                    </p>
                  </div>
                ) : (
                  <p className="text-[20px] md:text-[25px] font-[600]">
                    {singleProduct?.price_string} <span>{currency}</span>
                  </p>
                )}
              </div>
            </div>
            <div className="mt-2">
              {!!singleProduct?.variation_attributes ? (
                <LinsInfo
                  singleProductTexts={singleProductTexts}
                  variation_attributes={singleProduct?.variation_attributes}
                  choose={choose}
                  setVariationAttributes={setVariationAttributes}
                  variationAttributes={variationAttributes}
                />
              ) : (
                <GlassesInfo singleProductTexts={singleProductTexts} />
              )}
              <div className="mt-2 lg:mt-4 lg:flex justify-between items-center">
                <div>
                  <button
                    disabled={
                      singleProduct?.stock_status ===
                      SINGLE_PRODUCT_TYPES.OUT_OFF_STOCK
                        ? true
                        : false
                    }
                    onClick={() =>
                      AddToCartFunction(
                        singleProduct?.id,
                        productCount,
                        setAddToCartCatchError,
                        setAddToCartLoading,
                        singleProduct?.stock_status,
                        variationAttributes
                      )
                    }
                    className={
                      singleProduct?.stock_status ===
                      SINGLE_PRODUCT_TYPES.OUT_OFF_STOCK
                        ? "flex border-2 font-[600] text-[#a4a8a9] rounded-xl bg-transparent text-[14px] xs:text-[16px] px-5 py-[5px]  items-center justify-center"
                        : "border-2 text-[#384275] font-[600] border-[#384275] rounded-xl bg-transparent text-[14px] xs:text-[16px] px-5 py-[5px] flex items-center justify-center hover:border-cyan-700 cursor-pointer duration-150"
                    }
                  >
                    <p>{singleProductTexts?.addToCart.description}</p>
                    <img
                      src={singleProductTexts?.basket_icon.description}
                      alt="basketIcon"
                      className="mx-2"
                    />
                  </button>
                  {addToCartCatchError?.data.message && (
                    <div
                      className="text-red-500"
                      dangerouslySetInnerHTML={{
                        __html: addToCartCatchError.data.message
                      }}
                    />
                  )}
                  {addToCartLoading && (
                    <div className="flex items-center justify-center">
                      <Loader loading={addToCartLoading} size={20} />
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between mt-2 p-2 border-t border-t-cyan-800 lg:border-0 lg:mb-3">
                  <div>
                    <p className="text-[16px]">
                      {singleProductTexts?.share.description}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    {socialIcons?.map((el, i) => (
                      <img
                        key={i}
                        src={el.description}
                        alt="icon"
                        className="ml-10 cursor-pointer"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {typeof singleProduct?.description === "string" &&
          singleProduct?.description ? (
            <div>
              <span className="text-[24px] border-b-2 border-sky-800 py-2">
                {singleProductTexts?.description.description}
              </span>
              <div
                className="mt-4"
                dangerouslySetInnerHTML={{
                  __html: singleProduct.description,
                }}
              />
            </div>
          ) : null}
          {typeof singleProduct?.short_description === "string" &&
          singleProduct?.short_description ? (
            <div>
              <span className="text-[24px] border-b-2 border-sky-800 py-2">
                {singleProductTexts?.advantage.description}
              </span>
              <div
                className="mt-4"
                dangerouslySetInnerHTML={{
                  __html: singleProduct.short_description,
                }}
              />
            </div>
          ) : null}
        </div>
      )}
      <div>
        <SimilarProducts
          similar_product_title={
            singleProductTexts?.similar_product_title.description
          }
          similarProducts={similarProducts}
          similarLoading={similarLoading}
          currency={currency}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
