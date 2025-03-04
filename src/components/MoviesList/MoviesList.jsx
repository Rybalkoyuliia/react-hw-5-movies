import Movie from 'components/Movie/Movie';
import React from 'react';
import s from './MoviesList.module.css';

const MoviesList = ({ movies, link }) => {
  return (
    <div>
      <ul className={s.movies_list}>
        {movies.results?.map(movie => (
          <Movie key={movie.id} link={link} {...movie} />
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
