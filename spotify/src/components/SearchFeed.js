import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {filterSongs} from '../actions';
import axios from 'axios';
const SearchFeed = (props) =>{

    const [names, setNames] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
      axios
        .get(`https://www.songsterr.com/a/ra/songs/byartists.json?artists=Beyonce`)
        .then(response => {
          const search = response.data;
          console.log(search);
          const result = search.filter(song =>
          
            song.title
              .toLowerCase()
              .includes(query.toLowerCase())
          );
          setNames(result);
        });

        
    }, [query]);
    const handleInputChange = event => {
      setQuery(event.target.value);
    };
  
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
            onChange={handleInputChange}
            value={query}
            name="name"
            tabIndex="0"
            className="prompt search-name"
            placeholder="search by song name"
            autoComplete="off"
          />
        </form>
        <div className="search-return">
          {names.map(name => {
            return (
              <div
                className="char-search"
                key={name.id}
              >
                <p>
                 
                  {name.title}
                </p>
               
              </div>
            );
          })}
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
export default connect(mapStateToProps, {filterSongs})(SearchFeed)
