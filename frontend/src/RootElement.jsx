import { Outlet } from "react-router-dom";
import { Nav } from "./pages/Nav";

export const RootElement = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};
