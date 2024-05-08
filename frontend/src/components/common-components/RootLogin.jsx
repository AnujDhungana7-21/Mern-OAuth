import React from "react";
import { Outlet } from "react-router-dom";
import { LoginNav } from "../../pages/LoginNav";

export const RootLogin = () => {
  return (
    <>
      <LoginNav />
      <Outlet />
    </>
  );
};
