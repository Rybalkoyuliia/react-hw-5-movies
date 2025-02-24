import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWRhN2ZhMzBjMjg4NTU0NDNmN2YyMDFmNDNlZTRjOCIsIm5iZiI6MTc0MDM2ODg2Ny43MzgsInN1YiI6IjY3YmJlYmUzYmY1MjFmMTkwZjBhODk2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EFwr4LaQKEuESAlDYYsAzQxG9q4WvzFF1ly-0RKrvi4';

axios.defaults.headers.common['accept'] = 'application/json';

// axios.defaults.headers.common['api_key'] = '31da7fa30c28855443f7f201f43ee4c8';

export const fetchFavoriteMovies = async () => {
  try {
    const { data } = await axios.get('/trending/movie/day', {
      params: {
        language: 'en-US',
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};
