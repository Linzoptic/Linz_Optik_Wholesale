import { useEffect } from "react";
import { httpClient } from "../../../http-client/HttpClient";
import { IBasketText } from "../../../utils/interface";

const useGetText = (
  setStateText: React.Dispatch<React.SetStateAction<IBasketText | undefined>>,
  url: string
) => {
  useEffect(() => {
    (async () => {
      const { data } = await httpClient.get(url);
      if (data) {
        setStateText(data);
      }
    })();
  }, [setStateText, url]);
};

export default useGetText;
