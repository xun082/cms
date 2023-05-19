import React, { Suspense } from "react";
import { theme } from "antd";
import "@/assets/styles/reset.css";
import "antd/dist/reset.css";
import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./router";

const App = () => {
  const {
    token: { colorFillContentHover, colorBorder, colorTextHeading },
  } = theme.useToken();

  return (
    <div
      style={{
        background: colorFillContentHover,
        borderBottom: `1px solid ${colorBorder}`,
        height: "100vh",
        color: colorTextHeading,
      }}
    >
      <BrowserRouter>
        <Suspense fallback={<div>加载中</div>}>
          <RouterConfig />
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
