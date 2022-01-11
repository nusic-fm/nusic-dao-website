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
import { BrowserRouter as Router } from "react-router-dom";
import { getLibrary } from "./utils/web3React";
import { Web3ReactProvider } from "@web3-react/core";
import App from "./App";

WebFont.load({
  google: {
    families: ["Nunito"],
  },
});

const themeSettings = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#5B21D4",
    },
    success: {
      main: "#4AAB1A",
    },
  },
  typography: {
    allVariants: {
      color: "#ffffff",
    },
    fontFamily: `"Nunito" , sans-serif`,
  },
});
const theme = responsiveFontSizes(themeSettings);

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
