import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/NavBar";
import Loading from "../../components/Loading";

const Layout = () => {
  const navigation = useNavigation(); //useNavigation() আমাদের কয়েকটা State return করে, তার মধ্যে একটা state হলো loading state, এই লোডিং স্টেটের সাহায্যে আমরা লোডিং এনিমেশন দেখাতে পারি
  
  return (
    <>
      <Navbar />

      <div>
        {navigation.state === "loading" ? <Loading/> : <Outlet/> }
      </div>

      <Footer />
    </>
  );
};

export default Layout;

// Layout is used in the app component