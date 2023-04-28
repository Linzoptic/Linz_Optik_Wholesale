import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { LOCAL_STORAGE_KEYS, PAGES } from "./utils/constants/constants";
import NotFoundPage from "./Components/home/components/NotFoundPage";
import SingleProduct from "./Components/home/SingleProduct/SingleProduct";
import HomePage from "./Components/home/HomePage";
import LoginPage from "./Components/login/LoginPage";
import LoginEmailPass from "./Components/update/LoginEmailPass";
import UpdatePassword from "./Components/update/UpdatePassword";
import Layout from "./layout/Layout";
import Basket from "./Components/basket/Basket";
import CheckOut from "./Components/CheckOut/CheckOut";
import { Provider } from "react-redux";
import Store from "./store/store";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem(LOCAL_STORAGE_KEYS.JWT_TOKEN)) {
      navigate(PAGES.LOGIN);
    }
  },[navigate]);
  return (
    <div className="container mx-auto px-5">
      <Provider store={Store}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Navigate to={PAGES.HOME} />} />
            <Route path={PAGES.HOME} element={<HomePage />} />
            <Route path={PAGES.PRODUCT_ID} element={<SingleProduct />} />
            <Route path={PAGES.BASKET} element={<Basket />} />
          </Route>
          <Route path={PAGES.EMAIL_PASS} element={<LoginEmailPass />} />
          <Route path={PAGES.CHECKOUT} element={<CheckOut />} />
          <Route path={PAGES.UPDATE_PASS} element={<UpdatePassword />} />
          <Route path={PAGES.LOGIN} element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
