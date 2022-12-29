import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BASE_URL, CONSUMER_KEY, PRODUCTS, WC_V3 } from "../../../../Product/constants";
import { CatchError, SingleProducts } from "../../../../utils/interface";

function useSingleProductCall(
  setSingleProduct: React.Dispatch<
    React.SetStateAction<SingleProducts | undefined>
  >
) {
  
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [isError, setIsError] = useState<CatchError>();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      setIsloading(true);
      try {
        const correctData = await axios.get(
          `${BASE_URL}/${WC_V3}/${PRODUCTS}/${id}?${CONSUMER_KEY}`
        );
        if (correctData) {
          setSingleProduct(correctData.data);
        }
      } catch (err: any | undefined) {
        setIsError(err);
      } finally {
        setIsloading(false);
      }
    })();
  }, [id, setSingleProduct]);
  return {
    isLoading,
    isError,
  };
}

export default useSingleProductCall;
