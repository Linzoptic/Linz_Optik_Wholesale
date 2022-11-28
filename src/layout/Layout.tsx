import { Outlet } from "react-router-dom";
import Header from "../Components/header/Header";
import Navbar from "../Components/header/Navbar";
import NavbarInfo from "../Components/header/NavbarInfo";

const Layout = () => {
  return (
    <div className="mx-auto">
      <header>
        <Header />
        <Navbar />
        <NavbarInfo />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
