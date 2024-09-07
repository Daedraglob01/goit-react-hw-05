import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTdmNGExMjk5YWMxNDMxNWE1OWRkMWE0ZWM4MGVlMCIsIm5iZiI6MTcyNTYyNDY0Ny4zMjk3NTEsInN1YiI6IjY2ZGFlNTlhNjY2ZjNhMjRlNzIxYmFjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YQtRPkRe8RkRSubIgRZFQp4ROPmSr9noVgtNYn5zCdE",
  },
});

export const getFilm = async () => {
  const { data } = await instance.get("/trending/movie/day?language=en-US");
  return data.results;
};
export const getFilmById = async (id) => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};
export const getReviewsById = async (id) => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data;
};
export const getCastById = async (id) => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data;
};
export const getFilmList = async (query) => {
  const { data } = await instance.get(`/search/movie?query=${query}`);
  return data;
};