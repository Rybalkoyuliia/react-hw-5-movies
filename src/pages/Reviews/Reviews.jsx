import ReviewInfo from 'components/ReviewInfo/ReviewInfo';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviwes } from 'services/API';
import s from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchMovieReviwes(id)
      .then(data => setReviews(data))
      .catch(err => setError(err));
  }, [id]);

  if (!reviews) {
    return;
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
