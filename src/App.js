// статические импорты
import './App.css';
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { lazy, Suspense, useState } from 'react';
import Spinner from './spinner/Spinner';
import Bar from './components/bar/Bar';
import Container from '@mui/material/Container';
import { useLocation } from 'react-router-dom';
// import { Factorial, Fibonacci, MovieCards } from './pages';

// динамические импорты
const Factorial = lazy(() => import('./pages/Factorial'));
const Fibonacci = lazy(() => import("./pages/Fibonacci"));
const MovieCards = lazy(() => import("./pages/MovieCards"));
const SingleMoviePage = lazy(() => import("./pages/SingleMoviePage"))
const Page404 = lazy(() => import('./pages/404'));

function App() {
  // const [singleMovieData, setSingleMovieData] = useState();

  // const onGetMovie = (data) => {
  //   console.log(data);
  //   setSingleMovieData(data);
  // }

  const location = useLocation();

  location.pathname == '/movies' || (location.pathname).substring(0, 8) == '/movies/' ?
    document.body.style.backgroundImage = `linear-gradient(45deg, rgb(0, 3, 38) 0%, rgb(82, 15, 117) 100%)`:
    document.body.style.backgroundImage= '' ;

  return (
    <div className="App" >
      <Bar />
        <Container  maxWidth="xl">

          <main>
            <Suspense fallback={<Spinner />}>
              <Routes>

                <Route path="/" element={<Factorial/>} />
                <Route path="/fibonacci" element={<Fibonacci/>} />
                <Route path="/movies" element={<MovieCards/>} />
                <Route path="/movies/:id" element={<SingleMoviePage />} />
                <Route path="*" element={<Page404 />} />

              </Routes>
            </Suspense>
          </main>

        </Container>
    </div>
  );
}

export default App;