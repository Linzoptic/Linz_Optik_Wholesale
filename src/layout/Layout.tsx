import { Outlet } from "react-router-dom";
import Footer from "../Components/footer/Footer";
import Header from "../Components/header/Header";

const Layout = () => {
  return (
    <div className="mx-auto">
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Layout;
