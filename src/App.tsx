import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NotFoundPage from "./Components/home/components/NotFoundPage";
import Product from "./Components/home/components/Product";
import HomePage from "./Components/home/HomePage";
import LoginPage from "./Components/login/LoginPage";
import LoginEmailPass from "./Components/update/LoginEmailPass";
import UpdatePassword from "./Components/update/UpdatePassword";
import Layout from "./layout/Layout";

function App() {

  const navigate = useNavigate();

useEffect(() => {
  (async () => {
    if(localStorage.getItem("jwt_token")){
      navigate("/home")
    }else{
      navigate("/login")
    }
  })()
},[]);

  return (
    <div className="container mx-auto px-4">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
          <Route path="/emailPass" element={<LoginEmailPass />} />
          <Route path="/updatePass" element={<UpdatePassword />} />
          <Route path="/login"  element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
