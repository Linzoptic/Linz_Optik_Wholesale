export interface IOptionsAttributes {
  name: string;
  stock_quantity: number;
  variation_id: number;
  taxonomy: string;
}

///////////////////////////////////
export interface ISingleProductAttributes {
  name: string;
  taxonomy: string;
  types: {
    name: string;
    options: IOptionsAttributes[];
  }[];
}
//////////////////////////////////

export interface ISingleProducts {
  id: number;
  name: string;
  sku: string;
  images: {
    date_created: string;
    date_modified: string;
    src: string;
  }[];
  regular_price_string?: string;
  regular_price: string;
  sale_price_string?: string;
  sale_price: string;
  price_string: string;
  stock_status: string;
  quantity: number;
  stock_quantity: number;
  description?: string | undefined;
  short_description?: string | undefined;
  related_ids: number[];
  type: string;
  variation_attributes?: ISingleProductAttributes[];
}

//////////////////////////////

export interface IProducts {
  id: number;
  name: string;
  sku: string;
  image_url: string[];
  regular_price_string: string;
  sale_price_string: string;
  stock_status: string;
  notAvailable: string | undefined;
  currencyName: string | undefined;
}

//////////////////////////////
export interface IAttributeCategory {
  term_id: number;
  name: string;
  taxonomy: string;
  description: string;
}

export interface IAttributes {
  name: string;
  name_category: IAttributeCategory[];
}

//////////////////////////////

export interface ICatchError {
  data: {
    message: string;
  };
}

////////////////////////////////

interface IFooterItem {
  id: number;
  description: string;
  name: string;
}

export interface IFooterTexts {
  address: IFooterItem;
  contact: IFooterItem;
  locationIcon: IFooterItem;
  phoneIcon: IFooterItem;
  phone: IFooterItem;
  phone1: IFooterItem;
  timeIcon: IFooterItem;
  time1: IFooterItem;
  time2: IFooterItem;
}

////////////////////////////////

export interface IHeaderTxts {
  logOut: IFooterItem;
  logoIcon: IFooterItem;
  notFoundProduct: IFooterItem;
  phone: IFooterItem;
  phone1: IFooterItem;
  phoneIcon: IFooterItem;
  searchProduct: IFooterItem;
  searchIcon: IFooterItem;
  lenguageIcon: IFooterItem;
  basketIcon: IFooterItem;
}

////////////////////////////////

export interface IGetTexts {
  description: string;
  slug: string;
  name: string;
  link: string
}

export interface IHomePageTexts {
  filter: IGetTexts;
  filterIcon: IGetTexts;
  value: IGetTexts;
  sortBy: IGetTexts;
  cleaer: IGetTexts;
  a_z: IGetTexts;
  z_a: IGetTexts;
  priceToHigh: IGetTexts;
  priceToLow: IGetTexts;
  bySaled: IGetTexts;
  homePage: IGetTexts;
  isAvailable: IGetTexts;
  notAvailable: IGetTexts;
}

//////////////////////////

export interface ISinglePageTexts {
  ADD: IGetTexts;
  addToCart: IGetTexts;
  advantage: IGetTexts;
  count: IGetTexts;
  description: IGetTexts;
  left: IGetTexts;
  rigth: IGetTexts;
  one_product_price: IGetTexts;
  similar_product_title: IGetTexts;
  wishList_icon: IGetTexts;
  basket_icon: IGetTexts;
  worningIcon: IGetTexts;
  share: IGetTexts;
  twitter_icon: IGetTexts;
  fb_icon: IGetTexts;
  instaIcon_icon: IGetTexts;
  linkdin_icon: IGetTexts;
  sph: IGetTexts;
  single_product_currency: IGetTexts;
  go_products: IGetTexts;
  choose: IGetTexts;
  notAvailable: IGetTexts;
}

///////////////////////

export interface IBasketProduct {
  id: number;
  name: string;
  sku: string;
  key: string | number;
  itemKey: string | number;
  images: {
    id: number;
    src: string;
  }[];
  quantity: number;
  count: string | undefined;
  prices: {
    currency_code: string;
    regular_price: string;
    sale_price: string;
  };
  variation?: {
    attribute: string;
    value: string;
  }[];
  setBasket: React.Dispatch<React.SetStateAction<IBasketProduct[]>>;
  onCheckBasketItem: (id: number) => void;
  checkoutBasket: IBasketProduct[];
}

//////////////////////

export interface IBasketText {
  description: string;
}

/////////////////////////

export interface IVariationAttributes {
  attribute: string;
  value: string;
}

//////////////////////////
