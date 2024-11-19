import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/NavBar";

const Layout = () => {
  return (
    <>
      <Navbar />

      <div>
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Layout;
