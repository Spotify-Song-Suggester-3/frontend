import React from 'react';
import Dashboard from './components/Dashboard';
import './App.css';
import Login from "./components/Login";
import Register from "./components/Register";
import { Route, Link, Switch} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'
import BrowsePage from './components/BrowsePage';
import { useHistory } from "react-router-dom";

function App() {
  const history=useHistory();

  return (
    <div className="App">
      <Route exact path = '/' component={Login} history={history} />
      <Route path = '/register' component={Register} history={history} />
      {/* <Route path = '/browse' component={BrowsePage}/> */}
      {/* <Route path = '/dashboard' component={Dashboard}/> */}
      <PrivateRoute exact path='/dashboard' component={Dashboard} />
      <PrivateRoute exact path='/browse' component={BrowsePage} />
    </div>
  );
}

export default App;
