import React, {useState} from 'react';
import {connect} from 'react-redux';
import {fetchSongs} from '../actions';
import SearchFeed from './SearchFeed';
import {Button, Fade, Card} from 'reactstrap';
const BrowsePage = (props)=>{
const [searchTerm, setSearchTerm] = useState('');
const searchOnEnter =e =>{
    if (e.key ==='Enter'){
        setSearchTerm(e.target.value);
    }
}
return (
    <div className = "browse-cont">

        <nav>
    <a href = "/dashboard">Home </a>
    <a href = '/'>Logout</a>

        </nav>
<h5>Search</h5>

<div className = "seach-bar">
<input
type ="text"
placeholder ="search"
defaultValue={searchTerm}
onKeyUp = {searchOnEnter}
/>
<SearchFeed term ={searchTerm}/>
</div>
<div className = "browse-return-cont">
        <h1>Browse Artists</h1>
        <button onClick ={props.fetchSongs}>Browse</button>
        {!props.isFetching && !props.songs &&(<p>Click to browse a chosen selection!</p>)}


        {props.isFetching && !props.songs &&(

<div className = "browse-map-cont">
     {props.isFetching.tracks.map((song, id) =>{
                        return(
                            <div className = "browse-songs-return">
                        
                    <h3>Title: {song.songs.tracks.name}</h3>
                        <p>popularity:{song.popularity}</p>

                        
                        {/*setup for OUR points:
                         key{id}
                        Title{song.song_title},
                        Artist{song.artist},
                        favorite{song.favorite} */}
                        <button>Save Song</button>
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
        songs:state.songs,
        isFetching:state.isFetching,
        error:state.error,
        isFiltering:state.isFiltering
    };
}

export default connect(mapStateToProps, {fetchSongs})(BrowsePage);