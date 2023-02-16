export const BASE_URL = process.env.REACT_APP_BASE_URL as string;
export const BASE_PRODUCT = process.env.REACT_APP_BASE_PRODUCT as string;
export const LOGIN_URL = process.env.REACT_APP_LOGIN_URL as string;
export const CONSUMER_KEY = process.env.REACT_APP_CONSUMER_KEY as string;
export const WC_V3 = process.env.REACT_APP_WC_V3 as string;
export const PRODUCTS = process.env.REACT_APP_PRODUCTS as string;
export const FOOTER_CALL = process.env.REACT_APP_FOOTER_CALL as string;
export const HEADER_TEXTS = process.env.REACT_APP_HEADER_TEXTS as string;
export const HOME_PAGE_TEXTS = process.env.REACT_APP_HOME_PAGE_TEXTS as string;
export const SINGLE_PRODUCT_TEXTS = process.env.REACT_APP_SINGLE_PRODUCT_TEXTS as string;
export const CHECKOUT_TEXTS = process.env.REACT_APP_CHECKOUT_TEXTS as string;
export const BASKET_TEXTS = process.env.REACT_APP_BASKET_TEXTS as string;
export const SEND_CHEKOUT = process.env.REACT_APP_SEND_CHECKOUT as string;

export const PAGES = {
  HOME: "/home",
  LOGIN: "/login",
  EMAIL_PASS: "/emailPass",
  UPDATE_PASS: "/updatePassword",
  PRODUCT: "/product",
  PRODUCT_ID: "/product/:id",
  BASKET: "/basket",
  CHECKOUT: "/checkout",
};

export const SCREENS = {
  LOPTOP: 1024,
  TABLET: 768,
  SMALL_TABLET: 659,
  MOBAIL: 480,
};

export const SINGLE_PRODUCT_TYPES = {
  VARIABLE: "variable",
  OUT_OFF_STOCK: "outofstock",
  IN_STOCK: "instock",
};

export const SOCIAL_MEDIA = {
  SOCIAL: "social",
  FACEBOOK: "facebook",
  TWITTER: "twitter",
  INSTAGRAM: "instagram",
  LINKEDIN: "linkedin",
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
  className: "mySwiper",
};

export const LOCAL_STORAGE_KEYS = {
  JWT_TOKEN: "jwt_token",
  USERNAME: "username",
  NONCE: "Nonce"
};

export const UNMOUNT_TIMEOUT_VALUE = 700;

export const ERROR_MASSEGE = "Տվըալ Ֆիլտրով ապրանք չի գտնվել";

export const QUERY_PARAMS = {
  MIN_PRICE: "min_price",
  MAX_PRICE: "max_price",
  ORDER_BY: "orderby",
  DEFAULT_MIN_PRICE: "5000",
  DEFAULT_MAX_PRICE: "500000000",
  DEFAULT_ORDER_BY: "by-a-z",
};
