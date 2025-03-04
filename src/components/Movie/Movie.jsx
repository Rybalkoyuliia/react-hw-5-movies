import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './Movie.module.css';

const Movie = ({ link, ...movie }) => {
  const movieURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const location = useLocation();

  return (
    <li className={s.movies_list_item}>
      <Link state={{ from: location }} to={`${link}${movie.id}`}>
        <div className={s.img_container}>
          <img src={movieURL} alt={movie.original_title} />
        </div>
        <h4 className={s.movie_title}> {movie.title}</h4>
      </Link>
    </li>
  );
};

export default Movie;
