import React from 'react';
import { fetchMoviesByQuery } from 'services/API';
import useHttp from 'hooks/useHttp';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import SearchForm from 'components/SearchForm/SearchForm';
import { useSearchParams } from 'react-router-dom';
import EmptySearch from 'components/EmptySearch/EmptySearch';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [movies, error, loading] = useHttp(fetchMoviesByQuery, query);

  const handleSearchForm = movieTitle => {
    setSearchParams(movieTitle ? { query: movieTitle } : {});
  };

  if (!movies) {
    return;
  } else if (error) {
    return;
  }

  return (
    <>
      <SearchForm handleTitle={handleSearchForm} />
      {loading && <Loader />}
      {query && !loading && movies?.results.length > 0 ? (
        <MoviesList movies={movies} link="" />
      ) : query && !loading ? (
        <EmptySearch />
      ) : null}
    </>
  );
};

export default Movies;
