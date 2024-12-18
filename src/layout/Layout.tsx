import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
