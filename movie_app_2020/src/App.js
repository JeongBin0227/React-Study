import { HashRouter, Route } from "react-router-dom";

import About from "./routes/About";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import React from "react";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route exact={true} path="/" component={Home}></Route>
      <Route exact={true} path="/about" component={About}></Route>
      <Route exact={true} path="/movie-detail" component={Detail}></Route>
    </HashRouter>
  );
}

export default App;
