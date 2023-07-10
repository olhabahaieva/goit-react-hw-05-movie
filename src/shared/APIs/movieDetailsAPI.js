import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'df510edfce68ed3b1f6165b74448260e';

export async function getMovieDetails(movie_id){
    await axios.request(`${BASE_URL}/search/movie/${movie_id}?api_key=${API_KEY}`)
    .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
}