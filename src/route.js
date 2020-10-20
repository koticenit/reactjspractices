import React, {Component} from 'react';
import Forecasts from './Forecasts';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import Forecast from './Forecast';
import formSubmit from './formSubmit';
import Arraymethods from './Arraymethods';
import nestedArrayAndObject from './nestedArrayAndObject';


class Routes extends Component{
    render(){
        return(
            <div>
            <BrowserRouter>    
             <Switch>
             <Route exact path='/' component={Forecast} />
             <Route exact path='/formSubmit' component={formSubmit} />
             <Route exact path='/Arraymethods' component={Arraymethods} />
             <Route exact path='nestedArrayAndObject' component={nestedArrayAndObject}></Route>
            <Route exact path="/Forecasts/:name/:id" component={Forecasts} />
            </Switch>
            </BrowserRouter>
            </div>
        )
    }
}


export default Routes;