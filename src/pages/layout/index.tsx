import React, { FC, useEffect } from "react";
import { Layout } from "antd";
import LayoutHeader from "./components/header";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import LayoutSider from "./components/sider";
import { useAppSelector } from "@/store";
import { Outlet } from "react-router";
import { useProThemeContext } from "@/hooks/theme";
import { getThemeColor } from "@/utils";
import { useAppDispatch } from "@/store";
import { BackGroundColor } from "@/enum/theme";
import { CollapsedAction } from "@/store/modules/home";

const Layouts: FC = () => {
  const { isCollapsed } = useAppSelector(state => state.home);
  const { Theme } = useProThemeContext();
  const dispatch = useAppDispatch();

  // 监听窗口大小变化
  const listeningWindow = () => {
    window.onresize = () => {
      return (() => {
        const screenWidth = document.body.clientWidth;
        if (!isCollapsed && screenWidth < 1200) dispatch(CollapsedAction(true));
        if (!isCollapsed && screenWidth > 1200)
          dispatch(CollapsedAction(false));
      })();
    };
  };

  useEffect(() => {
    listeningWindow();
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsed={isCollapsed} style={{ height: "100vh" }} width={220}>
        <LayoutSider />
      </Sider>
      <Layout>
        <LayoutHeader />
        <Content
          style={{
            background: getThemeColor(
              Theme,
              BackGroundColor.light,
              BackGroundColor.dark,
            ),
            margin: "10px",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Layouts;
