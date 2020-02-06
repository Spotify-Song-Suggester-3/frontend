import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchSongs} from '../actions';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';
const SearchFeed = ({fetchSongs, ...props}) =>{
    const { term, songs, isFiltering } = props;
    const [filteredSongs, setFilteredSongs] = useState([]);


    // useEffect(() => {
    //     fetchSongs();
    //     const termLower = term.toLowerCase();
    //     setFilteredSongs(props.gettingSongs.filter(song => {
    //         if(song.track.toLowerCase().includes(termLower)
    //         || song.artist.toLowerCase().includes(termLower)) {
    //             return true;
    //         }
    //     }));
    // }, [term, fetchSongs, isFiltering]);


    // if (props.gettingSongs) {
    //     return (<p>fetching songs</p>)
    // };





    return (
     
    
      <div className="browse-return-cont">
              <div className = "browse-header">
    <Link to = {`/dashboard`}>Home </Link>
    <Link to = {`/search`}>Search </Link>
    <Link to = {`/`}>Logout </Link>

        </div>
            <h1>Search Through Our Full Collection!</h1>
        <form className="search-form">
          <input
            type="text"
            name="name"
            tabIndex="0"
            className="prompt search-name"
            placeholder="search by song name"
            autoComplete="off"
          />

          
        </form>
        <div className="search-return">
       


        </div>
      </div>
    );
  }


const mapStateToProps = state =>{
return{
 loading:state.loading,
    gettingSongs:state.gettingSongs,
    error:state.error,
    isFiltering:state.isFiltering
}

}
export default connect(mapStateToProps, {fetchSongs})(SearchFeed)
