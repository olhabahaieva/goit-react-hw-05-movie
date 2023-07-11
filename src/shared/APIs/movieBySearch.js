import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'df510edfce68ed3b1f6165b74448260e';

export async function getMovieBySearch(params){
  try {
    const controller = new AbortController();
    const response = await axios.request(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${params}`,
    { signal: controller.signal }
    )
    // console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    
  }
}