// import React, {useState, useEffect} from 'react';
// import {connect} from 'react-redux';
import {fetchSongs} from '../actions';
// import SearchFeed from './SearchFeed';
// import {Button, Card,CardText, CardTitle, CardBody} from 'reactstrap';
// import axiosWithAuth from '../utils/axiosWithAuth';
// import { Link } from "react-router-dom";

// const BrowsePage = (props) =>{
// // const [searchTerm, setSearchTerm] = useState('');
// const {userID} = props;

// // const searchOnEnter =e =>{
// //     if (e.key ==='Enter'){
// //         setSearchTerm(e.target.value);
// //     }
// // }

// const addSong = (song, userID) =>{
    
//     axiosWithAuth()
//     .post( '/songs/save', {
// user_id: parseInt(userID),
// song_id: song.id,
// // favorites:[]

// })


// //may have to use song_id as param in post
// .then (res =>{
//     console.log('FAV ADD RES', res)
//     alert('songs added to favorites')
//     console.log('TO ADD TO FAV',res.data)
// })
// .catch(err=>{alert(err)
// });

// }

// return (

//     <div className = "browse-cont">

//         <div className = "browse-header">
//     <Link to = {`/dashboard`}>Home </Link>
//     <Link to = {`/`}>Logout </Link>
//     {/* <Link to = "#"> Search</Link> */}
//         </div>
// {/* 

// <div className = "search-bar">
// <input
// type ="text"
// placeholder ="search"
// defaultValue={searchTerm}
// onKeyUp = {searchOnEnter}
// />
// <SearchFeed term ={searchTerm}/>
// </div> */}

// <div className = "browse-return-cont">
//         <Button color="primary" onClick ={props.fetchSongs}>Browse</Button> 
//         {!props.gettingSongs && !props.loading &&(
// <p>Click to browse a chosen selection!</p>)}


//         {props.gettingSongs && !props.loading &&(

// <div className = "browse-map-cont">
// <h2>Add a few songs to your favorites!</h2>
//      {props.songs.map((song) =>{
      
//                         return(

//                             <div className = "browse-cont">
                       
                
//                     <Card body inverse style={{ backgroundColor: 'transparent', borderColor: '#333' }}>
//                      <CardBody>
//                     <CardTitle>Artist {song.artist} </CardTitle>
//                         <CardText>Track:{song.track}
//                         </CardText>
                      
                        
//                         {/*setup for OUR points:
//                          key{id}
//                         Title{song.song_title},
//                         Artist{song.artist},
//                         favorite{song.favorite} */}
//                         <Button color ="secondary" onClick = {()=>addSong(song, userID)}>Save.</Button>
//                         </CardBody>
//                     </Card>
                
                  
//                     </div>
//                         )
//      })}
//     </div>
// )}
// </div>
// </div>
// )

// }

// const mapStateToProps =state =>{
//     return{
//          songs:state.songs,
//         gettingSongs:state.gettingSongs,
//         error:state.error,
//         isFiltering:state.isFiltering,
//         userID:state.userID,
//         favorites:state.favorites
//     };
// }

// export default connect(mapStateToProps, {fetchSongs})(BrowsePage);


import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axiosWithAuth from '../utils/axiosWithAuth';






//pass props for all songs
const BrowsePage = props => {
    console.log("props", props);

    const { userID } = props;

    console.log('userID', userID);
    const api = 'https://spotify-song-suggester-backend.herokuapp.com';
    const [favSongs, setFavSongs] = useState([]);
    useEffect(() => {
        axiosWithAuth()
            .get(`${api}/api/songs/${userID}/favorites`)
            .then(response => {

                setFavSongs(response.data);
            })
            .catch(error => {
                console.log("error", error);
            });

    }, [userID]);

    const removeSong = id => {
        axiosWithAuth().delete(`${api}/api/songs/${userID}/favorites/${id}`)
            .then(res => {
                setFavSongs(favSongs.filter(song => song.id !== id));
            })
            .catch(err => { 
                console.warn(err);
                alert('Could not remove song--please try again.');
            });
    };


    return (
        <div>
            <div>   
            </div>

            <div>

                {favSongs.length ? favSongs.map(song => (
                    <p>song={song} deleteButton 
                    onDelete={removeSong} </p>
                ))
                :
                <p>Go like some songs!</p>
                }
                

            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        userID: state.userID
    };
};

export default connect(mapStateToProps, {fetchSongs})(BrowsePage);