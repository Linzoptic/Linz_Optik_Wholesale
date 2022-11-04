import { Link } from "react-router-dom";
import Header from "../../header/Header";

const Product = () => {
  return (
    <div>
      <Header/>
      <div>
        <Link to="/home">go home</Link>
      </div>
    </div>
  )
}

export default Product;
