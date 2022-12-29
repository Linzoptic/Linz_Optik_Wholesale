import { useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import NotFoundPage from "./Components/home/components/NotFoundPage";
import Product from "./Components/home/SingleProduct/SingleProduct";
import HomePage from "./Components/home/HomePage";
import LoginPage from "./Components/login/LoginPage";
import LoginEmailPass from "./Components/update/LoginEmailPass";
import UpdatePassword from "./Components/update/UpdatePassword";
import Layout from "./layout/Layout";
import { LOCAL_STORAGE_KEYS, PAGES } from "./Product/constants";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (!localStorage.getItem(LOCAL_STORAGE_KEYS.JWT_TOKEN)) {
        navigate(PAGES.LOGIN);
      }
    })();
  }, [navigate]);

  return (
    <div className="container mx-auto px-5">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Navigate to={PAGES.HOME} />} />
            <Route path={PAGES.HOME} element={<HomePage />} />
            <Route path={PAGES.PRODUCT_ID} element={<Product />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
          <Route path={PAGES.EMAIL_PASS} element={<LoginEmailPass />} />
          <Route path={PAGES.UPDATE_PASS} element={<UpdatePassword />} />
          <Route path={PAGES.LOGIN} element={<LoginPage />} />
        </Routes>
    </div>
  );
}

export default App;
