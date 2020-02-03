import React from 'react';
import {connect} from 'react-redux';
import {fetchSongs} from '../actions';

const BrowsePage = (props)=>{
    console.log('B4 FETCHING',props)
return (
    <div>
        <h1>Browse Artists</h1>
        <button onClick ={props.fetchSongs}>Browse</button>
        {!props.gettingSongs && !props.loading &&(<p>Click to browse a chosen selection!</p>)}


        {props.gettingSongs && !props.loading &&(

<div>
     {props.gettingSongs.tracks.map((song, id) =>{
                        return(
                            <div>
                        
                    <h3>Title: {song.name}</h3>
                        <p>popularity:{song.popularity}</p>
                        
                    </div>
                        )
     })}
    </div>
)}

</div>
)


}

const mapStateToProps =state =>{
    return{
        loading: state.loading,
        gettingSongs:state.gettingSongs,
        error:state.error
    };
}

export default connect(mapStateToProps, {fetchSongs})(BrowsePage);