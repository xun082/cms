import React, { lazy } from "react";
import { RouteObject } from "../interface";
const NotFound = lazy(() => import("@/pages/error"));

const errorRouter: Array<RouteObject> = [
  {
    path: "/404",
    element: (
      <NotFound
        code={404}
        title={404}
        subTitle="Sorry, the page you visited does not exist."
      />
    ),
    meta: {
      requiresAuth: false,
      title: "404页面",
      key: "404",
    },
  },
  {
    path: "/403",
    element: (
      <NotFound
        code={403}
        title={403}
        subTitle="Sorry, you are not authorized to access this page."
      />
    ),
    meta: {
      requiresAuth: true,
      title: "403页面",
      key: "403",
    },
  },
  {
    path: "/500",
    element: (
      <NotFound
        code={500}
        title={500}
        subTitle="Sorry, something went wrong."
      />
    ),
    meta: {
      requiresAuth: false,
      title: "500页面",
      key: "500",
    },
  },
];

export default errorRouter;
