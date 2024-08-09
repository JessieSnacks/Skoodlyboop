import React from "react";
import { Outlet } from "react-router-dom";

const RootBlogLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default RootBlogLayout;
