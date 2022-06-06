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
import { getLibrary } from "./utils/web3React";
import { Web3ReactProvider } from "@web3-react/core";
import App from "./App";
import Pfp from "./pages/Pfp";

WebFont.load({
  google: {
    families: ["Tenor Sans"],
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
    fontFamily: `"Tenor Sans" , sans-serif`,
  },
});
const theme = responsiveFontSizes(themeSettings);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Web3ReactProvider getLibrary={getLibrary}>
          {/* <App /> */}
          <Pfp></Pfp>
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
