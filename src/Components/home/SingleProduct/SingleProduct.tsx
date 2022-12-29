import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SingleProducts, TypesTexts } from "../../../utils/interface";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SimilarProducts from "../components/SimilarProducts";
import useSingleProductCall from "./hook/useSingleProductCall";
import useSimiliarProductsCall from "./hook/useSimiliarProductsCall";
import { PAGES, SWIPER_SINGLE_CONFIG } from "../../../Product/constants";
import SingleProductSkeleton from "../../../skeleton/SingleProductSkeleton";
import useSIngleProductTextsCall from "./hook/useSIngleProductTextsCall";
import GlassesComponent from "./components/GlassesComponent";
import LinsComponents from "./components/LinsComponents";
import { TfiBackLeft } from "react-icons/tfi";

const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState<SingleProducts>();
  const [socialIcons, setSocialIcons] = useState<TypesTexts[] | undefined>();
  const [similarProducts, setSimilarProducts] = useState<
    SingleProducts[] | undefined
  >();

  const { isError, isLoading } = useSingleProductCall(setSingleProduct);
  const { similarLoading } = useSimiliarProductsCall(
    setSimilarProducts,
    singleProduct
  );
  const { singleProductTexts } = useSIngleProductTextsCall();
  const currency = singleProductTexts?.single_product_currency?.description; 
  const choose = singleProductTexts?.choose?.description;

  useEffect(() => {
    const values: TypesTexts[] | undefined = Object.values({
      ...singleProductTexts,
    });
    const newValues = values.filter((el) => el.name.includes("social"));
    setSocialIcons(newValues);
  }, [singleProductTexts, setSocialIcons]);

  return (
    <div className="mx-auto">
      <Link
        to={PAGES.HOME}
        className="bg-[#384275] text-white px-3 py-1 rounded-xl flex items-center justify-center w-[150px]"
      >
        {singleProductTexts?.go_products.description}
        <TfiBackLeft/>
      </Link>
      {isError && (
        <div className="text-center">
          <h1>{isError.response.data.message}</h1>
        </div>
      )}
      {isLoading ? (
        <SingleProductSkeleton />
      ) : (
        <div className="mx-auto grid  grid-cols-1 gap-5 md:grid-cols-2 my-5">
          <div className="flex items-center justify-center">
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
                {singleProduct?.sale_price ? (
                  <div className="flex items-center justify-between">
                    <p className="text-[20px] md:text-[25px] font-[600]">
                      {singleProduct?.sale_price} <span>{currency}</span>
                    </p>
                    <p className="line-through  text-[16px] md:text-[20px] font-[600]">
                      {singleProduct?.regular_price} <span>{currency}</span>
                    </p>
                  </div>
                ) : (
                  <p className="text-[20px] md:text-[25px] font-[600]">
                    {singleProduct?.regular_price} <span>{currency}</span>
                  </p>
                )}
              </div>
            </div>
            <div className="mt-2">
              {singleProduct?.type === "variable" ? (
                <LinsComponents
                  singleProductTexts={singleProductTexts}
                  attributes={singleProduct?.attributes}
                  socialIcons={socialIcons}
                  choose={choose}
                />
              ) : (
                <GlassesComponent
                  singleProductTexts={singleProductTexts}
                  socialIcons={socialIcons}
                />
              )}
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
                dangerouslySetInnerHTML={{ __html: singleProduct.description }}
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
