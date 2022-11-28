import { useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import NotFoundPage from "./Components/home/components/NotFoundPage";
import Product from "./Components/home/components/Product";
import HomePage from "./Components/home/HomePage";
import LoginPage from "./Components/login/LoginPage";
import LoginEmailPass from "./Components/update/LoginEmailPass";
import UpdatePassword from "./Components/update/UpdatePassword";
import Layout from "./layout/Layout";
import Store  from "./redux/Store"; 

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (!localStorage.getItem("jwt_token")) {
        navigate("/login");
      }
    })();
  }, [navigate]);

  return (
    <div className="container mx-auto px-5">
      <Provider store={Store}>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/product/:id" element={<Product />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/emailPass" element={<LoginEmailPass />} />
        <Route path="/updatePass" element={<UpdatePassword />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      </Provider>
    </div>
  );
}

export default App;
