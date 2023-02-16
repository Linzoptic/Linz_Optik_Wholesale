import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import { useGlobalContext } from "../context/useClobalContext";

const IncrementDecrement = ({
  name,
  stockQuantity,
}: {
  name: string | undefined;
  stockQuantity: number | undefined;
}) => {

  const { productCount, setProductCount } = useGlobalContext()
  const Counter = (option: string) => {
    switch (option) {
      case "increment":
        if(stockQuantity && productCount < stockQuantity) {
          setProductCount(productCount + 1);
        }
        break;
      case "dincrement":
        if (productCount === 1) {
          return false;
        } else {
          setProductCount(productCount - 1);
        }
        break;
    }
    return productCount;
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
          {productCount}
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
