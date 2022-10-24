import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Header = () => {

  const [ search, setSearch ] = useState<string>('')
  
  return (
    <div className="py-9 px-4 bg-[#1877ba]">
      <div className="block md:flex  items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-4xl tracking-[.2rem] md:tracking-[-.2rem] mb-1 font-">
            Linz<span className="text-blue-900">-</span>
            <span className="text-orange-900 font-bold text-xl md:text-2xl ">Optik</span>
          </h1>
        </div>
        <div className="max-w-[500px] flex items-center relative">
          <div>
            <input
              type="text"
              name="search"
              placeholder="Search"
              className="w-full outline-none rounded-none rounded-tl-xl rounded-bl-xl py-[6px]"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
              />
          </div>
          <div className="cursor-pointer bg-[#abaeb0] text-white py-[8px] px-4 rounded-tr-xl rounded-br-xl">
            <BsSearch size={20} />
          </div>
        </div>
         <div className="flex items-center text-gray-200 text-xl">
            <AiOutlineShoppingCart/>
            <h1>Cart-()</h1>
         </div>
      </div>
    </div>
  );
};

export default Header;
