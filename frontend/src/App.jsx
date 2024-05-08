import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { RootElement } from "./RootElement";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { RootLogin } from "./components/common-components/RootLogin";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <RootElement />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          element: <RootLogin />,
          children: [
            {
              path: "login",
              element: <Login />,
            },
            {
              path: "signup",
              element: <Signup />,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
