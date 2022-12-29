import { SingleProducts } from "../../../utils/interface";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";
import SimilarProductSkeleton from "../../../skeleton/SimilarProductSkeleton";
import { COUNTS, PAGES, SCREENS, SWIPER_SIMILAR_CONFIG } from "../../../Product/constants";

const SimilarProducts = ({
  similarProducts,
  similarLoading,
  similar_product_title,
  currency,
}: {
  similarLoading: boolean;
  similarProducts: SingleProducts[] | undefined;
  similar_product_title: string | undefined;
  currency: string | undefined;
}) => {

  const SkeletonCount  = (): number => {
    let count: number = 0;
      if (window.innerWidth >= SCREENS.LOPTOP) {
        count = COUNTS.FOUR; 
      }
      if (
        window.innerWidth < SCREENS.LOPTOP &&
        window.innerWidth > SCREENS.TABLET
      ) {
        count = COUNTS.TWO;
      }
      if (window.innerWidth < SCREENS.TABLET) {
        count = COUNTS.ONE;
      }
    return count;
  };
  
  return (
    <div>
      {similarLoading ? (
        <div className="flex justify-between">
          <SimilarProductSkeleton count={SkeletonCount()} />
        </div>
      ) : (
        <div>
          <div className="text-center font-bold text-cyan-800 text-[16px] md:text-[25px] lg:text-[30px] my-5">
            <h1>{similar_product_title}</h1>
          </div>
          <div className="pt-3">
            <Swiper {...SWIPER_SIMILAR_CONFIG} modules={[Pagination]}>
              {similarProducts?.map((product, i) => (
                <SwiperSlide key={i} className="p-3">
                  <Link to={`${PAGES.PRODUCT}/${product.id}`}>
                    <div className="flex items-center justify-center border rounded-xl bg-[#F1EFE8]  duration-150 hover:shadow-[0_5px_20px]">
                      <img
                        src={product?.images[0]?.src}
                        alt="glasses"
                        className="max-w-40 h-40 object-contain"
                      />
                    </div>
                    <div className="text-center">
                      <p>{product.sku}</p>
                      <h1 className="">{product.name}</h1>
                      <div>
                        {product?.sale_price ? (
                          <p className="text-[14px] md:text-[16px] font-[600]">
                            {product?.sale_price} <span>{currency}</span>
                            <span className="line-through ml-3">
                              {product?.regular_price} <span>{currency}</span>
                            </span>
                          </p>
                        ) : (
                          <p className="text-[14px] md:text-[16px] font-[600]">
                            {product?.regular_price} <span>{currency}</span>
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimilarProducts;
