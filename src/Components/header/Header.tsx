import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import { LOCAL_STORAGE_KEYS, PAGES } from "../../Product/constants";
import SearchProduct from "./components/SearchProduct";

const Header = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");
  const [userInfo, setUserInfo] = useState<string>("");
  

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
  }, []);
 
  return (
    <div className="py-[20px]  px-2 bg-gray-300 mb-[30px]">
      <div className="block md:flex justify-between items-center relative">
        <div className="flex items-center">
          <div>
            <img src={logo} alt="Logo" />
          </div>
          <div className="flex items-center mb-2 md:mb-0">
            <button
              className="text-[13px] mr-2 px-[10px] py-[2px] bg-transparent border border-[#384275] text-[#384275] rounded-xl"
              onClick={onLogOutHandler}
            >
              Log Out
            </button>
            <div className="hidden md:flex">
              <h1 className="text-[15px] text-[#384275] underline">
                {userInfo}
              </h1>
            </div>
          </div>
        </div>
        <div className="block md:flex items-center">
          <form
            autoComplete="off"
            className="flex items-center relative"
          >
            <input
              type="text"
              name="search"
              placeholder="Փնտրել ապրանքը"
              value={search}
              className="w-full md:w-[300px] outline-none  rounded-xl py-[2px] px-[30px] border placeholder:text-[13px] border-white relative"
              onChange={(e) => setSearch(e.target.value)}
            />
            <AiOutlineSearch
              size={20}
              className="absolute right-2 text-gray-500"
            />
          </form>
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
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
