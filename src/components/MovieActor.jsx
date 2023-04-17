import React from "react";
import useFetch from "../Hook/useFetch";
import MovieCard from "./MovieCard";

const personURL = import.meta.env.VITE_PERSON;
const apikey = import.meta.env.VITE_API_KEY;

const MovieActor = (id) => {
  const [data] = useFetch(`${personURL}/${id.id}/movie_credits?${apikey}`, false);
  console.log(data.cast)

  return <div>MovieActor
    <MovieCard movie={data.cast} />
  </div>;
};

export default MovieActor;
