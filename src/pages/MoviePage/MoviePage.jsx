import React from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/API';
import s from './MoviePage.module.css';
import useHttp from 'hooks/useHttp';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie] = useHttp(fetchMovieById, id);

  if (!movie) {
    return <h1>Loading...</h1>;
  }

  const {
    original_title,
    release_date,
    vote_average,
    vote_count,
    overview,
    genres,
    poster_path,
    tagline,
  } = movie;
  const movieURL = `https://image.tmdb.org/t/p/w500${poster_path}`;
  return (
    <>
      <div className={s.movie_container}>
        <img src={movieURL} alt={tagline} />
        <ul className={s.movie_descr_list}>
          <li className={s.title_item}>
            <h3>
              {original_title} ({release_date.slice(0, 4)})
            </h3>
          </li>
          <li className={s.movie_descr_item}>
            <h4>Overview:</h4>
            <p className={s.descr}>{overview}</p>
          </li>
          <li className={s.movie_descr_item}>
            <h4>Rating:</h4>
            <ul>
              <li>
                <p className={s.descr}>
                  <span>Stars:</span> {Math.ceil(vote_average)}/10
                </p>
              </li>
              <li>
                <p className={s.descr}>
                  <span>Voters:</span> {vote_count} people
                </p>
              </li>
            </ul>
          </li>
          <li className={s.movie_descr_item}>
            <h4>Genres:</h4>
            <ul>
              {genres.map(genre => (
                <li key={genre.id} className={s.descr}>
                  {genre.name}
                </li>
              ))}
            </ul>
          </li>
          <li>
            <div className={s.additional_info_container}>
              <h2 className={s.additional_info_title}>
                Additional Information:
              </h2>
              <nav>
                <ul className={s.additional_info_list}>
                  <li className={s.additional_info_item}>
                    <NavLink to="cast">Cast</NavLink>
                  </li>
                  <li className={s.additional_info_item}>
                    <NavLink to="reviews">Reviews</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
