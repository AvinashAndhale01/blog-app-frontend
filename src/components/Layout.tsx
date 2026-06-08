import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto p-5">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
