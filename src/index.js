import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Archivo Black", "Montserrat"],
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
    fontFamily: `"Montserrat" , sans-serif`,
  },
});
const theme = responsiveFontSizes(themeSettings);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
