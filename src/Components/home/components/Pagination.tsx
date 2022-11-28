import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Pagination = ({
  totolCount,
  currentPage,
  productPerPage,
  setCurrentPage,
}: {
  totolCount: number;
  currentPage: number;
  productPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) => {

  const paginationCount: number[] = [];
  for (let i = 0; i < Math.ceil(totolCount / productPerPage); i++) {
    paginationCount.push(i + 1);
  }
  const incrementPaginationCount = () => {
    if (currentPage === 1) {
      return false;
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const decrementPaginationCount = () => {
    if (currentPage === paginationCount.length) {
      return false;
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-between mt-[10px] sm:mb-[15px]">
      <div className="flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          {paginationCount.length > 1 && (
            <nav className="flex items-center justify-center text-[#091852]">
              <AiOutlineArrowLeft
                size={13}
                className="cursor-pointer"
                onClick={incrementPaginationCount}
              />
              {paginationCount.map((number, index) => (
                <p
                  style={{
                    color: currentPage === number ? "#000" : "#6e7277",
                    backgroundColor: currentPage === number ? "#d6d7dd" : "",
                  }}
                  onClick={() => setCurrentPage(number)}
                  key={index}
                  className="w-[22px] h-[22px] ml-[3px] flex items-center justify-center text-xs md:text-[14px] font-[600] rounded-full cursor-pointer"
                >
                  {number}
                </p>
              ))}
              <AiOutlineArrowRight
                size={13}
                className="cursor-pointer"
                onClick={decrementPaginationCount}
              />
            </nav>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
