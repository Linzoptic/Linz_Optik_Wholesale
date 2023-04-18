import { useEffect,useState } from "react";
import { httpClient } from "../../../../http-client/HttpClient";
import { GET_CATEGORIES } from "../../../../utils/constants/constants";
import { ICatchError, ICategories } from "../../../../utils/interface";

const  useGetCategories = () => {
  
  const [categoriesError, setCategoriesError] = useState<ICatchError>();
  const [categoriesLoading, setCategoriesLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<ICategories[]>([]);
  
  useEffect(() => {
    (async () => {
      setCategoriesLoading(true);
      try {
        const correctData = await httpClient.get(GET_CATEGORIES);
        if (correctData) {
          setCategories(correctData.data)
          setCategoriesLoading(false);
        }
      } catch (err: any | undefined) {
        setCategoriesError(err);
      } finally {
        setCategoriesLoading(false);
      }
    })();
  }, []);
  return {
    categoriesLoading,
    categories,
    categoriesError
  };
}

export default useGetCategories;
