import { SingleProducts } from "../../../utils/interface";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";
import SimilarProductSkeleton from "../../../skeleton/SimilarProductSkeleton";
import { COUNTS, PAGES, SCREENS, SWIPER_SIMILAR_CONFIG } from "../../../Product/constants";

const SimilarProducts = ({
  similarProducts,
  SimilarLoading,
}: {
  SimilarLoading: boolean;
  similarProducts: SingleProducts[] | undefined;
}) => {
  const SkeletonCount = () => {
    let count: number = 0;
    window.addEventListener("resize", (event) => {
      if (+window.innerWidth > SCREENS.LOPTOP) {
        count = COUNTS.FIVE;
      }
      if (
        +window.innerWidth < SCREENS.LOPTOP &&
        +window.innerWidth > SCREENS.TABLET
      ) {
        count = COUNTS.FOUR;
      }
      if (
        +window.innerWidth < SCREENS.TABLET &&
        +window.innerWidth > SCREENS.SMALL_TABLET
      ) {
        count = COUNTS.TWO;
      }
      if (+window.innerWidth < SCREENS.MOBAIL) {
        count = COUNTS.ONE;
      }
    });
    return count;
  };

  return (
    <div>
      {SimilarLoading ? (
        <div className="flex justify-between">
          <SimilarProductSkeleton count={SkeletonCount()} />
        </div>
      ) : (
        <div>
          <div className="text-center font-bold text-cyan-800 text-[16px] md:text-[25px] lg:text-[30px] my-5">
            <h1>Նմանատիպ Ապրանքներ</h1>
          </div>
          <div>
            <Swiper {...SWIPER_SIMILAR_CONFIG} modules={[Pagination]}>
              {similarProducts?.map((product, i) => (
                <SwiperSlide key={i}>
                  <Link to={`${PAGES.PRODUCT}/${product.id}`}>
                    <div className="flex items-center justify-center border rounded-xl bg-[#b3b3b366] hover:scale-105 duration-150 hover:shadow-[0_5px_30px]">
                      <img
                        src={product?.images[0]?.src}
                        alt="glasses"
                        className="w-40  h-40 object-contain"
                      />
                    </div>
                    <div className="text-center">
                      <p>{product.sku}</p>
                      <h1 className="">{product.name}</h1>
                      <div>
                        {product?.sale_price ? (
                          <p className="text-[14px] md:text-[16px] font-[600]">
                            {product?.sale_price} AMD
                            <span className="line-through ml-3">
                              {product?.regular_price} AMD
                            </span>
                          </p>
                        ) : (
                          <p className="text-[14px] md:text-[16px] font-[600]">
                            {product?.regular_price} AMD
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
