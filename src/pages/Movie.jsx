import React, { useState, useEffect } from "react";
import useFetch from "../Hook/useFetch";
import MovieCard from "../components/MovieCard";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";

const moviesURL = import.meta.env.VITE_API;
const apikey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [data] = useFetch(`${moviesURL}/${id}?${apikey}`, false);

  return <div>{data && <MovieDetails movie={data} /> }</div>;
};



export default Movie;
