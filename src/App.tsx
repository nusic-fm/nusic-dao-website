import { Box } from "@mui/material";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Legal from "./pages/Legal";
import Home from "./pages/Home";
import ArtWork from "./pages/Artwork";

const App = () => {
  return (
    <Box>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/legal">
          <Legal />
        </Route>
        <Route path="/artWork">
          <ArtWork />
        </Route>
      </Switch>
    </Box>
  );
};

export default App;
