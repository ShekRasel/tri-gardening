import Footer from "@/components/root/Footer";
import Navbar from "@/components/root/Navbar";
import React, { Fragment } from "react";

const layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <main className="pt-16 lg:pt-18 min-h-screen">{children}</main>
      <Footer />
    </Fragment>
  );
};

export default layout;
