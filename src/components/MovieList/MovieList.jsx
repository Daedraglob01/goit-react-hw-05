import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

export const MovieList = ({ movies }) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w200";
  const location = useLocation();

  return (
    <>
      {movies && (
        <ul className={s.list}>
          {movies.map((movie) => (
            <li key={movie.id} className={s.item}>
              <Link to={`/movies/${movie.id}`} state={location}>
                <img src={imageBaseUrl + movie.poster_path} alt={movie.original_title} />
              </Link>
              {movie.original_title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
