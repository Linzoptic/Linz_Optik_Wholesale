import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1 className="text-[2rem] md:text-[3rem] lg:text-[4rem]">Sorry the page Not Found</h1>
      <Link to="/home" className="bg-gray-300 px-4 py-2">Go Home</Link>
    </div>
  )
};

export default NotFoundPage;
