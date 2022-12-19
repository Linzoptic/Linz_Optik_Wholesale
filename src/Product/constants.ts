export const BASE_URL = process.env.REACT_APP_BASE_URL as string;
export const BASE_PRODUCT = process.env.REACT_APP_BASE_PRODUCT as string;
export const LOGIN_URL = process.env.REACT_APP_LOGIN_URL as string;
export const CONSUMER_KEY = process.env.REACT_APP_CONSUMER_KEY as string;
export const WC_V3 = process.env.REACT_APP_WC_V3 as string;
export const PRODUCTS = process.env.REACT_APP_PRODUCTS as string;

export const PAGES = {
  HOME: "/home",
  LOGIN: "/login",
  EMAIL_PASS: "/emailPass",
  UPDATE_PASS: "/updatePass",
  PRODUCT: "/product",
  PRODUCT_ID: "/product/:id",
};

export const SCREENS = {
  LOPTOP: 1024,
  TABLET: 768,
  SMALL_TABLET: 768,
  MOBAIL: 480,
};

export const COUNTS = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
};

export const SWIPER_SIMILAR_CONFIG = {
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },
  spaceBetween: 20,
  pagination: {
    clickable: true,
    bulletClass: `swiper-pagination-bullet`,
  },
};
export const SWIPER_SINGLE_CONFIG = {
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: false,
  pagination: {
    clickable: true,
  },
  navigation: true,
  className: "mySwiper"
};

export const LOCAL_STORAGE_KEYS = {
  JWT_TOKEN: "jwt_token",
  USERNAME: "username",
};

export const UNMOUNT_TIMEOUT_VALUE = 700;

export const ERROR_MASSEGE = "Տվըալ Ֆիլտրով ապրանք չի գտնվել";
