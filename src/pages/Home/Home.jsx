import Movie from 'components/Movie/Movie';
import React, { useEffect, useState } from 'react';
import { fetchFavoriteMovies } from 'services/API';
import s from './Home.module.css';
import { toast } from 'react-toastify';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFavoriteMovies()
      .then(data => setMovies(data.results))
      .catch(error => {
        console.log(error);
        return setError(error.message);
      });
  }, []);
  if (!movies) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    toast.error(error.message);
  }
  return (
    <div>
      <h1 className={s.trending_title}>Trending today</h1>
      <ul className={s.movies_list}>
        {movies?.map(movie => (
          <Movie key={movie.id} {...movie} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
