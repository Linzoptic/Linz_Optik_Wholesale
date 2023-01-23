import axios from "axios";
import { useEffect, useState } from "react";
import { httpClient } from "../../../http-client/HttpClient";
import { BASE_URL } from "../../../utils/constants/constants";
import { IBasketText } from "../../../utils/interface";

const useBasketText = () => {

   const [basketText, setBasketText] = useState<IBasketText[] | undefined>();

   useEffect(() => {
      (async() => {
         const { data } = await httpClient.get(`/wp/v2/cart_page_texts`)
         if(data){
            setBasketText(data)
         }
      })()
   },[])
  return {
   basketText,
  };
};

export default useBasketText;
