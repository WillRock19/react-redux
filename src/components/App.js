import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import HeaderComponent from "./common/header/HeaderPage";
import PageNotFound from "./notFound/PageNotFound";

function App() {
  return (
    <div className="container-fluid">
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route component={PageNotFound} />
      </Switch>
      <Route />
    </div>
  );
}

export default App;
