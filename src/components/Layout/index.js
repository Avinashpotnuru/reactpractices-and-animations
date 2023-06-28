import React from "react";
import Navbar from "../Navbar";
import MobileNavbar from "../MobileNavbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <MobileNavbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
