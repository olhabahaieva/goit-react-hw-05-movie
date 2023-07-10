import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'df510edfce68ed3b1f6165b74448260e';

//trending movies for today
export async function getTrendingMovies() {
  try {
    const controller = new AbortController()
    const signal = controller.signal;
    
    const response = await axios.get(
      `${BASE_URL}trending/all/day?api_key=${API_KEY}`,
      { signal } // Pass the signal to the request
    );
    // console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
