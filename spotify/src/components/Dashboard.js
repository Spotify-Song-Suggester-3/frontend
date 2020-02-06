import React, { useState, useEffect } from 'react';
import {Button} from 'reactstrap';
import axiosWithAuth from '../utils/axiosWithAuth';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchSongs} from '../actions';
import {useParams} from 'react-router-dom';
import EditForm from './EditForm';
 function Dashboard (props) {
const {userID} = useParams;


  const [edit, setEdit] = useState({
    email:'',
    username:'',
    password:'',
    firstName:'',
    LastName:''
    
    });
    
    const handleChanges = e =>{
     setEdit({
       ...edit,
      [e.target.name] : e.target.value
    })
    }
    
    const handleSubmit = e =>{
      e.preventDefault();
      axiosWithAuth()
      .put
        (`users/${userID}`, edit)
      .then(response => {
        const token = localStorage.setItem('token', response.data.token)
        console.log("EDIT RES",response.data);
        console.log('SUBMITTING EDIT')
        // props.history.push('/dashboard');
      }
      )
    }
       
       
  const [favorites, setFavorites] = useState([]);

 



  return (
    <div>
      <h1 className="App-header">Welcome To Your Dashboard</h1>
      <div className="title-container">
        <h2>Let's Find Some New Music!</h2>
        <Link to = {`/browse`}>
        <Button color="primary">Browse</Button>
        </Link>
        
      </div>
      <div className = "edit">
      <EditForm/>
      </div>
    
      {/* <div className="dashboard-container">
        <div className="split-container">
          <h2>Welcome (username)</h2>
          <p>Edit Your Profile Here</p>
       
          <form onSubmit = {handleSubmit} className="profile-form">
            <div className="profile-div">
              <label>Username: </label>
              <input 
               type="text"
               placeholder = "username"
               name = "username"
               value = {edit.username}
               onChange = {handleChanges}/>
            </div>
            <div className="profile-div">
              <label>Password: </label>
              <input 
                type="text"
                placeholder = "password"
                name = "password"
                value = {edit.password}
                onChange = {handleChanges}/>
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
              <input
                  type="text"
                  placeholder = "email"
                  name = "email"
                  value = {edit.email}
                  onChange = {handleChanges} />
            </div>
          </form>
          <Button className="profile-div" color="primary">Submit</Button>
        </div> */}
        <div className="split-container fav-container">
        <h2>Favorite Songs List</h2>
          <div className="favorites-list">
            {/* {props.favorites.length ? props.favorites.map(song =>(
             <p>song: {song.track}</p> 
            <p> artist: {song.artist}</p> 
           
            <Button onDelete = {deleteFav} color="secondary">Delete Song</Button>
            ))
            :
            <p>Like some songs</p>
            } */}
            <Button  color="secondary">Delete Song</Button>
          </div>
        </div>
      </div>
    
            
  );
}

const mapStateToProps =state =>{
  return{
       songs:state.songs,
      gettingSongs:state.gettingSongs,
      error:state.error,
      isFiltering:state.isFiltering,
      userID:state.userID,
      favorites:state.favorites
  };
}

export default connect(mapStateToProps, {fetchSongs})(Dashboard);
