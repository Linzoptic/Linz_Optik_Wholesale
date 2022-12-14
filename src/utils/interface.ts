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
