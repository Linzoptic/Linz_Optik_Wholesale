import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';

const IncrementDecrement = ({name}:{name: string | undefined}) => {
  return (
  <>
   <p>{name}</p>
   <div className="flex items-center justify-between border rounded-xl px-4 py-2">
     <BsPlusLg size={14} />
     <p>1</p>
     <FaMinus size={14} />
   </div>
  </>
  )
};

export default IncrementDecrement;
