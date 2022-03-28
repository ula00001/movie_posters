import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import SimilarPoster from "../Poster";
import Grid from '@mui/material/Grid';

const TopBackdrop = styled('div')`
font-family: 'Roboto';
  min-height: 648px;
  min-width: 100%;
  background-image: linear-gradient(to right, black 0%, transparent 300%), url(${props => props.backdrop_url});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin-bottom: 30px;
`

const PosterInfoLayout = styled('div')`
  max-width: 900px;
  // height: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: 50px;
`

const PosterInfo = styled('div')`
  margin-top: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Poster = styled('div')`
  width: 200px;
  height: 280px;
  background-image: url(${props => props.poster_path});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin-bottom: 15px;
`

const PosterText = styled('div')`
  width: 632px;
  margin-top: 15%;
`

const Genre = styled('div')`
  // width: 65px;
  display: inline;
  height: 24px;
  padding: 1px 8px;
  background: rgba(29, 29, 29, 0.8);
  border-radius: 0px 8px;
`
const GenreSpan = styled('span')`
  color: #0FEFFD;
  font-size: 14px;
  font-weight: 400;
`

const Title = styled('div')`
  font-weight: 500;
  font-size: 56px;
  color: #FFFFFF;
  line-height: 64px;
  margin: 16px 0;
`

const Overview = styled('div')`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #FFFFFF;
  line-height: 32px;
`

const SimilarMovies = styled('div')`
  margin-bottom: 38px;
  width: 90%;
  margin: 0 auto;
  .poster-link {
    display: contents;
  }
`

const SimilarText = styled('div')`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  color: #FFFFFF;
  margin-bottom: 16px;
`
const SimilarPosters = styled('div')`

`

function Content({ singleMovieData, moviesData }) {
  const _imgApi = 'https://image.tmdb.org/t/p/original/';
  const { backdrop_path, poster_path, genres, title, overview } = singleMovieData;
  const genresArr = genres && genres.map((item) => item.name);
  const movieGenres = genresArr && genresArr.join();
  const backdrop_url = `${_imgApi}${backdrop_path}`;
  const poster_url = `${_imgApi}${poster_path}`;
  const movies = moviesData && moviesData.slice(0, 5);

  return (
    <>
      <TopBackdrop backdrop_url={backdrop_url} >
        <PosterInfoLayout>
          <PosterInfo>
            <Poster poster_path={poster_url} />
             <Stack spacing={1}>
              <Rating name="half-rating-read" defaultValue={7} precision={0.1} readOnly />
            </Stack>
            <Title />
          </PosterInfo>

          <PosterText>
            <Genre>
              <GenreSpan>
                {movieGenres}
              </GenreSpan>
            </Genre>
            <Title>
              {title}
            </Title>
            <Overview>
              {overview}
            </Overview>
          </PosterText>
        </PosterInfoLayout>
      </TopBackdrop>

      <SimilarMovies>

        <SimilarText>
            Similar Movies
        </SimilarText>
        <SimilarPosters>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
              movies &&
              movies.map((item, i) => (
                <Grid container justifyContent="center" item xs={6} sm={4} md={2.4} key={i}>
                  {
                    <NavLink to={`/movies/${item.id}`} className="poster-link">
                      <SimilarPoster value={item} key={i} />
                    </NavLink>
                  }
                </Grid>
              ))
            }
          </Grid>
        </SimilarPosters>

      </SimilarMovies>
    </>
  )
}

export default function SingleMovie({ singleMovieData, moviesData }) {
  return (
    <>
      {
        singleMovieData ?
          <Content singleMovieData={singleMovieData} moviesData={moviesData} />
          : null
      }

    </>
  )
}

