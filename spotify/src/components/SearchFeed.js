import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from '../actions';

const SearchFeed = ({fetchSongs, ...props}) =>{
    const {term, songs, isFiltering} =props;
    console.log('SEARCH PROPS',props)
  
const [filteredSongs, setFilteredSongs] =useState([]);


useEffect (()=>{
    fetchSongs();
const termLower = term.toLowerCase();
setFilteredSongs(props.songs.tracks.filter(song =>{
    if (song.name.toLowerCase().includes(termLower)){
        return true;
}
//name WILL BE TITLE IN DB
//ALSO BY ARTIST || song.artist.toLowerCase().includes(termLower))
}));

},[term, fetchSongs, isFiltering]);

if (props.isFetching){
    return (<p> fetching songs </p>)
};

return(
<div>
<div className = "searc-title"></div>


    {filteredSongs.length ? (filteredSongs.map((song, id) =>(
        <div className = "search-bar">
             
            key:{song.id}
         song:{song.name}
        
        </div>
    )))

:
<p>No results</p>


}

</div>
);

}






const mapStateToProps = state =>{
return{
    songs: state.songs,
    isFetching:state.isFetching,
    error:state.error,
    isFiltering:state.isFiltering
}

}
export default connect(mapStateToProps, {fetchSongs})(SearchFeed)
