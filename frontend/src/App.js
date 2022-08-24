import './App.css';

import React from "react";
import PublicRouteHandler from './utils/PublicRouteHandler';
import PrivateRoute from './utils/PrivateRoute';
import {BrowserRouter,Route,Routes} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*standard routes*/}


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

