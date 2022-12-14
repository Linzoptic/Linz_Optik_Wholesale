import { SingleProducts } from "../../../utils/interface";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";
import SameProductSkeleton from "../../../skeleton/SameProductSkeleton";


const SameProducts = ({
  sameProducts,
  Loading,
}: {
  Loading: boolean;
  sameProducts: SingleProducts[] | undefined;
}) => {

  const SkeletonCount = () => {
    let count:number = 0;
    window.addEventListener("resize", (event) => {
      if (+window.innerWidth > 1024) {
        count = 5;
      }
      if (+window.innerWidth  < 1024 && +window.innerWidth  > 768){
        count = 4;
      }
      if (+window.innerWidth  < 768 && +window.innerWidth  > 640){
        count = 2;
      }
      if (+window.innerWidth  < 480){
        count = 1;
      }
    })
    return count; 
  }

  return (
    <div>
      {Loading ? (
        <div className="flex justify-between">
          <SameProductSkeleton count={SkeletonCount()} />
        </div>
      ) : (
        <div>
          <div className="text-center font-bold text-cyan-800 text-[16px] md:text-[25px] lg:text-[30px] my-5">
            <h1>Նմանատիպ Ապրանքներ</h1>
          </div>
          <div>
            <Swiper
              breakpoints={{
                500: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
              spaceBetween={20}
              pagination={{
                clickable: true,
                bulletClass: `swiper-pagination-bullet`,
              }}
              modules={[Pagination]}
            >
              {sameProducts?.map((product, i) => (
                <SwiperSlide key={i}>
                  <Link to={`/product/${product.id}`}>
                    <div className="flex items-center justify-center border rounded-xl bg-[#b3b3b366]">
                      <img
                        src={product.images[0].src}
                        alt=""
                        className="w-40  h-40 object-contain"
                      />
                    </div>
                    <div className="text-center">
                      <p>{product.sku}</p>
                      <h1 className="">{product.name}</h1>
                      <div>
                        {product?.sale_price ? (
                          <p className="text-[14px] md:text-[16px] font-[600]">
                            {product.sale_price} AMD
                            <span className="line-through ml-3">
                              {product.regular_price} AMD
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

export default SameProducts;
