import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import ExploreProducts from "./components/explorer/ExploreProducts";
import MyProducts from "./components/my-assets/MyProducts";
import NewProduct from "./components/NewProduct";

function App() {

    return (
        <React.Fragment>
            <Router>
                <header>
                    <Header />
                </header>
                <main>
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/explore" exact>
                            <ExploreProducts />
                        </Route>
                        <Route path="/mine">
                            <MyProducts />
                        </Route>
                        <Route path="/new">
                            <NewProduct />
                        </Route>
                    </Switch>
                </main>
            </Router>
        </React.Fragment>
    );
}

export default App;
