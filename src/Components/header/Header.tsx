import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import { useNavigate, useSearchParams } from "react-router-dom";
import CartItem from "../../cart/CartItem";
import { useAppSelector } from "../../redux/Hook";

const Header = () => {
  const [search, setSearch] = useState<string>("");
  const [userInfo, setUserInfo] = useState<string>("");
  const [openCartDiv, SetOpenCartDiv] = useState<boolean>(false);
  const [, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const selector = useAppSelector((state) => state.AddCart)

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
    if (typeof user === "string") {
      const userName = JSON.parse(user);
      setUserInfo(userName);
    }
  }, []);

  useEffect(() => {
    if(selector.CartList.length === 0){
      SetOpenCartDiv(false)
    }
  },[selector.CartList.length])

  const onRemoveSearch = () => {
    setSearch("");
    setSearchParams({ product: "" });
  };

  return (
    <div className="py-4 md:py-6  px-2 bg-gradient-to-br from-cyan-400 to-cyan-900">
      <div className="block text-center md:flex justify-between relative">
        <div className="flex items-center mb-2 md:mb-0">
          <div>
            <button
              className="text-[13px] mr-2 px-[16px] py-[4px] mt-[8px] bg-transparent border border-white text-white rounded-xl"
              onClick={onLogOutHandler}
            >
              Log Out
            </button>
          </div>
          <div className="hidden md:block">
            <h1 className="text-[15px] text-white underline decoration-solid">
              {userInfo}
            </h1>
          </div>
        </div>
        <div>
          <form
            onSubmit={searchHandleSubmit}
            autoComplete="off"
            className="flex items-center relative"
          >
            <input
              type="text"
              name="search"
              placeholder="Search Product"
              value={search}
              className="w-full outline-none rounded-none rounded-tl-xl rounded-bl-xl py-[4px] md:py-[6px] border placeholder:text-[13px] border-white"
              onChange={(e) => setSearch(e.target.value)}
            />
            <AiOutlineClose
              className="absolute right-20 cursor-pointer"
              onClick={onRemoveSearch}
            />
            <input
              type="submit"
              value="Search"
              className="text-white py-[4px] md:py-[6px] rounded-bl-none rounded-tl-none border border-white cursor-pointer"
            />
          </form>
        </div>
        <div className="cursor-pointer  absolute top-[6px] right-2 md:relative text-white">
          <div onClick={() => SetOpenCartDiv(!openCartDiv)}>
            <div className="flex items-center relative">
              <AiOutlineShoppingCart />
              <h1 className="text-[16px] font-mono tracking-[-2px]">
                Cart-({selector.CartList.length})
              </h1>
              <div>
                <div
                  onClick={(e) => e.stopPropagation()}
                  className={!openCartDiv 
                    ? "hidden" 
                    : "absolute top-8 right-[-16px] p-2 z-40 max-h-screen md:max-h-[800px] border-2 overflow-y-auto bg-[#d6d8d9] flex flex-col items-center cursor-default"
                  }
                >
                  {selector.CartList.length ? <CartItem /> : <div className="w-[240px] md:w-[300px]"><h1>Դեռ զամբյուղը դատարկ է</h1></div>}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
