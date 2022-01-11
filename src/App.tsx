import { Box } from "@mui/material";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
    <Box>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Box>
  );
};

export default App;
