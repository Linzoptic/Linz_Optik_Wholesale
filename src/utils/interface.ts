export interface Products {
  id: number;
  name: string;
  sku: string;
  image_url: string[];
  regular_price: string;
  sale_price: string;
}

///////////////////////////////////////////////////////  For Fillter  ///////////////////

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

//////////////////////////////////////////////////////

export interface NavbarLi {
  name: string;
}

export const navbar: NavbarLi[] = [
  {
    name: "FRAMES",
  },
  {
    name: "ACCESSORIES",
  },
  {
    name: "AFTER SALES",
  },
  {
    name: "MY ACCOUNT",
  },
];

//////////////////////////////////////////////////

export interface Frames {
  name: string;
}

export const frames: Frames[] = [
  {
    name: "ALAIN MIKLI",
  },
  {
    name: "BURBERRY",
  },
  {
    name: "BVLGARI",
  },
  {
    name: "DOLCE & GABBANA",
  },
  {
    name: "EMPORIO ARMANI",
  },
  {
    name: "GIORGIO ARMANI",
  },
  {
    name: "MICHAEL KORS",
  },
  {
    name: "MIU MIU",
  },
  {
    name: "OAKLEY",
  },
  {
    name: "PERSOL",
  },
  {
    name: "POLO",
  },
  {
    name: "PRADA",
  },
  {
    name: "PRADA LINEA ROSSA",
  },
  {
    name: "RALPH LAUREN",
  },
  {
    name: "RALPH",
  },
  {
    name: "RAY-BAN",
  },
  {
    name: "SFEROFLEX",
  },
  {
    name: "STARK",
  },
  {
    name: "TIFFANY",
  },
  {
    name: "VERSACE",
  },
  {
    name: "VOGUE",
  },
];
