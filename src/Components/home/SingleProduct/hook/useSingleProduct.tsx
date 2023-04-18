import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICatchError, ISingleProducts } from "../../../../utils/interface";
import { httpClient } from "../../../../http-client/HttpClient";

function useSingleProduct(
  setSingleProduct: React.Dispatch<
    React.SetStateAction<ISingleProducts | undefined>
  >
) {
  
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [isError, setIsError] = useState<ICatchError>();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      setIsloading(true);
      try {
        const correctData = await httpClient.get(
          `/single/product?id=${id}` 
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
