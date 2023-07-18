import axios from 'axios';
import { BASE_URL, API_KEY } from './data.js'

export const getTrendsMovies = async () => {
  const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
    // throw new Error(error);
  }
}

export const getSearchMovies = async (query) => {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const getMovieDetails = async (movieId) => {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const getMovieCredits = async (movieId) => {
  const url = `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const getMovieReviews = async (movieId) => {
  const url = `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
}




