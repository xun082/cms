import React from "react";
import { ConfigProvider, theme } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
import App from "./App";
import { ThemeContextType, useProThemeContext } from "./hooks/theme";
import themeToken from "./utils/theme-constant";

const ThemeContext = () => {
  const { Theme } = useProThemeContext() as ThemeContextType;

  function getThemeColor(left: string, right: string): string {
    return Theme === "light" ? left : right;
  }

  return (
    <StyleProvider hashPriority="high">
      <ConfigProvider
        theme={{
          algorithm:
            Theme === "light"
              ? [theme.defaultAlgorithm, theme.compactAlgorithm]
              : [theme.darkAlgorithm, theme.compactAlgorithm],
          token: {
            colorFillContentHover: getThemeColor(
              themeToken.lightTheme,
              themeToken.darkTheme,
            ),
            colorTextHeading: getThemeColor(
              themeToken.colorTextDisabledLight,
              themeToken.colorTextDisabledDark,
            ),
          },
        }}
      >
        <App />
      </ConfigProvider>
    </StyleProvider>
  );
};

export default ThemeContext;
