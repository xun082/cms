import React, { FC } from "react";
import { Layout } from "antd";
import LayoutHeader from "./components/header";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import LayoutSider from "./components/sider";
import { useAppSelector } from "@/store";
import { Outlet } from "react-router";
import { useProThemeContext } from "@/hooks/theme";

const Layouts: FC = () => {
  const { isCollapsed } = useAppSelector(state => state.home);
  const { Theme } = useProThemeContext();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <LayoutHeader />
      <Layout style={{ height: "calc(100vh - 58px)" }}>
        <Sider collapsed={isCollapsed}>
          <LayoutSider />
        </Sider>
        <Content
          style={{
            backgroundColor: Theme === "light" ? "#f2f7ff" : "rgb(41 43 43)",
            margin: "20px",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Layouts;
