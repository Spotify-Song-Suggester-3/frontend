import React, { useState, useEffect } from 'react';
import {Button, Card, CardTitle, CardBody, CardSubtitle,CardGroup} from 'reactstrap';
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
    alert('Sorry to see you go!')
  })
  .catch(err=>console.log('DELETING',err))
  
};

  return (
    <div>
      <a href= "https://spotify-song-suggester-3.github.io/marketing/" >
      <h2 className="App-header">More About S.S.S.</h2>
      </a>
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
      <Link to = {`/`}>
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
              <CardGroup>
              <Card body inverse style={{ backgroundColor: 'transparent', borderColor: '#333' }}>
               <CardBody>
               <div className = "song-card">
              <CardTitle>Track: {song.song_title} </CardTitle>
                  <CardSubtitle>Artist: {song.artist}
                  </CardSubtitle>
                  </div>
        
                  </CardBody>
              </Card>
              </CardGroup>
                    )})
                    :
                    <p>Loading..</p>
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
