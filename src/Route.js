import React from "react";
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Product from "./Components/Product";
import ProductItem from "./Components/ProductItem";
import NavBar from "./Components/NavBar";

function RouteConfig() {
  return (
    <div >
      <Router>
        <NavBar/>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/About" component={About} />
              <Route exact path="/Products" component={Product} />
              <Route path="/Product/:id" component={ProductItem} />
              <Route path="*" component={()=><h1>404 not found</h1>} />
          </Switch>
      </Router>
    </div>
  );
}

export default RouteConfig;