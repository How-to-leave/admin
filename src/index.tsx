import React from "react";
import ReactDOM from "react-dom";
import { createOvermind } from "overmind";
import { Provider } from "overmind-react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import App from "./App";
import theme from "./styles/theme";
import { config } from "./store";

const overmind = createOvermind(config);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider value={overmind}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
