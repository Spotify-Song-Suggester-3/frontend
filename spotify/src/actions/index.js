//actions for fetching songs for BrowsePage

import axios from 'axios';

export const FETCHING_SONGS_START ='FETCHING_SONGS_START';
export const FETCHING_SONGS_SUCCESS= 'FETCHING_SONGS_SUCCESS';
export const FETCHING_SONGS_FAILURE = 'FETCHING_SONGS_FAILURE';
export const FILTER_SONGS ='FILTER_SONGS';
export const SET_USER_ID = 'SET_USER_ID';
export const fetchSongs =()=>dispatch=>{
    dispatch({type:FETCHING_SONGS_START})
    axios
    .get('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=33dc01ba434ff578a9f22eeecd9b7119&format=json&limit=50')
    .then(res=>{
        console.log('FETCHSONGS',res)
        dispatch({type:FETCHING_SONGS_SUCCESS, payload:res.data})
    })
    .catch(err=>{
        console.log(err)
        dispatch({type:FETCHING_SONGS_FAILURE,payload:err})
    })
};


export const filterSongs = array => {
    return {type:FILTER_SONGS, payload: array}
}

export const setUserID = id => {
    return { type: SET_USER_ID, payload: id}
};
