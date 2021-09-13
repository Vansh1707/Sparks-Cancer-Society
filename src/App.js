import React from "react";
import {Switch ,Route} from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/nav/Header";

const App=() => {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/Sparks-Cancer-Society" component={Home}/>
      </Switch>
    </>
  );
}

export default App;
