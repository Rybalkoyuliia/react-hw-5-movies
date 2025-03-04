import React from 'react';
import { fetchFavoriteMovies } from 'services/API';
import s from './Home.module.css';
import useHttp from 'hooks/useHttp';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies] = useHttp(fetchFavoriteMovies);

  if (!movies) {
    return <Loader />;
  }

  return (
    <>
      <h1 className={s.trending_title}>Trending today</h1>
      <MoviesList movies={movies} link="/movies/" />
    </>
  );
};

export default Home;
