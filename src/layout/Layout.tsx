import { Navigate, Outlet } from "react-router-dom";
import Footer from "../Components/footer/Footer";
import Header from "../Components/header/Header";
import { LOCAL_STORAGE_KEYS, PAGES } from "../utils/constants/constants";

const Layout = () => {

  const token = localStorage.getItem(LOCAL_STORAGE_KEYS.JWT_TOKEN);

  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Header />
      </header>
      <main>
        {token ? <Outlet /> : <Navigate to={PAGES.LOGIN}/>}
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
