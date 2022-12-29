import axios from "axios";
import { useEffect, useState } from "react";
import { HOME_PAGE_TEXTS } from "../../../Product/constants";
import { HomePageTextsType } from "../../../utils/interface";

const useHomePageTextsCall = () => {
  
  const [homePageTexts, setHomePageTexts] = useState<HomePageTextsType | undefined>();

  useEffect(() => {
    (async () => {
      const correctData = await axios.get(HOME_PAGE_TEXTS);
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

export default useHomePageTextsCall;
