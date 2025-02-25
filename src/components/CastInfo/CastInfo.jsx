import React from 'react';
import s from './CastInfo.module.css';
import { unknownPerson } from 'assets/picture';

const CastInfo = ({ original_name, profile_path, character }) => {
  const avatarSrc = profile_path
    ? `https://image.tmdb.org/t/p/w500${profile_path}`
    : unknownPerson;
  return (
    <li className={s.cast_item}>
      <div className={s.img_container}>
        <img src={avatarSrc} alt={original_name} />
      </div>

      <h5>{original_name}</h5>
      <h6>({character})</h6>
    </li>
  );
};

export default CastInfo;
