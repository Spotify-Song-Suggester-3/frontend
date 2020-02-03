import React from "react";

function Dashboard() {
  return (
    <div>
      <h1 className="App-header">Welcome To The User Dashboard</h1>
      <div>
        <h2>Let's Find Some New Music!</h2>
        <button>Browse</button>
      </div>
      <div className="dashboard-container">
        <div>
          <h2>Welcome, (username)</h2>
          <form className="profile-form">
            <div className="profile-div">
              <label>Username: </label>
              <input />
            </div>
            <div className="profile-div">
              <label>Password: </label>
              <input />
            </div>
          </form>
          <button className="profile-div">Edit Profile</button>
        </div>
        <div>
        <h2>Favorite Songs List</h2>
          <div className="favorites-list">
            <p>song: test</p>
            <p>artist: test</p>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
