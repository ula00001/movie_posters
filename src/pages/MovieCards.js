import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import useMovieService from '../hooks/services/useMovieService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import Grid from '@mui/material/Grid';
// import { PosterWrapper, Title, Genre, InfoWrap , GenreSpan} from '../components/styled/Poster';
// import Rating from '@mui/material/Rating';
// import Stack from '@mui/material/Stack';
import Poster from '../components/styled/Poster';


const MovieCards = () => {
  const { getMovies, loading, error, clearError } = useMovieService();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
      onRequest();
  }, [])

  const onRequest = () => {

    if (!movies) {
        return;
    }
    clearError();
    getMovies()
        .then(onRequestLoaded)
  }

  const onRequestLoaded = (movies) => {
      setMovies(movies.results);
  }

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !movies) ? (
    <Movie movies={movies}/>
  ) : null;

  return (
    <div className="movies">
      { errorMessage || spinner || content }
    </div>
  )
}

const Movie = ({ movies }) => {
  return (
    <>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
          movies.map((value, i) => (
            <Grid container justifyContent="center" item xs={6} sm={4} md={2.4} key={i}>
              <NavLink to={`/movies/${value.id}`} className="poster-cards">
                <Poster
                  value={value} />
                {/* <PosterWrapper
                  imgUrl={`https://image.tmdb.org/t/p/original/${value.poster_path}`}
                  onClick={()=> onGetMovie(value)}
                >
                  <InfoWrap>
                    <Genre>
                      <GenreSpan>Fantasy</GenreSpan>
                    </Genre>
                    <Stack spacing={1}>
                      <Rating name="half-rating-read" defaultValue={value.vote_average} precision={0.1} readOnly />
                    </Stack>
                    <Title> {value.title} </Title>
                  </InfoWrap>
                </PosterWrapper> */}
              </NavLink>
            </Grid>
          ))
        }
      </Grid>
      </>
    )
  }

export default MovieCards;