import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchSongs } from "../actions";
import SearchFeed from "./SearchFeed";

const BrowsePage = props => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchOnEnter = e => {
    if (e.key === "Enter") {
      setSearchTerm(e.target.value);
    }
  };
  console.log("B4 FETCHING", props);
  return (
    <div>
      <h5>Search</h5>
      <input
        type="text"
        placeholder="search"
        defaultValue={searchTerm}
        onKeyUp={searchOnEnter}
      />
      <SearchFeed term={searchTerm} />

      <h1>Browse Artists</h1>
      <button onClick={props.fetchSongs}>Browse</button>
      {!props.gettingSongs && !props.loading && (
        <p>Click to browse a chosen selection!</p>
      )}

      {props.gettingSongs && !props.loading && (
        <div>
          {props.gettingSongs.tracks.map((song, id) => {
            return (
              <div>
                <h3>Title: {song.name}</h3>
                <p>popularity:{song.popularity}</p>

                {/*setup for OUR points:
                         key{id}
                        Title{song.song_title},
                        Artist{song.artist},
                        favorite{song.favorite} */}
                <button>Save Song</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.loading,
    gettingSongs: state.gettingSongs,
    error: state.error,
    isFiltering: state.isFiltering
  };
};

export default connect(mapStateToProps, { fetchSongs })(BrowsePage);
