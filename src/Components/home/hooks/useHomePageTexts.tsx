import { useEffect, useState } from "react";
import { httpClient } from "../../../http-client/HttpClient";
import { HOME_PAGE_TEXTS } from "../../../utils/constants/constants";
import { IHomePageTexts } from "../../../utils/interface";

const useHomePageTexts = () => {
  
  const [homePageTexts, setHomePageTexts] = useState<IHomePageTexts>();

  useEffect(() => {
    (async () => {
      const correctData = await httpClient.get(HOME_PAGE_TEXTS);
      if (correctData) {
        setHomePageTexts(correctData.data)
      }
    })();
  }, []);
  
  return {
    homePageTexts,
  };
};

export default useHomePageTexts;
