import React from 'react';
import { Route, BrowserRouter as Router,Switch } from 'react-router-dom';
import App from './App'
import Nav from './navigation/nav'
import About from './navigation/about'
import NutritionAnalysis from './navigation/services'
import ContactUs from './navigation/contactus'
import Notfound from './navigation/notfound'
import './App.css';

const Routes = () => {
    return (
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/knowrecipe" component={App} />
              <Route path="/knowrecipe/home" component={App} />
              <Route path="/knowrecipe/about" component={About} />
              <Route path="/knowrecipe/services" component={NutritionAnalysis} />
              <Route path="/knowrecipe/contactus" component={ContactUs} />
              <Route component={Notfound} />
            </Switch>
          </div>
        </Router>
      )
} 

  export default Routes;
