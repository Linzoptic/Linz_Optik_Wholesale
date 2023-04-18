import axios from 'axios';
import {useEffect, useState} from 'react'
import { IAttributeCategory, IAttributes } from '../../../../utils/interface';
import { BASE_URL, QUERY_PARAMS } from '../../../../utils/constants/constants';
import { useSearchParams } from 'react-router-dom';

const useAttributes = () => {

  const [attributes, setAttributes] = useState<IAttributes[]>([]);
  const [searchParams] = useSearchParams ();

  const categoryName = searchParams.get(QUERY_PARAMS.CATEGORY) || QUERY_PARAMS.FRAMES;

   useEffect(() => {
      (async () => {
        const correctData = await axios.get(`${BASE_URL}/${categoryName}/attributes`);
        const attributesArray: IAttributes[] = [];
        if(correctData){
          for (const [key, value] of Object.entries(correctData?.data)) {
            attributesArray.push({
              name: key,
              name_category: (value as IAttributeCategory[]).map((elem) => {
                return {
                  term_id: elem.term_id,
                  name: elem.name,
                  taxonomy: elem.taxonomy,
                  description: elem.description,
                } as IAttributeCategory;
              }),
            });
          }
        }
        setAttributes(attributesArray);
      })();
    }, [categoryName]);
  
   return {
      attributes
   };
};

export default useAttributes;
