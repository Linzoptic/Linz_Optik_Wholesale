import { useEffect, useState } from "react";
import { httpClient } from "../../../../http-client/HttpClient";
import { SINGLE_PRODUCT_TEXTS } from "../../../../utils/constants/constants";
import { ISinglePageTexts } from "../../../../utils/interface";

const useSIngleProductTexts = () => {
  const [singleProductTexts, setsingleProductTexts] = useState<
  ISinglePageTexts | undefined
  >();

  useEffect(() => {
    (async () => {
      const correctTexts = await httpClient.get(SINGLE_PRODUCT_TEXTS);
      if (correctTexts) {
        setsingleProductTexts(correctTexts.data);
      }
    })();
  }, []);

  return {
    singleProductTexts,
  };
};

export default useSIngleProductTexts;
