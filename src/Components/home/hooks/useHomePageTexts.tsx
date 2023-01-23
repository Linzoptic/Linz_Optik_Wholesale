import { useEffect, useState } from "react";
import { httpClient } from "../../../http-client/HttpClient";
import { HOME_PAGE_TEXTS } from "../../../utils/constants/constants";
import { IHomePageTexts } from "../../../utils/interface";

const useHomePageTexts = () => {
  
  const [homePageTexts, setHomePageTexts] = useState<IHomePageTexts | undefined>();

  useEffect(() => {
    (async () => {
      const correctData = await httpClient.get(HOME_PAGE_TEXTS);
      if (correctData) {
        setHomePageTexts({
          filter: correctData.data[10],
          filterIcon: correctData.data[11],
          value: correctData.data[22],
          cleaer: correctData.data[9],
          sortBy: correctData.data[18],
          a_z: correctData.data[2],
          z_a: correctData.data[7],
          priceToHigh: correctData.data[4],
          priceToLow: correctData.data[5],
          bySaled: correctData.data[6],
          isAvailable: correctData.data[24],
          notAvailable: correctData.data[21],
          homePage: correctData.data[13],
        });
      }
    })();
  }, []);
  
  return {
    homePageTexts,
  };
};

export default useHomePageTexts;
