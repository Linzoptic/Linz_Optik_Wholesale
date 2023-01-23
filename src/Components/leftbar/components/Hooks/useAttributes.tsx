import axios from 'axios';
import {useEffect, useState} from 'react'
import { AttributeCategory, IAttributes } from '../../../../utils/interface';
import { BASE_URL } from '../../../../utils/constants/constants';

const useAttributes = () => {

  const [attributes, setAttributes] = useState<IAttributes[]>([]);

   useEffect(() => {
      (async () => {
        const correctData = await axios.get(`${BASE_URL}/wholesale/attributes`);
        const attributesArray: IAttributes[] = [];
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

export default useAttributes;
