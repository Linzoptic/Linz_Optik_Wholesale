import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import NotFoundPage from "./Components/home/components/NotFoundPage";
import SingleProduct from "./Components/home/SingleProduct/SingleProduct";
import HomePage from "./Components/home/HomePage";
import LoginPage from "./Components/login/LoginPage";
import LoginEmailPass from "./Components/update/LoginEmailPass";
import UpdatePassword from "./Components/update/UpdatePassword";
import Layout from "./layout/Layout";
import { PAGES } from "./utils/constants/constants";
import Basket from "./Components/basket/Basket";
import CheckOut from "./Components/CheckOut/CheckOut";
import { IBasketProduct } from "./utils/interface";
import { MyGlobalContext } from "./Components/home/SingleProduct/components/context/useClobalContext";

function App() {

  const [basket, setBasket] = useState<IBasketProduct[]>([]);
  const [checkoutBasket, setCheckoutBasket] = useState<IBasketProduct[]>([]);
  const [productCount, setProductCount] = useState<number>(1);
  
  return (
    <MyGlobalContext.Provider value={{ productCount, setProductCount }}>
      <div className="container mx-auto px-5">
        <Routes>
          <Route path="/" element={<Layout basketLength={basket.length} />}>
            <Route path="/" element={<Navigate to={PAGES.HOME} />} />
            <Route path={PAGES.HOME} element={<HomePage />} />
            <Route path={PAGES.PRODUCT_ID} element={<SingleProduct />} />
            <Route
              path={PAGES.BASKET}
              element={
                <Basket
                  setBasket={setBasket}
                  basket={basket}
                  setCheckoutBasket={setCheckoutBasket}
                  checkoutBasket={checkoutBasket}
                />
              }
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
          <Route path={PAGES.EMAIL_PASS} element={<LoginEmailPass />} />
          <Route
            path={PAGES.CHECKOUT}
            element={
              <CheckOut
                checkoutBasket={checkoutBasket}
                setCheckoutBasket={setCheckoutBasket}
              />
            }
          />
          <Route path={PAGES.UPDATE_PASS} element={<UpdatePassword />} />
          <Route path={PAGES.LOGIN} element={<LoginPage />} />
        </Routes>
      </div>
    </MyGlobalContext.Provider>
  );
}

export default App;
