import { MovieList } from "../../components/MovieList/MovieList";

import { useEffect, useState } from "react";
import { getFilm } from "../../service/service";

const MainPage = () => {
  const [weeklyMovies, setWeeklyMovies] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getFilm();
      setWeeklyMovies(data);

    };
    fetchData();
  }, []);
  
  return (
    <>
      <MovieList movies={weeklyMovies} />
    </>
  );
};

export default MainPage;
