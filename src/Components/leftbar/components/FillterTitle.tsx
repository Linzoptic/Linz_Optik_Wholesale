import React from 'react';
import { IHomePageTexts } from '../../../utils/interface';

const FillterTitle = ({
  filterIcon, 
  filter 
} : {
  filterIcon: IHomePageTexts['filterIcon'] | undefined,
  filter: IHomePageTexts['filter'] | undefined,
}) => {
  return (
    <div className='border'>
      <div className="px-3 py-2 flex items-center">
          <img src={filterIcon?.description} alt="icon" className='w-5 h-4'/>
          <h1 className="uppercase text-[20px] font-[600] ml-3">{filter?.description}</h1>
        </div>
    </div>
  )
};

export default FillterTitle;
