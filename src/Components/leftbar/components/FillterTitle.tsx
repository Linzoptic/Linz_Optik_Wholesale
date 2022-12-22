import React from 'react';

const FillterTitle = ({title}:{title:string}) => {
  return (
    <div>
      <div className="bg-cyan-900 px-3 py-2">
          <h1 className="text-white uppercase text-[16px]">{title}</h1>
        </div>
    </div>
  )
};

export default FillterTitle;
