import { useEffect, useState } from "react";
import { getFilmList } from "../../service/service";
import { MovieList } from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      const data = await getFilmList(query);
      setFilms(data.results);
      console.log(data);
    };
    fetchData();
  }, [query]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchQuery = event.target.search.value;
    if (searchQuery === "") {
      alert("Please enter a search term!");
      return;
    }
    setSearchParams({ query: searchQuery });
  };

  console.log(films);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
      {films.length > 0 && <MovieList movies={films} />}
    </>
  );
};

export default MoviesPage;
