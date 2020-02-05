import React, {useState} from 'react';
import {connect} from 'react-redux';
import {fetchSongs} from '../actions';
import SearchFeed from './SearchFeed';
import {Button, Fade, Card} from 'reactstrap';
import axiosWithAuth from '../utils/axiosWithAuth';
const BrowsePage = (props)=>{
// const [searchTerm, setSearchTerm] = useState('');


// const searchOnEnter =e =>{
//     if (e.key ==='Enter'){
//         setSearchTerm(e.target.value);
//     }
// }

const addSong = (song, userID) =>{
    axiosWithAuth()
    .post( 'https://reqres.in/api/users', {
// user_id: parseInt(userID),
// song_id: song.id

})
.then (res =>{
    console.log('FAV ADD RES', res)
    alert('songs added to favorites')
})
.catch(err=>alert(err))
}


return (
    <div className = "browse-cont">

        <nav>
    <a href = "/dashboard">Home </a>
    <a href = "/">Logout </a>
    {/* <a hrerf = "#"> Search</a> */}
        </nav>
{/* 

<div className = "search-bar">
<input
type ="text"
placeholder ="search"
defaultValue={searchTerm}
onKeyUp = {searchOnEnter}
/>
<SearchFeed term ={searchTerm}/>
</div> */}

<div className = "browse-return-cont">
        <Button color="primary" onClick ={props.fetchSongs}>Browse</Button> 
        {!props.gettingSongs && !props.loading &&(
<p>Click to browse a chosen selection!</p>)}


        {props.gettingSongs && !props.loading &&(

<div className = "browse-map-cont">
<h2>Add a few songs to your favorites!</h2>
     {props.gettingSongs.tracks.map((song, id) =>{
                        return(
                            <div className = "browse-songs-return">
                     
                    <h3>Track: {song.name} </h3>
                        <p>Popular:{song.popularity}</p>

                        
                        {/*setup for OUR points:
                         key{id}
                        Title{song.song_title},
                        Artist{song.artist},
                        favorite{song.favorite} */}
                        <button onClick = {()=>addSong()}>Save.</button>
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
        tracks:state.tracks,
        gettingSongs:state.gettingSongs,
        error:state.error,
        isFiltering:state.isFiltering,
        userID:state.userID,
        favorites:state.favorites
    };
}

export default connect(mapStateToProps, {fetchSongs})(BrowsePage);
