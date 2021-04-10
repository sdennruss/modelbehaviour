import "./App.css";
import { Switch, Route } from "react-router-dom";
import React from "react";
import Header from "./components/navbar/header";
import WorstBehaviour from "./components/worst/worstBehaviour";
import BestBehaviour from "./components/best/bestBehaviour";
import BaliBehaviour from "./components/bali/baliBehaviour";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="routing-container">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/worst behaviour" component={WorstBehaviour} />
          <Route path="/best behaviour" component={BestBehaviour} />
          <Route path="/bali behaviour" component={BaliBehaviour} />
          <Route paht="/" exact component={Home} />
        </Switch>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
