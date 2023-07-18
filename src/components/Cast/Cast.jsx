import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits} from '../../services/mtdb-api';
import { Loader } from '../Loader';
import defaultPhoto from '../../images/no-photo.png';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams(null);

  useEffect(() => {
    const getCastById = async () => {
      try{
        setIsLoading(true);
        const data = await getMovieCredits(id);
        const cast = data.cast;
        if (cast.length === null) {
          return Notify.failure('Oops! Something went wrong!');
        }
        setCast(cast);
      }
      catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getCastById();
  }, [id]);

	return (
    <>
      {isLoading && <Loader />}
      {error && <p>Oops! Something went wrong!</p>}
      {cast.length > 0 ? (
        <ul>
          {cast.map(actor => {
            const actorsPhoto = actor.profile_path
              ? `https://image.tmdb.org/t/p/w92${actor.profile_path}`
              : defaultPhoto;
            return (
              <li key={actor.id}>
                <img src={actorsPhoto} alt="NonPhoto" />
                <p>{actor.original_name}</p>
                <p>Character: {actor.character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any casts for this movie.</p>
      )}
    </>
	)
}

export default Cast;
