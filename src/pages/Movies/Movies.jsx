import React from 'react';
import s from './Movies.module.css';

const Movies = () => {
  return (
    <form className={s.movies_form}>
      <input
        placeholder="Enter movie title"
        className={s.movies_find_input}
      ></input>
      <button className={s.movies_button}>Search</button>
    </form>
  );
};

export default Movies;
