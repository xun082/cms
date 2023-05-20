import React from "react";
import { ConfigProvider, theme } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
import App from "./App";
import { ThemeContextType, useProThemeContext } from "./hooks/theme";
import { BackGroundColor, FontColor } from "./enum/theme";
import { getThemeColor } from "./utils";

const ThemeContext = () => {
  const { Theme } = useProThemeContext() as ThemeContextType;

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
              Theme,
              BackGroundColor.light,
              BackGroundColor.dark,
            ),
            colorTextHeading: getThemeColor(
              Theme,
              FontColor.light,
              FontColor.dark,
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
