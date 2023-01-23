import React, { useState, useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useSearchParams } from "react-router-dom";
import { QUERY_PARAMS } from "../../../utils/constants/constants";
import { IHomePageTexts, IGetTexts } from "../../../utils/interface";

const ChooseComponent = ({
  homePageTexts,
}: {
  homePageTexts: IHomePageTexts | undefined;
}) => {
  const [toggleShow, setToggleShow] = useState<boolean>(false);
  const [sortingBy, setSortingBy] = useState<IGetTexts[] | undefined>();
  const [showInfo, setShowInfo] = useState<IGetTexts[] | undefined>();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const currentQueries = Object.fromEntries([...searchParams]);
  const selectedSort =
    searchParams.get(QUERY_PARAMS.ORDER_BY) || QUERY_PARAMS.DEFAULT_ORDER_BY;

  const handelClick = (elem: string, slug: string) => {
    setToggleShow(!toggleShow);
    setSearchParams({ ...currentQueries, orderby: slug });
  };

  useEffect(() => {
    const sortTypes: IHomePageTexts["a_z"][] | undefined = Object.values({
      ...homePageTexts,
    });
    const correctSort = sortTypes.slice(5, 10);
    setSortingBy(correctSort);
  }, [homePageTexts]);

  useEffect(() => {
    const showSelectedSort = sortingBy?.filter(
      (elem) => elem.slug === selectedSort
    );
    setShowInfo(showSelectedSort);
  }, [selectedSort, sortingBy]);

  return (
    <>
      {sortingBy?.length ? (
        <div className="flex items-center relative ">
          <div className="block text-center md:flex items-center justify-center">
            <div>
              <p className="text-[#094570] font-[600] text-[10px]  uppercase md:text-[12px]">
                {homePageTexts?.sortBy.description}:
              </p>
            </div>
            <div
              className="w-[150px] xs:w-[200px] border-2 border-[#384275] rounded-xl px-3 ml-2 text-[12px] md:text-[14px] cursor-pointer relative"
              onClick={() => setToggleShow(!toggleShow)}
            >
              {showInfo?.map((el, i) => (
                <h1 key={i}>{el.description}</h1>
              ))}
            </div>
          </div>
          <AiFillCaretDown
            size={10}
            className="absolute right-2 top-5 md:top-2"
          />
          <div
            className={
              toggleShow
                ? "absolute w-[100%] px-2 py-3  translate-x-[50%] md:right-32 top-[34px] bg-gray-100 text-[15px] rounded-2xl md:top-5 z-50"
                : "hidden"
            }
          >
            <ul>
              {sortingBy?.map((sort, i) => (
                <li
                  key={i}
                  className="list-none text-center cursor-pointer text-[12px] md:text-[14px]"
                  onClick={() => handelClick(sort.description, sort.slug)}
                >
                  {sort.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="h-[30px] w-[200px] md:w-[320px] bg-gray-300 animate-pulse rounded-xl"></div>
      )}
    </>
  );
};

export default ChooseComponent;
