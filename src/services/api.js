import axios from "axios";

const API_KEY = '3b3588da04245c6a18fc17ccb8868599';
const BASE_URL = 'https://api.themoviedb.org/3';

// axios.defaults.params = {
//   per_page: 12,
// };

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
  return data;
}

export const getSearchMovies = async (query, page) => {
}

export const getMoviesDetails = async (movieId) => {
}

// API_URL_TRENDING_MOVIE: 'https://api.themoviedb.org/3/trending/movie/day',
// API_URL_SEARCH_MOVIE: 'https://api.themoviedb.org/3/search/movie',
//   API_URL_MOVIE_DETAILS: 'https://api.themoviedb.org/3/movie/',

// /trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// /search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
// /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
// /movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
// /movies/get-movie-reviews запрос обзоров для страницы кинофильма.
