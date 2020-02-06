import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchSongs} from '../actions';
import SearchFeed from './SearchFeed';
import {Button, Card,CardText, CardTitle, CardBody} from 'reactstrap';
import axiosWithAuth from '../utils/axiosWithAuth';
import { Link } from "react-router-dom";
import axios from 'axios';

const BrowsePage = (props) =>{
const {userID} = props;



const [favSongs, setFavSongs] = useState({
    title:'',
    Artist: ''

});
const addSong =()=>{
    // axios
    // .post ('https://reqres.in/api/users/', favSongs)
    // .then(res=>{
    // console.log('POST RES',res)
        const songArr = [];
        setFavSongs(songArr.push.favSongs)
        alert('Song Added!')
        console.log('FAVS',favSongs)
               
    // })
    }

return (

    <div className = "browse-cont">

        <div className = "browse-header">
    <Link to = {`/dashboard`}>Home </Link>
    <Link to = {`/search`}>Search </Link>
    <Link to = {`/`}>Logout </Link>

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
                    <CardTitle>Track: {song.song_title} </CardTitle>
                        <CardText>Artist: {song.artist}
                        </CardText>
                      
                        
                        {/*setup for OUR points:
                         key{id}
                        Title{song.song_title},
                        Artist{song.artist},
                        favorite{song.favorite} */}
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
