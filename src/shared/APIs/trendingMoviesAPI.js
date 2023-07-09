import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'df510edfce68ed3b1f6165b74448260e';

//trending movies for today
export async function getTrendingMovies(){
    await axios.request(`${BASE_URL}trending/all/day?api_key=${API_KEY}`)
    .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
}