import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./Components/home/components/NotFoundPage";
import Product from "./Components/home/components/Product";
import HomePage from "./Components/home/HomePage";
import LoginPage from "./Components/login/LoginPage";
import LoginEmailPass from "./Components/update/LoginEmailPass";
import UpdatePassword from "./Components/update/UpdatePassword";

function App() {
  return (
    <div className="container mx-auto px-4">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/updatePass" element={<UpdatePassword />} />
        <Route path="/emailPass" element={<LoginEmailPass />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
