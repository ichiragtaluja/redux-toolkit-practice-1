import React from "react";
import { Outlet } from "react-router-dom";
import { NavbarPanel } from "./NavbarPanel";
export const RootLayout = () => {
  return (
    <>
      <NavbarPanel />
      <main>
        <Outlet />
      </main>
    </>
  );
};
