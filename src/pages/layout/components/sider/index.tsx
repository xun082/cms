import React, { FC } from "react";
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useProThemeContext } from "@/hooks/theme";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { getThemeColor } from "@/utils";
import { BackGroundColor, FontColor } from "@/enum/theme";
import "./index.scss";

type MenuItem = Required<MenuProps>["items"][number];

const LayoutSider: FC = () => {
  const { Theme } = useProThemeContext();
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }
  const items: MenuItem[] = [
    getItem("Option 1", "1", <PieChartOutlined />),
    getItem("Option 2", "2", <DesktopOutlined />),
    getItem("User", "sub1", <UserOutlined />, [
      getItem("Tom", "3"),
      getItem("Bill", "4"),
      getItem("Alex", "5"),
    ]),
  ];
  return (
    <Menu
      style={{
        background: getThemeColor(
          Theme,
          BackGroundColor.light,
          BackGroundColor.dark,
        ),
        color: getThemeColor(Theme, FontColor.light, FontColor.dark),
      }}
      defaultSelectedKeys={["1"]}
      mode="inline"
      items={items}
    />
  );
};

export default LayoutSider;
