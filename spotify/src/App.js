import React from 'react';
import Dashboard from './components/Dashboard';
import './App.css';
import Login from "./components/Login";
import Register from "./components/Register";
import { Route, Link, Switch} from "react-router-dom";


function App() {
  return (
    <div className="App">

      <Route exact path = '/' component={Login} />
      <Route path = '/register' component={Register}/>
      

      <Dashboard />

    </div>
  );
}

export default App;
