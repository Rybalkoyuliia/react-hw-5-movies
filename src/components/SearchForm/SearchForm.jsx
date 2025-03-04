import React from 'react';
import s from './SearchForm.module.css';
import { useForm } from 'react-hook-form';

const SearchForm = ({ handleTitle }) => {
  const { register, reset, handleSubmit } = useForm();

  const submit = ({ title }) => {
    handleTitle(title);
    reset();
  };

  return (
    <div>
      <form className={s.movies_form} onSubmit={handleSubmit(submit)}>
        <input
          placeholder="Enter movie title"
          className={s.movies_find_input}
          {...register('title')}
        ></input>
        <button className={s.movies_button}>Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
