import { Outlet } from "react-router-dom";
import Footer from "../Components/footer/Footer";
import Header from "../Components/header/Header";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
