import { useEffect, useState } from "react";
import { httpClient } from "../../../../http-client/HttpClient";
import { HEADER_TEXTS } from "../../../../utils/constants/constants";
import { IHeaderTxts } from "../../../../utils/interface";

const useHeaderTexts = () => {
  const [headerTexts, setHeaderTexts] = useState<IHeaderTxts | undefined>();
  useEffect(() => {
    (async () => {
      const correctData = await httpClient.get(HEADER_TEXTS);
      setHeaderTexts({
        logOut: correctData.data[10],
        logoIcon: correctData.data[2],
        notFoundProduct: correctData.data[8],
        phone: correctData.data[3],
        phone1: correctData.data[4],
        phoneIcon: correctData.data[5],
        searchProduct: correctData.data[7],
        searchIcon: correctData.data[6],
        lenguageIcon: correctData.data[1],
        basketIcon: correctData.data[0],
      });
    })();
  }, []);
  return {
    headerTexts,
  };
};

export default useHeaderTexts;
