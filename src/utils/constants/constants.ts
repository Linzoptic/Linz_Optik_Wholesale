export const BASE_URL = process.env.REACT_APP_BASE_URL as string;
export const CONSUMER_KEY = process.env.REACT_APP_CONSUMER_KEY as string;

export const LOGIN_URL = "/jwt-auth/v1/token";
export const WC_V3 = "wc/v3";
export const BASE_PRODUCT = "wholesale/products?filter[pa_market]=446";
export const PRODUCTS = "products?attribute=38&attribute_term=446";
export const FOOTER_CALL = `${process.env.REACT_APP_BASE_URL}/footer/texts`;
export const HOME_PAGE_TEXTS = `${process.env.REACT_APP_BASE_URL}/shop_page/texts`;
export const SINGLE_PRODUCT_TEXTS = `${process.env.REACT_APP_BASE_URL}/single_product/texts`;
export const HEADER_TEXTS = `${process.env.REACT_APP_BASE_URL}/header/texts`;
export const SEND_CHECKOUT = "/wc/v3/orders?";
export const CHECKOUT_TEXTS = `${process.env.REACT_APP_BASE_URL}/checkout/texts`;
export const BASKET_TEXTS = `${process.env.REACT_APP_BASE_URL}/cart_page/texts`;
export const GET_CATEGORIES = `${process.env.REACT_APP_BASE_URL}/product/categories`;

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
  NONCE: "Nonce",
};

export const UNMOUNT_TIMEOUT_VALUE = 700;

export const ERROR_MASSEGE = {
  ThisItemIsAreadyInCart:
    "This item is already in the cart and its quantity cannot be edited",
  NoMatchingVariation: "No matching variation found.",
};

export const QUERY_PARAMS = {
  MIN_PRICE: "min_price",
  MAX_PRICE: "max_price",
  ORDER_BY: "orderby",
  DEFAULT_MIN_PRICE: "5000",
  DEFAULT_MAX_PRICE: "500000000",
  DEFAULT_ORDER_BY: "by-a-z",
  CATEGORY: "category",
  FRAMES: "frames",
};
