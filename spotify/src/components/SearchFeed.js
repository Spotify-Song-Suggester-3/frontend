import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchSongs} from '../actions';
import {Card, CardBody} from 'reactstrap';
import axiosWithAuth from '../utils/axiosWithAuth';
const SearchFeed = (props) =>{
 
  const [names, setNames] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    axiosWithAuth()
      .get(
        `https://spotify-song-suggester-3.herokuapp.com/api/songs`)
      .then(response => {
        const search = response.data;
        console.log('SONG SEARch RES',response.data);
        const result = search.filter(song =>
        
          song.song_title
            .toLowerCase()
            .includes(query.toLowerCase())
            ||
            song.artist.toLowerCase().includes(query.toLowerCase())
        );
        setNames(result);
      });
  }, [query]);
  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div>

    <div className = "browse-header">
<div className = "nav-links">
    <Link to = {`/dashboard`}>Home </Link>
    <Link to = {`/search`}>Search </Link>
    <Link to = {`/`}>Logout </Link>
</div>
        </div>


    <div className="name-search">
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by title or artist"
          autoComplete="off"
        />
      </form>
      <div className="search-return">
      <Card body inverse style={{ backgroundColor: 'transparent', borderColor: '#333' }}>
        {names.map(name => {
          return (
            
            <div
              className="char-search"
              key={name.id}
            >
              <Link to = {`/browse`}>
              <h7>
                <span>
               Title: {name.song_title}
               </span>
              </h7>
              </Link>
              <h7>
               Artist: {name.artist}
              </h7>
             
            </div>
          );
        })}
        </Card>
      </div>
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
