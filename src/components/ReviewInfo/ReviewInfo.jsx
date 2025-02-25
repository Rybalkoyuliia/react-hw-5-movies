import React from 'react';
import s from './ReviewInfo.module.css';
import { unknownPerson } from 'assets/picture';

const ReviewInfo = ({ author, content, author_details }) => {
  const avatarSrc = author_details.avatar_path
    ? `https://image.tmdb.org/t/p/w500${author_details.avatar_path}`
    : unknownPerson;
  return (
    <li className={s.review_item}>
      <div>
        <img src={avatarSrc} alt={author} />
      </div>

      <p>
        <span className={s.author_name}>{author}: </span>
        {content}
      </p>
    </li>
  );
};

export default ReviewInfo;
