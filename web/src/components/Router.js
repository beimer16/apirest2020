import React, { Component } from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Container from './Container';

class Router extends Component{
    render()
    {
        return(
          <BrowserRouter>
             <Switch>
                 <Route exact  path="/"  component={Login} />
                 <Route exact  path="/Register"  component={Register} />
                 <Route exact  path="/Container"  component={Container} />
             </Switch>
          </BrowserRouter>
        )
    }
}
export default Router  