//api key
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

//All Tmdb Apis
export const requests = {
  fetchTrendingMovies: `/trending/movie/week?api_key=${API_KEY}`,
  fetchTrendingTv: `/trending/tv/week?api_key=${API_KEY}`,
  fetchNetflix: `/discover/tv?api_key=${API_KEY}&language=en-US&with_networks=213`,
  fetchTopMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopTv: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,

  fetchAllMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`,
  fetchMovieGenres: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  fetchAllTv: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`,
  fetchTvGenres: `/genre/tv/list?api_key=${API_KEY}&language=en-US`,
  fetchSearchedMovie: `/search/movie?api_key=${API_KEY}&language=en-US&include_adult=false`,
  fetchSearchedTv: `/search/tv?api_key=${API_KEY}&language=en-US&include_adult=false`,

  fetchVideo: `/{media_type}/{id}/videos?api_key=${API_KEY}&language=en-US`,
  fetchDetails: `/{media_type}/{id}?api_key=${API_KEY}&language=en-US`,
  fetchCredits: `/{media}/{id}/credits?api_key=${API_KEY}&language=en-US`,
  fetchSimilar: `{media}/{id}/similar?api_key=${API_KEY}&language=en-US&page=1`,

  fetchUpcoming: `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  fetchLatest: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTmdbPopular: `/person/popular?api_key=${API_KEY}&language=en-US&page=1`,

  fetchTodayTv: `/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`,
  fetchPopularTv: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchAiringTv: `/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`,
};
