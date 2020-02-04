import React from 'react';
import Dashboard from './components/Dashboard';
import './App.css';
import Login from "./components/Login";
import Register from "./components/Register";
import { Route, Link, Switch} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'


function App() {
  return (
    <div className="App">
      <Route exact path = '/' component={Login} />
      <Route path = '/register' component={Register}/>
      <Route path = '/dashboard' component={Dashboard} />

      {/* <PrivateRoute exact path='/dashboard' component={Dashboard} /> /> */}

    </div>
  );
}

export default App;
