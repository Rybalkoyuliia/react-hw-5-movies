import React from 'react';
import { Link } from 'react-router-dom';
import s from './Movie.module.css';

const Movie = movie => {
  const movieURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <li className={s.movies_list_item}>
      <Link to={`movies/${movie.id}`}>
        <div className={s.img_container}>
          <img src={movieURL} alt={movie.original_title} />
        </div>
        <h4 className={s.movie_title}> {movie.title}</h4>
      </Link>
    </li>
  );
};

export default Movie;
