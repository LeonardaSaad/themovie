import React, { Component, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import useFetch from "../Hook/useFetch";

const searchURL = import.meta.env.VITE_SEARCH;
const apikey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const [data] = useFetch(`${searchURL}?${apikey}&query=${query}`)

  return (
    <div className="container">
      <h2 className="container__title">
        Results for: <span className="search__query-text">{query}</span>
      </h2>
      <div className="container__line"></div>
      <div className="container__movie">
        {data.length === 0 && <p>Carregando...</p>}
        {data.length > 0 &&
          data.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;
