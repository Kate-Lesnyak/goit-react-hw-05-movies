import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '3b3588da04245c6a18fc17ccb8868599';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return data;
}

export const getSearchMovies = async (query = 'cat', page = 1) => {
  const { data } = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`);
  return data;
}

export const getMovieDetails = async (id) => {
  const { data } = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return data;
}

export const getMovieCast = async (id) => {
  const { data } = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  return data;
}

export const getMovieReviews = async (id) => {
  const { data } = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
  console.log(data);
  return data;
}
