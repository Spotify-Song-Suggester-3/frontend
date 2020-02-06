import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchSongs} from '../actions';
import SearchFeed from './SearchFeed';
import {Button, Card,CardText, CardTitle, CardBody} from 'reactstrap';
import axiosWithAuth from '../utils/axiosWithAuth';
import { Link } from "react-router-dom";
import axios from 'axios';
const BrowsePage = (props) =>{
// const [searchTerm, setSearchTerm] = useState('');
const {userID} = props;

// const searchOnEnter =e =>{
//     if (e.key ==='Enter'){
//         setSearchTerm(e.target.value);
//     }
// }


const [favSongs, setFavSongs] = useState({
    title:'',
    Artist: 'Beyonce'

});



const addSong =()=>{
axios
.post ('https://reqres.in/api/users/', favSongs)
.then(res=>{
console.log('POST RES',res)

    const songArr = [];
    setFavSongs(songArr.push(res.data))
    console.log('SONG ARRAY', songArr)
        
    
})
}


return (

    <div className = "browse-cont">

        <div className = "browse-header">
    <Link to = {`/dashboard`}><span>Home </span></Link>
    <Link to = {`/`}><span onClick={()=>localStorage.removeItem('token')}>Logout</span> </Link>
    {/* <Link to = "#"> Search</Link> */}
        </div>
{/* 

// <div className = "search-bar">
// <input
// type ="text"
// placeholder ="search"
// defaultValue={searchTerm}
// onKeyUp = {searchOnEnter}
// />
// <SearchFeed term ={searchTerm}/>
// </div> */}

<div className = "browse-return-cont">
         <Button color="primary" onClick ={props.fetchSongs}>Browse</Button> 
    {!props.gettingSongs && !props.loading &&(
<p>Click to browse a chosen selection!</p>)}


        {props.gettingSongs && !props.loading &&(

<div className = "browse-map-cont">
<h2>Add a few songs to your favorites!</h2>
     {props.gettingSongs.map((song, id) =>{
      
                        return(

                            <div className = "browse-cont">
                       
                
                    <Card body inverse style={{ backgroundColor: 'transparent', borderColor: '#333' }}>
                     <CardBody>
                    <CardTitle>Track: {song.title} </CardTitle>
                        <CardText>Artist: Queen Bey
                        </CardText>
                      
                        
                        {/*setup for OUR points:
                         key{id}
                        Title{song.song_title},
                        Artist{song.artist},
                        favorite{song.favorite} */}
                        <Button color ="secondary" onClick = {addSong}>Save.</Button>
                        </CardBody>
                    </Card>
                
                  
                    </div>
                        )
     })}
    </div>
)}
</div>
</div>
)

}

const mapStateToProps =state =>{
    return{
       loading:state.loading,
        gettingSongs:state.gettingSongs,
        error:state.error,
        isFiltering:state.isFiltering,
        userID:state.userID,
        favorites:state.favorites
    };
}

export default connect(mapStateToProps, {fetchSongs})(BrowsePage);
