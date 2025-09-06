import { Outlet } from "react-router";
import Footer from "../components/shared/footer/Footer";
import Navbar from "../components/shared/navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="bg-[#F6F7F8]">
      <div className="mx-[100px] py-6">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
