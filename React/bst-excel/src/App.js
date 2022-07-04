import React from 'react'
import {  Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Users from './components/Users';
import Details from './components/Deatils';
import CreateUser from './components/CreateUser';

import 'antd/dist/antd.css';



function App() {
  return (
    <Switch>
      <Route path = '/' exact> 
        <Login />
      </Route> 

      <Route path = '/home' exact> 
        <Home />
      </Route> 

      <Route path = '/users' exact> 
        <Users />
      </Route> 

      <Route path = '/details' exact> 
        <Details />
      </Route> 
      
      <Route path = '/createUser' exact> 
        <CreateUser />
      </Route> 
      
    </Switch>
  );
}

export default App;
