import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../../utils/constants/constants";
import { CatchError, ISingleProducts } from "../../../../utils/interface";

function useSingleProduct(
  setSingleProduct: React.Dispatch<
    React.SetStateAction<ISingleProducts | undefined>
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
          `${BASE_URL}/single/product?id=${id}` 
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

export default useSingleProduct;
