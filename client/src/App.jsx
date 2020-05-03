import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar"
import Login from "./components/Auth/Login";
import About from "./components/Pages/About";
import Signup from "./components/Auth/Signup";
import SongsPage from "./components/Pages/Songs/SongsPage";
import "./App.css";


const App = () => {
  return (
    <Router>
      <Fragment>
        <div className="App">
          <Navbar />
          <div className="container">
          <Switch>
              <Route exact path='/' component={SongsPage} />
              <Route exact path='/about' component={About} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Signup} />
            </Switch>
          </div>
        </div>
      </Fragment>
    </Router>
  )

}



export default App;
