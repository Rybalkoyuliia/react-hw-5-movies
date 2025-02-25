import CastInfo from 'components/CastInfo/CastInfo';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/API';
import s from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchMovieCredits(id)
      .then(data => setCast(data))
      .catch(err => setError(err));
  }, [id]);

  if (!cast) {
    return;
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
