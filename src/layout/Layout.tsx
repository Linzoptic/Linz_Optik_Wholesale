import { Outlet } from "react-router-dom";
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
    </div>
  );
};

export default Layout;
