import { Dispatch, SetStateAction } from "react";

export interface Products {
  id: number;
  name: string;
  price_from: number;
  link: string;
  img: string;
  price_to: number;
  code: string;
};

export const productItems: Products[] = [
  {
    id:1,
    name: "Ray-Ban",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 2,
    name: "Junior VIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 3,
    name: "Junior VIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 4,
    name: "Ray-Ban",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 5,
    name: "Junior VIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 6,
    name: "Ray-Ban",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 7,
    name: "Junior VIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 8,
    name: "Junior VIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 9,
    name: "Junior",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 10,
    name: "Ray-Ban",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 11,
    name: "Junior",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 12,
    name: "VIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ray-Ban Junior VIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ray-Ban Junior VIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ray-Ban Junior VIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ray-Ban Junior VIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ray-Ban Junior VIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ray-Ban Junior VIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ray-Ban Junior VIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ray-Ban Junior VIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ray-Ban Junior VIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ray-Ban Junior VIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ray-Ban Junior VIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ray-Ban Junior VIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ray-Ban Junior VIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ray-Ban Junior VIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ray-Ban Junior VIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ray-Ban Junior VIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ray-Ban Junior VIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ray-Ban Junior VIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ray-Ban Junior VIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "opqwieqopw  opiopiopiopa",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "p[op qeqieoqie poi",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Rp[to portpeotp ea",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Raewrw lrklerka",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ral; l;ksal;d kjta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Rasdasdsadasdsadsadasta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Rasadasadasda",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ray-Banra",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ra",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ista",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ista",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ista",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ista",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ista",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ray-Ban Junior VIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ray-Ban Junior VIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ray-Ban Junior VIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ray-Ban Junior VIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ray-Ban Junior VIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ray-Ban Junior VIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ray-Ban Junior VIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "fdgfdgfdgfdgdsfg",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "dfgdfsggadsffxc",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "jldskjf klds fdsfksdf",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "klj ffdsjkfh dsjfjk f jkdshjsk",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "RVIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ray-BaIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ray-Ban Jundsfa",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Rdssd'ta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ray-Ban Junior VIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 13,
    name: "Ray-Ban Junior VIsta",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
  {
    id: 14,
    name: "Ray-Ban",
    price_from: 88,
    price_to: 250,
    code: "903jdsjfh89",
    img: "https://ae01.alicdn.com/kf/HTB1a3.kIpXXXXcAXFXXq6xXFXXXj.jpg",
    link: "https://Google.com",
  },
];

///////////////////////////////////////////////////////  For Fillter///////////////////

export interface Fillter {
  name: string;
  name_category: { filter_name: string }[];
}

export const filter: Fillter[] = [
  {
    name: "Brand",
    name_category: [
      {
        filter_name: "Ray-Ban Junior VIsta",
      },
      {
        filter_name: "Ray-Ban",
      },
      {
        filter_name: "Junior VIsta",
      },
      {
        filter_name: "VIsta",
      },
      {
        filter_name: "Junior",
      },
    ],
  },
  {
    name: "ITEMS",
    name_category: [
      {
        filter_name: "HEllo",
      },
    ],
  },
  {
    name: "Brand",
    name_category: [
      {
        filter_name: "Ray-Ban Junior VIsta",
      },
      {
        filter_name: "LKSJDAS ALSKDJKL",
      },
      {
        filter_name: "iuew iwoue",
      },
    ],
  },
  {
    name: "Theme",
    name_category: [
      {
        filter_name: "Ban Junior",
      },
    ],
  },
  {
    name: "EDITION",
    name_category: [
      {
        filter_name: "RVIsta",
      },
    ],
  },
  {
    name: "COLLECTION",
    name_category: [
      {
        filter_name: "Rata",
      },
      {
        filter_name: "Ratasadasda",
      },
      {
        filter_name: "Ratafasda",
      },
      {
        filter_name: "Ratasa",
      },
    ],
  },
  {
    name: "GENDER",
    name_category: [
      {
        filter_name: "Woman",
      },
      {
        filter_name: "Man",
      },
      {
        filter_name: "Unisex",
      },
    ],
  },
  {
    name: "AGE RANCE",
    name_category: [
      {
        filter_name: "35-50",
      },
      {
        filter_name: "21-35",
      },
    ],
  },
  {
    name: "BEST SELLER",
    name_category: [
      {
        filter_name: "Best Seller",
      },
    ],
  },
];

//////////////////////////////////////////////////////

export interface NavbarLi {
 name:string ;
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


export interface Frames{
  name: string
};


export const frames: Frames[] = [
  {
    name: "ALAIN MIKLI"
  },
  {
    name: "BURBERRY"
  },
  {
    name: "BVLGARI"
  },
  {
    name: "DOLCE & GABBANA"
  },
  {
    name: "EMPORIO ARMANI"
  },
  {
    name: "GIORGIO ARMANI"
  },
  {
    name: "MICHAEL KORS"
  },
  {
    name: "MIU MIU"
  },
  {
    name: "OAKLEY"
  },
  {
    name: "PERSOL"
  },
  {
    name: "POLO"
  },
  {
    name: "PRADA"
  },
  {
    name: "PRADA LINEA ROSSA"
  },
  {
    name: "RALPH LAUREN"
  },
  {
    name: "RALPH"
  },
  {
    name: "RAY-BAN"
  },
  {
    name: "SFEROFLEX"
  },
  {
    name: "STARK"
  },
  {
    name: "TIFFANY"
  },
  {
    name: "VERSACE"
  },
  {
    name: "VOGUE"
  },
]









 
   
   
      
         
            
            
            
            
            
            
            
            