import { getMovieDetails } from '../services/mtdb-api';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams, Link } from 'react-router-dom';
import { GoBack, MovieInfo, Aditional } from './MovieDetails.styled';
import { Loader } from '../components/Loader';
import defaultImage from '../images/no-image.jpg';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Section } from '../components/Section';

const MovieDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [instantMovie, setInstantMovie] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const getMovieById = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieDetails(id);
        if (data === null) {
          return Notify.failure('Oops! Something went wrong!');
        }
        setInstantMovie(data);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieById();
  }, [id]);

  const posterUrl = (instantMovie?.poster_path)
    ? `https://image.tmdb.org/t/p/w200${instantMovie.poster_path}`
    : defaultImage;

  const userScore = instantMovie ? instantMovie.vote_average * 10 : null;

  return (
    <main>
      {isLoading && <Loader />}
      {error && <p>Oops! Something went wrong!</p>}
      <GoBack to={backLinkHref.current}>← Go back</GoBack>
      {instantMovie && (
        <Section>
          <MovieInfo>
            <img src={posterUrl} alt='error' />
            <div>
              <h2>{instantMovie.original_title}</h2>
              <p>User Score: {userScore}%</p>
              <h2>Overview</h2>
              <p>{instantMovie.overview ?? 'There is no review'}</p>
              <h2>Genres</h2>
              <p>{instantMovie.genres.map(genre => genre.name).join(' ')}</p>
            </div>
          </MovieInfo>
          <Aditional>
            <h2>Aditional informations</h2>
            <ul>
              <li>
                <Link to={'cast'}>cast</Link>
              </li>
              <li>
                <Link to={'reviews'}>reviews</Link>
              </li>
            </ul>
          </Aditional>
        </Section>
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
