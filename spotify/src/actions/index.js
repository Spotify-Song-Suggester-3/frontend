// actions for Login
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";

// export const LOGIN_POST_START = "LOGIN_POST_START";
// export const LOGIN_POST_SUCCESS = "LOGIN_POST_SUCCESS";
// export const LOGIN_POST_FAILURE = "LOGIN_POST_FAILURE";

// export const postLogin = value => dispatch => {
//   dispatch({ type: LOGIN_POST_START, payload: value });
//   return axiosWithAuth()
//     .post(`/auth/signin`, value)
//     .then(response => {
//       dispatch({
//         type: LOGIN_POST_SUCCESS,
//         payload: response.data
//       });
//       localStorage.setItem("token", JSON.stringify(response.data.token));
//       localStorage.setItem("id", JSON.stringify(response.data.id));
//       localStorage.setItem("username", JSON.stringify(response.data.username));
//     })
//     .catch(error => {
//         dispatch({
//             type: LOGIN_POST_FAILURE,
//             payload: error
//         })
//     })
// };

//actions for fetching songs for BrowsePage

export const FETCHING_SONGS_START = "FETCHING_SONGS_START";
export const FETCHING_SONGS_SUCCESS = "FETCHING_SONGS_SUCCESS";
export const FETCHING_SONGS_FAILURE = "FETCHING_SONGS_FAILURE";
export const FILTER_SONGS = "FILTER_SONGS";
export const fetchSongs = () => dispatch => {
  dispatch({ type: FETCHING_SONGS_START });
  axios
    .get(
      "https://api.spotify.com/v1/tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B&market=US"
    )
    .then(res => {
      console.log("FETCHSONGS", res);
      dispatch({ type: FETCHING_SONGS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCHING_SONGS_FAILURE, payload: err });
    });
};

export const filterSongs = array => {
  return { type: FILTER_SONGS, payload: array };
};
