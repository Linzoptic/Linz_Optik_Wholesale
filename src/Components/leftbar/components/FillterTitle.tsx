
const FillterTitle = ({
  filterIcon, 
  filter 
} : {
  filterIcon: string | undefined,
  filter: string | undefined,
}) => {
  return (
    <div className='border'>
      <div className="px-3 py-2 flex items-center">
          <img src={filterIcon} alt="icon" className='w-5 h-4'/>
          <h1 className="uppercase text-[20px] font-[600] ml-3">{filter}</h1>
        </div>
    </div>
  )
};

export default FillterTitle;
