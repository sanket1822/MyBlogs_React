import React from "react";
import MyEffects from "./Components/MyEffects";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Create from "./Components/Create";
import BlogDetails from "./Components/BlogDetails";
import "../src/styles.css";
import NotFound from "./Components/NotFound";

function App(){

    return(
        <div>
        <Router>
            <div className="App">
            <Navbar/>
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <MyEffects/>
                        </Route>
                        <Route path="/create">
                            <Create/>
                        </Route>
                        <Route path="/blogs/:id">
                            <BlogDetails/>
                        </Route>
                        <Route path="*">
                            <NotFound/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
           
        </div>
    ) 

    
   
}

export default App;