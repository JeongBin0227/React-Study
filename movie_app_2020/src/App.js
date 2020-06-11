import { HashRouter, Route } from "react-router-dom";

import About from "./routes/About";
import Home from "./routes/Home";
import React from "react";

function App() {
  return (
    <HashRouter>
      <Route exact={true} path="/home" component={Home}></Route>
      <Route exact={true} path="/about" component={About}></Route>
    </HashRouter>
  );
}

export default App;
