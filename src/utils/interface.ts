export interface Products {
  id: number;
  name: string;
  sku: string;
  image_url: string[];
  regular_price_string: string;
  sale_price_string: string;
  stock_status: string;
}

////////////////////////////

export interface SingleProductAttributes {
  id: number;
  name: string;
  options: string[];
}


export interface SingleProducts {
  id: number;
  name: string;
  sku: string;
  images: {
    date_created:string;
    date_modified:string;
    src:string;
  }[];
  regular_price: string;
  sale_price: string;
  stock_status: string;
  quantity: number;
  description?: string | undefined;
  short_description?: string | undefined;
  related_ids: number[];
  type: string;
  attributes?: SingleProductAttributes[];
}

//////////////////////////////

export interface Products {
  id: number;
  name: string;
  sku: string;
  image_url: string[];
  regular_price_string: string;
  sale_price_string: string;
  stock_status: string;
  notAvailable:string | undefined;
  currencyName: string | undefined;
}

//////////////////////////////
export interface AttributeCategory {
  term_id: number;
  name: string;
  taxonomy: string;
  description:string;
}

export interface Attributes {
  name: string;
  name_category: AttributeCategory[];
}

//////////////////////////////

export interface CatchError {
  response: {
    data: {
      message: string;
    }
  };
};


////////////////////////////////

interface FooterItemType {
  id: number;
  description: string;
  name: string;
};

export interface FooterType {
  address: FooterItemType,
  contact: FooterItemType,
  locationIcon: FooterItemType,
  phoneIcon: FooterItemType,
  phone: FooterItemType,
  phone1: FooterItemType,
  timeIcon: FooterItemType,
  time1: FooterItemType,
  time2: FooterItemType,
}

////////////////////////////////

export interface TypesTexts {
  description: string;
  slug: string;
  name: string;
}

export interface HomePageTextsType {
  filter: TypesTexts;
  filterIcon: TypesTexts;
  value: TypesTexts;
  sortBy: TypesTexts;
  cleaer: TypesTexts;
  a_z: TypesTexts;
  z_a: TypesTexts;
  priceToHigh: TypesTexts;
  priceToLow: TypesTexts;
  bySaled: TypesTexts;
  homePage: TypesTexts;
  isAvailable: TypesTexts;
  notAvailable: TypesTexts;
}

//////////////////////////

export interface SinglePageTextsType {
  ADD: TypesTexts;
  addToCart: TypesTexts;
  advantage: TypesTexts;
  count: TypesTexts;
  description: TypesTexts;
  left: TypesTexts;
  rigth: TypesTexts;
  one_product_price: TypesTexts;
  similar_product_title: TypesTexts;
  wishList_icon:TypesTexts;
  basket_icon:TypesTexts;
  worningIcon:TypesTexts;
  share: TypesTexts;
  twitter_icon:TypesTexts;
  fb_icon:TypesTexts;
  instaIcon_icon:TypesTexts;
  linkdin_icon:TypesTexts;
  sph:TypesTexts;
  single_product_currency:TypesTexts;
  go_products:TypesTexts;
  choose:TypesTexts;
}

