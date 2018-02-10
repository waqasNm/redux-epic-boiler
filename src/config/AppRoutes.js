import React from 'react'
import {
  BrowserRouter,
  Route
} from 'react-router-dom'

import {
  App,
  SignupComponent,
  Home
} from './../components/index';

import {
  Signin,Signup
} from './../container/index';

const ParentApp = () => (
  <div>
    <App/>

    {/* App routing goes here!! */}
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/login" component={Signin} /> 
    <Route exact path="/dashboard" component={Home} />

  </div>
);

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Route component={ParentApp} />
    </BrowserRouter>
  )
};

export default AppRoutes;