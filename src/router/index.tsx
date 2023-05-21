import Home from "@/pages/home";
import React, { lazy } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import { RouteObject } from "./interface";
import errorRouter from "./module/error";

const Login = lazy(() => import("@/pages/login"));
const Layouts = lazy(() => import("@/pages/layout"));

export const rootRouter: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
    meta: {
      requiresAuth: false,
      title: "登录页",
      key: "login",
    },
  },
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        path: "/",
        element: <Navigate to="home" />,
        meta: {
          requiresAuth: true,
          title: "首页",
          key: "home",
        },
      },
      {
        path: "/home",
        element: <Home />,
        meta: {
          requiresAuth: true,
          title: "首页",
          key: "home",
        },
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
  // 错误页面路由
  ...errorRouter,
];

const Router = () => {
  const routes = useRoutes(rootRouter);
  return routes;
};

export default Router;
