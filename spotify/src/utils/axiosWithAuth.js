import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://spotify-song-suggester-3.herokuapp.com",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};
