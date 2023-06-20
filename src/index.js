import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import WebFont from "webfontloader";
import { HashRouter as Router } from "react-router-dom";
import { Web3ReactProvider } from "@web3-react/core";
import App from "./App";
import { Web3Provider } from "@ethersproject/providers";

WebFont.load({
  google: {
    families: ["Space Mono"],
  },
});

const themeSettings = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#573FC8",
      light: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
    info: {
      main: "#A794FF",
    },
    background: { paper: "#16162A" },
  },
  typography: {
    allVariants: {
      color: "#ffffff",
    },
    fontFamily: `Space Mono , sans-serif`,
  },
});
const theme = responsiveFontSizes(themeSettings);

export const getLibrary = (provider) => {
  return new Web3Provider(provider);
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Web3ReactProvider getLibrary={getLibrary}>
          <App />
        </Web3ReactProvider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
