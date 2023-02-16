
const BorderComponent = ({bg}: {bg:string}) => {
  return (
    <div className="flex items-center">
      <div className={`w-[6px] h-[6px] ${bg} rounded-full`}></div>
      <div className={`w-full h-[2px] ${bg}`}></div>
      <div className={`w-[6px] h-[6px] ${bg} rounded-full`}></div>
    </div>
  )
}

export default BorderComponent;
