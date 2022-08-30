import './App.css';

import React from "react";
import PublicRouteHandler from './utils/PublicRouteHandler';
import PrivateRoute from './utils/PrivateRoute';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*standard routes*/}

          <Route path='/' element={<Home/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          {/*change dashboard to connected only later*/}
          <Route path='/Dashboard/*' element={<Dashboard />} />

        {/*registration and login here*/}
        <Route exact path='/' element={<PublicRouteHandler />} >
        </Route>


        {/*routes that require a user to be connected to access*/}

        <Route exact path='/' element={<PrivateRoute />} >
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

