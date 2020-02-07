import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchSongs} from '../actions';
import SearchFeed from './SearchFeed';
import {Button, Card,CardText, CardTitle, CardBody} from 'reactstrap';
import axiosWithAuth from '../utils/axiosWithAuth';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

const BrowsePage = (props) =>{
const {userID} = props;
const {id} =useParams


const [favSongs, setFavSongs] = useState([]);
const addSong =(id)=>{
    alert('Song Added!')

    // axiosWithAuth()
    // .get (`/songs/${id}`)

    // .then(res=>{
    // console.log('POST RES',res)
    //     //get song by id? set res. then push onto fav array?****
    //     //endpoint not working returning "[object20%object]"
        
     
    //     console.log('FAVS',favSongs)
               
    // })
    }

return (

    <div className = "browse-cont">

        <div className = "browse-header">
            <div className = "nav-links">
    <Link to = {`/dashboard`}>Home </Link>
    <Link to = {`/search`}>Search </Link>
    <Link to = {`/`}>Logout </Link>
    </div>
        </div>



<div className = "browse-return-cont">
         <Button color="primary" onClick ={props.fetchSongs}>Browse</Button> 
    {!props.gettingSongs && !props.loading &&(
<p>Click to browse a chosen selection!</p>)}


        {props.gettingSongs && !props.loading &&(

<div className = "browse-map-cont">
<h2>Add a few songs to your favorites!</h2>
     {props.gettingSongs.map((song, id) =>{
      
                        return(

                            <div className = "browse-cont">
                       
                
                    <Card body inverse style={{ backgroundColor: 'transparent', borderColor: '#333' }}>
                 
                     <CardBody>
                     <div className = "song-card">
                         {/* <Link>Rec Songs</Link>  on click of card will go to song id with rec songslist*/}
                    <CardTitle>Track: {song.song_title} </CardTitle>
                        <CardText>Artist: {song.artist}
                        </CardText>
                        </div>
                        
                        <Button color ="secondary" onClick = {addSong}>Save.</Button>
                        </CardBody>
                    </Card>
                
                  
                    </div>
                        )
                         })}
                 </div>
                    )}
                  </div>
        </div>
    )

}

const mapStateToProps =state =>{
    return{
       loading:state.loading,
        gettingSongs:state.gettingSongs,
        error:state.error,
        isFiltering:state.isFiltering,
        userID:state.userID,
        favorites:state.favorites
    };
}

export default connect(mapStateToProps, {fetchSongs})(BrowsePage);
