import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSearchMovies } from '../services/mtdb-api';
import { MoviesList } from '../components/MoviesList';
import { Searchbar } from '../components/Searchbar';
import { Loader } from '../components/Loader';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ErrorMessage } from '../components/ErrorMessage';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  // const [totalHits, setTotalHits] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = query => {
    if (!query) {
      return Notify.failure('Please, write something');
    }
    setSearchParams({ query: query.trim() });
    // setSearchInput('');
  };

  useEffect(() => {
    const getImagesFromAPI = async (query) => {
      try {
        setIsLoading(true);
        const data = await getSearchMovies(query);
        if (data.results.length === 0) {
          return Notify.failure('There is no movies with this title');
        }
        setMovies(data.results);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    const searchValue = searchParams.get('query');
    if (searchValue) {
      getImagesFromAPI(searchValue);
    }
  }, [searchParams]);

  return (
    <main>
      <Searchbar onSubmit={handleSubmit} />
      {movies.length > 0 && <MoviesList movies={movies} />}
      {isLoading && <Loader />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </main>
  );
};

export default Movies;
