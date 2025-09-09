import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppLayout = ({ children, bgtransparent }) => {
  return (
    <div className="w-full">
      <Navbar bgtransparent={bgtransparent} />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
