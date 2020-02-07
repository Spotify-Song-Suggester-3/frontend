import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchSongs} from '../actions';
import {Card, CardTitle, CardBody} from 'reactstrap';
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
        const result = search.filter(character =>
        
          character.song_title
            .toLowerCase()
            .includes(query.toLowerCase())
            ||
            character.artist.toLowerCase().includes(query.toLowerCase())
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
      <Card>
        {names.map(name => {
          return (
            
            <div
              className="char-search"
              key={name.id}
            >
              <Link to = {`/browse`}>
              <p>
               Title: {name.song_title}
              </p>
              </Link>
              <p>
               
               Artist {name.artist}
              </p>
             
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
