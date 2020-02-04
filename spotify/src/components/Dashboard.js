import React from "react";
import {Button} from 'reactstrap';
import { Link, Switch, Route} from 'react-router-dom';
function Dashboard() {
  return (
    <div>
      <h1 className="App-header">Welcome To Your Dashboard</h1>
      <div className="title-container">
        <h2>Let's Find Some New Music!</h2>
        <Link to = {`/browse`}>
        <Button color="primary">Browse</Button>
        </Link>
      </div>
      <div className="dashboard-container">
        <div className="split-container">
          <h2>Welcome (username)</h2>
          <p>Edit Your Profile Here</p>
          <form className="profile-form">
            <div className="profile-div">
              <label>Username: </label>
              <input />
            </div>
            <div className="profile-div">
              <label>Password: </label>
              <input />
            </div>
            <div className="profile-div">
              <label>First Name: </label>
              <input />
            </div>
            <div className="profile-div">
              <label>Last Name: </label>
              <input />
            </div>
            <div className="profile-div">
              <label>E-Mail: </label>
              <input />
            </div>
          </form>
          <Button className="profile-div" color="primary">Edit Profile</Button>
        </div>
        <div className="split-container fav-container">
        <h2>Favorite Songs List</h2>
          <div className="favorites-list">
            <p>song: test</p>
            <p>artist: test</p>
            <Button color="secondary">Delete Song</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
