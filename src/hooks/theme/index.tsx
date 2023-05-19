import React, { createContext, useContext, useState, useMemo } from "react";
import { getThemeInfo } from "@/utils/storage";

type ThemeType = "light" | "dark";

export interface ThemeContextType {
  Theme: string;
  setTheme: Function;
}

const ProThemeContext = createContext<ThemeContextType>({} as ThemeContextType);
const useProThemeContext = () => useContext(ProThemeContext);

const ProThemeProvider = ({ children }: any) => {
  const [Theme, setTheme] = useState<ThemeType>(getThemeInfo);

  const themeProvider = useMemo(
    () => ({
      Theme,
      setTheme,
    }),
    [Theme, setTheme],
  );

  return (
    <ProThemeContext.Provider value={themeProvider}>
      {children}
    </ProThemeContext.Provider>
  );
};

export { ProThemeProvider, useProThemeContext };
