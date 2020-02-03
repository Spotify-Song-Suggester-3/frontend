import React from 'react';
import {connect} from 'react-redux';
import {fetchSongs} from '../actions';

const BrowsePage = (props)=>{
    console.log('B4 FETCHING',props)
return (
    <div>
        <h1>Browse Artists</h1>
        <button onClick ={props.fetchSongs}>Browse</button>
        {!props.tracks && !props.isFetching &&(<p>Click to browse a chosen selection!</p>)}
{/* 
        {props.tracks && !props.isFetching &&(

<div>
                    {props.tracks.map((song) =>{
                        return(
                            <div>
                    <h3>Artist: {song.title}</h3>
                    }


        )} */}
    </div>
)





}

const mapStateToProps =state =>{
    return{
        tracks: state.tracks,
        isFetching:state.isFetching,
        error:state.error
    };
}

export default connect(mapStateToProps, {fetchSongs})(BrowsePage);