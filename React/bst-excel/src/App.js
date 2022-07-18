import React from 'react'
import {  Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Users from './components/Users';
import Details from './components/Deatils';
import CreateUser from './components/CreateUser';
import Download from './components/Downloda';
import CreateData from './components/pages/CreateData/CreateData';
import Index from './components/pages/Index/Index';
import ImportExcel from './components/pages/ImportExcel/ImportExcel';
import IndexM from './components/pages/IndexM/IndexM';

import LoginM from './components/pages/LoginM/LoginM';
import CreateDataM from './components/pages/CreateData/CreateDataM';

import 'antd/dist/antd.css';



function App() {
  return (
    <Switch>
      <Route path = '/' exact> 
        <Login />
      </Route> 

      <Route path = '/loginm' exact> 
        <LoginM />
      </Route> 

      <Route path = '/home' exact> 
        <Home />
      </Route> 

      <Route path = '/index' exact> 
        <Index />
      </Route> 
      <Route path = '/indexm' exact> 
        <IndexM />
      </Route> 

      <Route path = '/importExcel' exact> 
        <ImportExcel />
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

      <Route path = '/download' exact> 
        <Download />
      </Route> 
      
      <Route path = '/createData' exact> 
        <CreateData />
      </Route> 
      <Route path = '/createDatam' exact> 
        <CreateDataM />
      </Route> 
      
    </Switch>
  );
}

export default App;
