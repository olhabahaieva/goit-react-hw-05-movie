import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'df510edfce68ed3b1f6165b74448260e';

async function getMovieDetails(movieId) {
  try {
    // const controller = new AbortController();
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`
      // { signal: controller.signal }
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default getMovieDetails;
