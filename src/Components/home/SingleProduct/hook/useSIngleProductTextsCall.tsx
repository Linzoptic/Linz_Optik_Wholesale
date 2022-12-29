import axios from "axios";
import { useEffect, useState } from "react";
import { SINGLE_PRODUCT_TEXTS } from "../../../../Product/constants";
import { SinglePageTextsType } from "../../../../utils/interface";

const useSIngleProductTextsCall = () => {
  const [singleProductTexts, setsingleProductTexts] = useState<
    SinglePageTextsType | undefined
  >();

  useEffect(() => {
    (async () => {
      const correctTexts = await axios.get(SINGLE_PRODUCT_TEXTS);
      if (correctTexts) {
        setsingleProductTexts({
          ADD: correctTexts.data[0],
          addToCart: correctTexts.data[1],
          advantage: correctTexts.data[2],
          count: correctTexts.data[5],
          description: correctTexts.data[7],
          left: correctTexts.data[10],
          rigth: correctTexts.data[14],
          basket_icon: correctTexts.data[4],
          one_product_price: correctTexts.data[12],
          similar_product_title: correctTexts.data[13],
          sph: correctTexts.data[15],
          share: correctTexts.data[16],
          worningIcon: correctTexts.data[19],
          wishList_icon: correctTexts.data[18],
          twitter_icon: correctTexts.data[17],
          fb_icon: correctTexts.data[8],
          instaIcon_icon: correctTexts.data[9],
          linkdin_icon: correctTexts.data[11],
          single_product_currency: correctTexts.data[20],
          go_products: correctTexts.data[21],
          choose: correctTexts.data[23],
        });
      }
    })();
  }, []);

  return {
    singleProductTexts,
  };
};

export default useSIngleProductTextsCall;
