import axios from "axios";
import React, { useEffect, useState } from "react";
import { CatchError, ISingleProducts } from "../../../../utils/interface";
import { BASE_URL, WC_V3, CONSUMER_KEY, PRODUCTS, UNMOUNT_TIMEOUT_VALUE } from "../../../../utils/constants/constants";

const useSearchProducts = (
  setSearchProduct: React.Dispatch<
    React.SetStateAction<ISingleProducts[] | undefined>
  >,
  search: string
) => {
   
  const [isSrearchLoading, setIsSrearchLoading] = useState<boolean>(false);
  const [searchCatch, setSearchCatch] = useState<CatchError>();

  useEffect(() => {
    setIsSrearchLoading(true);
    const searchTime = setTimeout(async () => {
      try {
        const correncSearch = await axios.get(
          `${BASE_URL}/${WC_V3}/${PRODUCTS}&search=${search}&${CONSUMER_KEY}`
        );
        if (correncSearch.data) {
          setSearchProduct(correncSearch.data);
        }
      } catch (error: any | undefined) {
        setSearchCatch(error);
      } finally {
        setIsSrearchLoading(false);
      }
    }, UNMOUNT_TIMEOUT_VALUE);
    return () => clearTimeout(searchTime);
  }, [search, setSearchProduct]);

  return {
    isSrearchLoading,
    searchCatch,
  };
};

export default useSearchProducts;
