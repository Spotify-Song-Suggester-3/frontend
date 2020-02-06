import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchSongs } from "../actions";

const SearchFeed = ({ ...props }) => {
  console.log("SEACH", props);
  // const {term, isFiltering} =props;
  const [filteredSongs, setFilteredSongs] = useState([]);

  useEffect(() => {
    const termLower = props.term.toLowerCase();
    // setFilteredSongs(props.gettingSongs.tracks.filter(song =>{
    //     if (song.name.toLowerCase().includes(termLower)){
    //         return true;
    // }

    // }));
  }, [props.term, props.isFiltering]);

  if (props.gettingSongs) {
    return <p> fetching songs </p>;
  }
  return (
    <div>
      <h3>Searching... </h3>

      {filteredSongs.length ? (
        filteredSongs.map((song, id) => (
          <div>
            key: {song.id}
            song:{song.name}
          </div>
        ))
      ) : (
        <p>No results</p>
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
export default connect(mapStateToProps, { fetchSongs })(SearchFeed);
