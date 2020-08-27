import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import HeaderComponent from "./common/header/HeaderPage";
import PageNotFound from "./notFound/PageNotFound";
import CoursesPage from "./courses/CoursesPage";
import ManageCoursePage from "./courses/ManageCoursePage";

function App() {
  return (
    <div className="container-fluid">
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses/:slug" component={ManageCoursePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route component={PageNotFound} />
      </Switch>
      <Route />
    </div>
  );
}

export default App;
