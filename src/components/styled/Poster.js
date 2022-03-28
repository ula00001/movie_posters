import { styled } from "@mui/material/styles";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const InfoWrap = styled('div')`
  width: 100%;
  padding: 24px;
  position: absolute;
  bottom: 0;
`

const PosterWrapper = styled('div')`
  background-image: linear-gradient(to top, black 0%, transparent 100%) ,url(${props => props.imgurl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 292px;
  height: 440px;
  font-family: Roboto;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 5px 20px #fff;
    transform: translateY(-8px);
  }
`;

const Genre = styled('div')`
  width: 65px;
  height: 24px;
  padding: 1px 8px;
  background: rgba(29, 29, 29, 0.5);
  border-radius: 0px 8px;
  margin-bottom: 18px;
`

const GenreSpan = styled('span')`
  color: #0FEFFD;
  font-size: 14px;
`

const Title= styled('div')`
  font-weight: 500;
  font-size: 24px;
  color: #FFFFFF;
  margin-top: 18px;
`

export default function Poster({value}) {
  const {poster_path, vote_average, title} = value;
  const imgUrl = `https://image.tmdb.org/t/p/original/${poster_path}`;
  
  return (
    <PosterWrapper
      imgurl={imgUrl}
    >
      <InfoWrap>
        <Genre>
          <GenreSpan>Fantasy</GenreSpan>
        </Genre>
        <Stack spacing={1}>
          <Rating name="half-rating-read" defaultValue={7} precision={0.1} readOnly />
        </Stack>
        <Title> {title} </Title>
      </InfoWrap>
    </PosterWrapper>
  )
}


