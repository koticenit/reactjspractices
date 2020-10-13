import React, {Component} from 'react';
import Forecasts from './Forecasts';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import Forecast from './Forecast';



class Routes extends Component{
    render(){
        return(
            <div>
            <BrowserRouter>    
             <Switch>
             <Route exact path='/' component={Forecast} />
            <Route exact path="/Forecasts/:id" component={Forecasts} />
            </Switch>
            </BrowserRouter>
            </div>
        )
    }
}


export default Routes;