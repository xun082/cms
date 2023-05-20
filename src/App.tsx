import React, { Suspense } from "react";
import { theme } from "antd";
import "@/assets/styles/reset.css";
import "antd/dist/reset.css";
import { BrowserRouter } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
import { Spin } from "antd";
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
        <Suspense
          fallback={
            <Spin
              indicator={antIcon}
              tip="Loading"
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
              }}
            />
          }
        >
          <RouterConfig />
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
