import { useEffect, useState } from 'react';
import { getTrendsMovies } from '../services/mtdb-api'
import { MoviesList } from '../components/MoviesList'
import { Section } from '../components/Section';
import { Loader } from '../components/Loader';
import { HTTP_ERR_MSG } from '../constants'
import {ErrorMessage} from '../components/ErrorMessage';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {

    const fetchTrendsMovies = async () => {
      try{
        setIsLoading(true);
        setError(null);
        const data = await getTrendsMovies();
        const movies = data.results;
        setMovies(movies);
      } catch (error) {
        setHasError(true);
        console.error(error);
        setError(HTTP_ERR_MSG);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTrendsMovies()
  }, [])

  return (
    <main>
      <Section title="Trending today">
        {movies.length > 0 && <MoviesList movies={movies}/>}
        {isLoading && <Loader />}
        {hasError && <ErrorMessage>{error}</ErrorMessage>}
      </Section>
    </main>
  )
}












export default Home;
