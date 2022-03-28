import { useState, useEffect, lazy } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import SingleMovie from '../components/styled/singleMovie/SingleMovie';
import useMovieService from '../hooks/services/useMovieService';

// const SingleMovie = lazy(() => import('../components/styled/singleMovie/SingleMovie'));

const SingleMoviePage = () => {
  const { id } = useParams();
  const { getSingleMovie, getMovies, loading, error, clearError } = useMovieService();
  const [movie, setMovie] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
      onRequest();
  }, [id])

  const onRequest = () => {
    // if (!movie) {
    //     return;
    // }
    clearError();
    getSingleMovie(id)
      .then(onRequestSingleLoaded)

    getMovies()
      .then(onRequestLoaded);
  }

  const onRequestLoaded = (movies) => {
    setMovies(movies.results);
  }

  const onRequestSingleLoaded = (movie) => {
    setMovie(movie);
  }

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !movie) ? (
    movie && movies ? <SingleMovie singleMovieData={movie} moviesData={movies}/> : null
  ) : null;

  return (
    <>
      {errorMessage || spinner || content}
    </>
  )
}

export default SingleMoviePage;