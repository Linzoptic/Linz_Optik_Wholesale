import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate, useSearchParams } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState<string>("");
  const [userInfo, setUserInfo] = useState<string>("");
  const [_, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const searchHandleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchParams({ product: search });
  };

  const onLogOutHandler = () => {
    localStorage.removeItem("jwt_token");
    navigate("/login");
  };

  useEffect(() => {
      const user = localStorage.getItem("username");
      if(typeof user === 'string'){
        const userName = JSON.parse(user)
        setUserInfo(userName);
      }
  },[])

  return (
    <div className="py-9 px-4 bg-gradient-to-br from-cyan-400 to-cyan-900">
      <div className="block md:flex  items-center justify-between">
        <div>
          <h1 className="text-[14px] text-white underline decoration-solid">
            Welcome:
            <span className="text-[16px] md:text-[20px] ml-2 underline decoration-double">{userInfo}</span>
          </h1>
        </div>
        <div>
          <div>
            <form
              onSubmit={searchHandleSubmit}
              autoComplete="off"
              className="max-w-[500px] flex items-center relative"
            >
              <input
                type="search"
                name="search"
                placeholder="Search"
                className="w-full outline-none rounded-none rounded-tl-xl rounded-bl-xl py-[6px] border border-white"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <input
                type="submit"
                value="Search"
                className="text-white py-[6px] rounded-bl-none rounded-tl-none border border-white"
              />
            </form>
          </div>
        </div>
        <div className="flex items-center text-gray-200 text-xl">
          <div className="flex items-center">
            <AiOutlineShoppingCart />
            <h1 className="text-[16px] font-mono tracking-[-2px]">Cart-({"1"})</h1>
          </div>
          <button 
            className="text-[14px] mx-2 px-[16px] py-[2px] bg-transparent border border-white" 
            onClick={onLogOutHandler}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
