//Importing React component from React Library
import React from "react";

//Importing Routing Components from React Router Dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Landing from "../global components/landing/landing";
import Signup from "../global components/signup/signup";
import Login from "../global components/login/login";
import Forget from "../global components/forget/forget";
import Dashboard from "../global components/dashboard/dashboard";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Landing />} />

          <Route exact path="/signup" render={() => <Signup />} />

          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/forget" render={() => <Forget />} />
          <Route exact path="/dashboard" render={() => <Dashboard />} />
        </Switch>
      </Router>
    </>
  );
}

//Exporting File
export default App;
