import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import Form from "../components/Form";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Form />
    </>
  );
};

export default Layout;
