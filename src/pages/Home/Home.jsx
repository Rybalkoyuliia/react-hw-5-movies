import Movie from 'components/Movie/Movie';
import React from 'react';
import { fetchFavoriteMovies } from 'services/API';
import s from './Home.module.css';
import useHttp from 'hooks/useHttp';

const Home = () => {
  const [movies] = useHttp(fetchFavoriteMovies);

  if (!movies) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1 className={s.trending_title}>Trending today</h1>
      <ul className={s.movies_list}>
        {movies.results?.map(movie => (
          <Movie key={movie.id} {...movie} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
