import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";

const IncrementDecrement = ({ name }: { name: string | undefined }) => {
  const [count, setcount] = useState<number>(1);
  const Counter = (option: string) => {
    switch (option) {
      case "increment":
        setcount(count + 1);
        break;
      case "dincrement":
        if (count === 1) {
          return false;
        } else {
          setcount(count - 1);
        }
        break;
    }
    return count;
  };

  return (
    <>
      <p>{name}</p>
      <div className="flex items-center justify-between border rounded-xl px-4 py-2">
        <FaMinus
          size={14}
          onClick={() => Counter("dincrement")}
          className="cursor-pointer"
        />
        <p className="border-2 p-[2px] rounded-xl shadow-[0_2px_5px_0_#384275] font-[700]">
          {count}
        </p>
        <BsPlusLg
          size={14}
          onClick={() => Counter("increment")}
          className="cursor-pointer"
        />
      </div>
    </>
  );
};

export default IncrementDecrement;
