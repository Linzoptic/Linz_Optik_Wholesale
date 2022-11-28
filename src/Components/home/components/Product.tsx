import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CatchError, SingleProducts } from "../../../utils/interface";
import { useAppDispach } from "../../../redux/Hook";
import { AddCart } from "../../../redux/CartSlice";
import { FaTwitter,FaFacebook,FaLinkedinIn,FaInstagram} from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Product = () => {
  const BASE_URL: string = process.env.REACT_APP_BASE_URL as string;

  const [singleProduct, setSingleProduct] = useState<SingleProducts>();
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [isError, setIsError] = useState<CatchError>();
  const { id } = useParams();
  const dispatch = useAppDispach();

  useEffect(() => {
    (async () => {
      setIsloading(true);
      try {
        const correctData = await axios.get(
          `${BASE_URL}/${process.env.REACT_APP_WC_V3}/products/${id}?${process.env.REACT_APP_CONSUMER_KEY}`
        );
        if (correctData) {
          setSingleProduct(correctData.data);
        }
      } catch (err: any | undefined) {
        setIsError(err);
      } finally {
        setIsloading(false);
      }
    })();
  }, [BASE_URL, id]);

  const addToFavorites = () => {
    console.log("there will be favorite products call");
  };

  return (
    <div className="mx-auto">
      <Link to="/home" className="bg-cyan-800 text-white px-3 py-1 rounded-xl">
        go home
      </Link>
      {isError && <h1>{isError.response.data.message}</h1>}
      {isLoading ? (
        <div className="text-center">
          <h1 className="font-[700] text-[20px] md:text-[25px] lg:text-[30px]">
            Loading ...
          </h1>
        </div>
      ) : (
        <div className="max-2-[1000px] mx-auto grid  grid-cols-1 gap-5 md:grid-cols-2 my-5">
          <div className="flex items-center justify-center">
            <Swiper
              spaceBetween={10}
              centeredSlides={true}
              autoplay={false}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {singleProduct?.images.map((el, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={el.src}
                    alt="#"
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
                  onClick={addToFavorites}
                  className="w-8 h-8 flex justify-center items-center border border-sky-900 text-sky-900 rounded-lg cursor-pointer"
                >
                  <AiOutlineHeart size={22} />
                </div>
              </div>
              {singleProduct?.sale_price ? (
                <p className="text-[20px] md:text-[25px] font-[600]">
                  {singleProduct.sale_price} AMD
                  <span className="line-through ml-3">
                    {singleProduct.regular_price} AMD
                  </span>
                </p>
              ) : (
                <p className="text-[20px] md:text-[25px] font-[600]">
                  {singleProduct?.regular_price} AMD
                </p>
              )}
            </div>
            <div className="mt-10">
              <div className="mt-5 lg:mt-10 lg:flex justify-between  items-center">
                <div>
                  <div 
                    onClick={() => dispatch(AddCart(singleProduct as SingleProducts))}
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
        </div>
      )}
    </div>
  );
};

export default Product;
