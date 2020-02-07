import React, { useState, useEffect } from 'react';
import {Button, Card,CardText, CardTitle, CardBody, CardSubtitle} from 'reactstrap';
import axiosWithAuth from '../utils/axiosWithAuth';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchSongs} from '../actions';
import {useParams} from 'react-router-dom';
import EditForm from './EditForm';
 function Dashboard (props) {
const {userID} = useParams();
 const [recSongs, setRecSongs] = useState([]);



 useEffect(() => {
  axiosWithAuth()
    .get(
      `https://spotify-song-suggester-3.herokuapp.com/api/suggested`)
    .then(response => {
   //only show 1st 50 songs
      let recFilter =[];
      console.log('SUGGEST SONGS RES',response.data);
      for (let i=0; i < 50; i++){
        if(response.data[i]){
          recFilter.push(response.data[i])
          console.log('REC FILTER', recFilter)
        }
      }
      setRecSongs(recFilter);
    })
    .catch(err=>console.log(err))
}, []); 



const deleteProfile= () => {
  alert('Sorry to see you go!')
  axiosWithAuth()
  .delete(`https://spotify-song-suggester-3.herokuapp.com/api/users/${userID}`)
  .then(res =>{
    console.log('DELTEING', res)
    alert('Sorry to see you go!')
  })
  .catch(err=>console.log('DELETING',err))
  
};

  return (
    <div>
      <h2 className="App-header">Welcome To Your Dashboard</h2>
      <div className="title-container">
        <h2>Let's Find Some New Music!</h2>
        <Link to = {`/browse`}>
        <Button color="primary">Browse</Button>
        </Link>
        
      </div>
      <div className="dashboard-container">
      <div className="split-container">
          <h1>Welcome To Spotify Song Suggestor</h1>
          
      <EditForm/>
      <Link>
      <Button onClick ={deleteProfile} color="secondary">Delete Profile</Button>
      </Link>
      </div>
      </div>
        <div className="split-container fav-container">
        <h3>Here's What We Recommend</h3>
          <div className="favorites-list">
         
          <div className = "browse-map-cont">
          {recSongs.length ? recSongs.map((song, id) => {
            return (
              
              <Card body inverse style={{ backgroundColor: 'transparent', borderColor: '#333' }}>
               <CardBody>
               <div className = "song-card">
              <CardTitle>Track: {song.song_title} </CardTitle>
                  <CardSubtitle>Artist: {song.artist}
                  </CardSubtitle>
                  </div>
        
                  </CardBody>
              </Card>

           
           
                    )})
                    :
                    <p>Go like some songs!</p>
                    }
                  
                  </div>
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
