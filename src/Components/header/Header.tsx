import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOCAL_STORAGE_KEYS, PAGES } from "../../utils/constants/constants";
import HeaderSkeleton from "../../skeleton/HeaderSkeleton";
import useHeaderTeaxts from "./components/hooks/useHeaderTexts";
import SearchProduct from "./components/SearchProduct";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");
  const [userInfo, setUserInfo] = useState<string>("");
  const basket = useSelector((state: RootState) => state.basket);

  const onLogOutHandler = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.JWT_TOKEN);
    navigate(PAGES.LOGIN);
  };

  useEffect(() => {
    const user = localStorage.getItem(LOCAL_STORAGE_KEYS.USERNAME);
    if (typeof user === "string") {
      const userName = JSON.parse(user);
      setUserInfo(userName);
    }
  },[]);

  const { headerTexts } = useHeaderTeaxts();

  return (
    <>
      {!headerTexts ? (
        <HeaderSkeleton />
      ) : (
        <div className="py-[20px]  px-2 mb-[30px] border-b-2">
          <div className="block md:flex justify-between items-center relative">
            <div className="flex items-center justify-between">
              <div>
                <img src={headerTexts?.logo.description} alt="Logo" />
              </div>
              <div className="flex items-center mb-2 md:mb-0">
                <button
                  className="text-[13px] mr-2 px-[10px] py-[2px] bg-[#F1EFE8] border border-[#F1EFE8] text-[#384275] rounded-xl"
                  onClick={onLogOutHandler}
                >
                  {headerTexts?.toLogOut.description}
                </button>
                <div className="hidden md:flex">
                  <h1 className="text-[15px] text-[#384275] underline bg-[#F1EFE8] p-[2px_10px] rounded-xl">
                    {userInfo}
                  </h1>
                </div>
              </div>
            </div>
            <div className="block md:flex items-center">
              <div className="flex items-center">
                <div className="w-full flex items-center relative">
                  <input
                    type="text"
                    name="search"
                    placeholder={headerTexts?.searchProduct.description}
                    value={search}
                    className="w-full  outline-none bg-[#F1EFE8] rounded-xl py-[4px] px-[30px] border placeholder:text-[13px] border-white relative"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <img
                    src={headerTexts?.searchIcon.description}
                    alt="searchIcon"
                    className="absolute right-2 text-gray-500"
                  />
                </div>
                <div className="flex mx-2">
                  <div className="bg-[#F1EFE8] flex items-center justify-center p-2 rounded-xl ml-1 cursor-pointer">
                    <img
                      src={headerTexts?.globusIcon.description}
                      alt="lenguage"
                      className="w-[26px]"
                    />
                  </div>
                  <Link
                    to={PAGES.BASKET}
                    className="bg-[#F1EFE8] flex items-center justify-center p-2 rounded-xl ml-2 cursor-pointer"
                  >
                    <div className="relative">
                      <img
                        src={headerTexts?.cartIcon.description}
                        alt="basket"
                        className="w-[26px]"
                      />
                      <p className="absolute top-[-15px] right-[-20px] font-[700] text-[13px]">
                        ({basket.length})
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              <div
                className={
                  !!search.length
                    ? "max-h-[700px] overflow-y-auto overflow-x-hidden border border-cyan-400 rounded-lg  scrollbar-thin  scrollbar-thumb-cyan-800 absolute top-[40px]  right-[50%] translate-x-[50%] bg-white z-40 p-2"
                    : "hidden"
                }
              >
                <SearchProduct
                  search={search}
                  setSearch={setSearch}
                  notFoundProduct={headerTexts?.searchNoProduct.description}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
