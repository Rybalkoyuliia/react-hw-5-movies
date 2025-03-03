import CastInfo from 'components/CastInfo/CastInfo';
import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/API';
import s from './Cast.module.css';
import useHttp from 'hooks/useHttp';
import EmptySearch from 'components/EmptySearch/EmptySearch';

const Cast = () => {
  const { id } = useParams();
  const [cast] = useHttp(fetchMovieCredits, id);

  if (!cast) {
    return <h4>Loading...</h4>;
  }
  if (!cast.cast.length) {
    return <EmptySearch />;
  }
  return (
    <ul className={s.cast_list}>
      {cast.cast.map(cast => (
        <CastInfo key={cast.cast_id} {...cast} />
      ))}
    </ul>
  );
};

export default Cast;
