import React from "react";
import "./App.css";
import { Router } from "react-router-dom";
import { Redirect, Route } from "react-router";

import Header from "./components/Header";
import Cource from "./components/Cource";
import Detail from "./components/Detail";
import Footer from "./components/Footer";
import history from "./helpers/history";
function App() {
  return (
    <div className="App">
      <Header />
      <Router history={history}>
        <Route exact path="/">
          <Cource />
        </Route>
        <Route path="/detail/:id" render={ (props) => <Detail {...props}/>} />>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
