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
const {userID} = useParams();
 const [recSongs, setRecSongs] = useState([]);



//  useEffect(() => {
//   axiosWithAuth()
//     .get(
//       `https://spotify-song-suggester-3.herokuapp.com/api/suggested`)
//     .then(response => {
   
//       console.log('SUGGEST SONGS RES',response.data);
      
//       setRecSongs(response.data);
//     })
//     .catch(err=>console.log(err))
// }, []); 




const deleteProfile= () => {
  axiosWithAuth()
  .delete(`https://spotify-song-suggester-3.herokuapp.com/api/users/${props.userID}`)
  .then(res =>{
    console.log('DELTEING', res)
    alert('Sorry to see you go!')
  })
  .catch(err=>console.log('DELETING',err))
  
};

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
      <EditForm/>
      <Button onClick ={deleteProfile} color="secondary">Delete Profile</Button>
      </div>
      </div>
        <div className="split-container fav-container">
        <h2>Here's What We Recommend</h2>
          <div className="favorites-list">

          
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
