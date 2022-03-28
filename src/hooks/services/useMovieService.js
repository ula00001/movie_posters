import { useHttp } from '../useHttp';

const useMovieService = () => {
  const { loading, request, error, clearError } = useHttp();

  const _api = 'https://api.themoviedb.org/3';
  const _apiKey = 'd65708ab6862fb68c7b1f70252b5d91c';
  const options = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
  };

  const getMovies = async () => {
    const res = await request(`${_api}/discover/movie?api_key=${_apiKey}&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`, options);
    return res
  }

  const getSingleMovie = async (id) => {
    console.log('id', id);
    const res = await request(`${_api}/movie/${id}?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru`, options);
    return res
  }

  return { getMovies, getSingleMovie, loading, error, clearError };
}

export default useMovieService;
