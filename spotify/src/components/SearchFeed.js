import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from '../actions';

const SearchFeed = props =>{
const [filteredSongs, setFilteredSongs] =useState([]);

useEffect (()=>{
fetchSongs();
const termLower = term.toLowerCase();
setFilteredSongs(songs.filter(song =>{
    if (song.name.toLowerCase().includes(termLower)){
        return true;
}

}));

},[]);

if (props.gettingSongs){
    return (<p> fetching songs </p>)
};
return(
<div>
    {filteredSongs.length ? (filteredSongs.map((song, id) =>(
        <div>
        <h3>Title: {song.name}</h3>
        <p>popularity:{song.popularity}</p>
        </div>
    )))

:
<p>No results</p>

}
</div>
);

}






mapStateToProps = state =>{
return{
    loading: state.loading,
    gettingSongs:state.gettingSongs,
    error:state.error,
    isFiltering:state.isFiltering
}

}
export default connect(mapStateToProps, {fetchSongs})(SearchFeed)