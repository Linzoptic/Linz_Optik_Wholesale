import axios from 'axios';
import {useEffect, useState} from 'react'
import { AttributeCategory, Attributes } from '../../utils/interface';
import { BASE_URL } from '../constants';

const useAttributesCall = () => {

  const [attributes, setAttributes] = useState<Attributes[]>([]);

   useEffect(() => {
      (async () => {
        const correctData = await axios.get(`${BASE_URL}/wholesale/attributes`);
        const attributesArray: Attributes[] = [];
        if(correctData){
          for (const [key, value] of Object.entries(correctData?.data)) {
            attributesArray.push({
              name: key,
              name_category: (value as AttributeCategory[]).map((elem) => {
                return {
                  term_id: elem.term_id,
                  name: elem.name,
                  taxonomy: elem.taxonomy,
                  description: elem.description,
                } as AttributeCategory;
              }),
            });
          }
        }
        setAttributes(attributesArray);
      })();
    }, []);
  
   return {
      attributes
   };
};

export default useAttributesCall;
