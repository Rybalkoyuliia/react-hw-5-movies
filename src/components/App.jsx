import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import NotFound from 'pages/NotFound/NotFound';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MoviePage/MoviePage';
import Cast from 'pages/Cast/Cast';
import Reviews from 'pages/Reviews/Reviews';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
};
