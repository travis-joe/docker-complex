import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";
import Fib from "./Fib.js";
import OtherPage from "./OtherPage.js";
class App extends Component {
  render() {
    return (
      <Router>
        <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="/otherPage">OtherPage</Link>
        </header>
        <div>
          <Route exact path="/" component={Fib} />
          <Route exact path="/otherPage" component={OtherPage} />
        </div>
      </Router>
    );
  }
}

export default App;
