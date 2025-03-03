import ReviewInfo from 'components/ReviewInfo/ReviewInfo';
import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviwes } from 'services/API';
import s from './Reviews.module.css';
import useHttp from 'hooks/useHttp';
import EmptySearch from 'components/EmptySearch/EmptySearch';

const Reviews = () => {
  const { id } = useParams();
  const [reviews] = useHttp(fetchMovieReviwes, id);

  if (!reviews) {
    return;
  }

  if (!reviews.results.length) {
    return <EmptySearch />;
  }

  return (
    <ul className={s.reviews_list}>
      {reviews.results.map(rev => (
        <ReviewInfo key={rev.id} {...rev} />
      ))}
    </ul>
  );
};

export default Reviews;
