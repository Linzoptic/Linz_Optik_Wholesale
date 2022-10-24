import React, { useEffect, useState } from "react";
import { productItems } from "./base";
import axios from "axios";
import Header from "../header/Header";
import LeftBarMenu from "../leftbar/LeftBarMenu";
import Navbar from "../header/Navbar";
import ProductItem from "./ProductItem";
import NavbarInfo from "../header/NavbarInfo";
import Pagination from "./components/Pagination";

const HomePage: React.FC = () => {
  const [data, setData] = useState<string[]>([]);

  // useEffect(()=>{
  //   (async()=>{
  //     const correctData = await axios.get('http://localhost/linzoptic/wp-json/wc/v3/products/?consumer_key=ck_91dcee2c1dda0dee993904bc2e5f59fe6be3895d&consumer_secret=cs_5c79352efe06c166099b85d537767a28afe619e5')
  //     console.log(correctData,"correctData");

  //     if(correctData){
  //       setData(correctData.data)
  //     }
  //   })()
  // },[setData]);
  // console.log(data)

  return (
    <div className="max-w-[1100px] mx-auto">
      <Header />
      <Navbar />
      <NavbarInfo/>
      <Pagination/>
      <div className="sm:grid grid-cols-4">
        <div className="col-span-2 md:col-span-1 md:max-w-[300px] mr-0 sm:mr-3">
          <LeftBarMenu />
        </div>
        <div className="flex flex-col items-center flex-wrap  mt-3 sm:mt-0 sm:grid gap-5 grid-cols-1 col-span-2 md:grid-cols-2 lg:grid-cols-3 justify-between  md:col-span-3">
          {productItems?.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              price_from={item.price_from}
              price_to={item.price_to}
              img={item.img}
              link={item.link}
              code={item.code}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
