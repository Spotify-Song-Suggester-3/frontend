import React from 'react';
import Dashboard from './components/Dashboard';
import './App.css';
import BrowsePage from './components/BrowsePage';
import Login from "./components/Login";
import Register from "./components/Register";
import { Route, Link, Switch} from "react-router-dom";


function App() {
  return (
    <div className="App">

      
      <BrowsePage/>

      <Route exact path = '/' component={Login} />
      <Route path = '/register' component={Register}/>
      

      <Dashboard />

    </div>
  );
}

export default App;
