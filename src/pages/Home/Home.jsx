import React, { useEffect, useState } from 'react';
import { fetchFavoriteMovies } from 'services/API';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFavoriteMovies()
      .then(data => setMovies(data.results))
      .catch(error => {
        return setError(error.message);
      });
  }, []);
  if (!movies) {
    console.log(error);
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies?.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
