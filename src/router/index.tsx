import Home from "@/pages/home";
import React, { lazy, FC } from "react";
import { useRoutes, Navigate } from "react-router-dom";

const Login = lazy(() => import("@/pages/login"));
const Layouts = lazy(() => import("@/pages/layout"));

const RouterConfig: FC = () => {
  return useRoutes([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Layouts />,
      children: [
        {
          path: "/",
          element: <Navigate to="home" />,
        },
        {
          path: "/home",
          element: <Home />,
        },
      ],
    },
  ]);
};

export default RouterConfig;
