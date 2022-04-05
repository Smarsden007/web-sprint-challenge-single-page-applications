import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Form from "./Components/Form";
import Home from "./Components/Homepage";




const App = () => {
  return (
    <div className="header">
      <h1>Lets build the best pizza you've ever had!!!</h1>
      <nav>
      <router-link to="/"><button id="home-button">Home</button></router-link>
      <router-link to="/pizza"><button id="order-pizza">Order Pizza!</button></router-link>
      </nav>
      <router-switch>
      <Route path="/pizza" component={Form} />
        <Route path="/" component={Home} />
      </router-switch>
    </div>
  );
};
export default App;