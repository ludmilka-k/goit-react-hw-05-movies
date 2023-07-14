import axios from 'axios';

const API_KEY = '183c3cacc9c38c09c14d38798ccfe9d7';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrendsMovies = async () => {
  const url = `${BASE_URL}/trending/movie/all/day?api_key=${API_KEY}`;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const getSearchMovies = async () => {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}`;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const getMovieDetails = async (movieId) => {
  const url = `${BASE_URL}/search/movie/${movieId}?api_key=${API_KEY}`;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const getMovieCredits = async (movieId) => {
  const url = `${BASE_URL}/search/movie/${movieId}/credits?api_key=${API_KEY}`;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const getMovieReviews = async (movieId) => {
  const url = `${BASE_URL}/search/movie/${movieId}/reviews?api_key=${API_KEY}`;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
}




