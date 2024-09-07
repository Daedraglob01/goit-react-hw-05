import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { getFilmById } from "../../service/service";
import s from "./MovieDetailsPage.module.css";

const FilmDetailsPage = () => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w200";
  const [film, setFilm] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkRef = useRef(location.state ?? "/");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFilmById(movieId);
      setFilm(data);
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      <NavLink to={backLinkRef.current} className={s.backLink}>
        Go back
      </NavLink>
      {film && (
        <div>
          <div className={s.detailsWrapper}>
            <img src={imageBaseUrl + film.poster_path} alt={film.original_title} />
            <div className={s.filmInfo}>
              <h2>{film.original_title}</h2>
              <p>Rating {film.vote_average} / 10</p>
              <h3>Overview</h3>
              <p>{film.overview}</p>
              <h3>Genres:</h3>
              <ul>
                {film.genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <nav>
              <ul>
                <li>
                  <NavLink to="cast">Cast</NavLink>
                </li>
                <li>
                  <NavLink to="reviews">Reviews</NavLink>
                </li>
              </ul>
            </nav>
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default FilmDetailsPage;
