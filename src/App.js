import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        {/* Render the Header component in all routes */}
        <Header />

        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>

          {/* Default route must be at the bottom */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
