import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from '../actions';

const SearchFeed = ({fetchSongs, ...props}) =>{
    const {term, songs, isFiltering} =props;
    console.log('SEARCH PROPS',props)
  
const [filteredSongs, setFilteredSongs] =useState([]);


useEffect (()=>{
    fetchSongs();
//     console.log('FETCH SONGS SEARCH',fetchSongs())
// const termLower = term.toLowerCase();
// setFilteredSongs(songs.filter(song =>{
//     if (song.name.toLowerCase().includes(termLower)){
//         return true;
// }

// }));

},[term, fetchSongs, isFiltering]);

if (props.isFetching){
    return (<p> fetching songs </p>)
};

return(
<div>
<div className = "search-title"></div>


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
    tracks: state.tracks,
    gettingSongs:state.gettingSongs,
    error:state.error,
    isFiltering:state.isFiltering
}

}
export default connect(mapStateToProps, {fetchSongs})(SearchFeed)
