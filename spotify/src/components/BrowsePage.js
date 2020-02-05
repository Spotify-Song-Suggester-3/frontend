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
    <a href = "/">Logout </a>
    <a hrerf = "#"> Search</a>
        </nav>


<div className = "search-bar">
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
        <Button color="primary" onClick ={props.fetchSongs}>Browse</Button> 
        {!props.gettingSongs && !props.loading &&(
<p>Click to browse a chosen selection!</p>)}


        {props.gettingSongs && !props.loading &&(

<div className = "browse-map-cont">
     {props.gettingSongs.trackmap((song, id) =>{
                        return(
                            <div className = "browse-songs-return">
                       <p> RETURN </p>
                    <h3>Artist: {song.tracks.tracks.track.name}</h3>
                        <p>Title:{song.track.popularity}</p>

                        
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
        loading:state.loading,
        tracks:state.tracks,
        gettingSongs:state.gettingSongs,
        error:state.error,
        isFiltering:state.isFiltering
    };
}

export default connect(mapStateToProps, {fetchSongs})(BrowsePage);
