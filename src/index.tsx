import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./store";
import { Provider } from "react-redux";
import { ProThemeProvider } from "./hooks/theme";
import ThemeContext from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLDivElement,
);

root.render(
  <Provider store={store}>
    <ProThemeProvider>
      <ThemeContext />
    </ProThemeProvider>
  </Provider>,
);
