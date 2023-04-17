import React, { Component, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import useFetch from "../Hook/useFetch";
import { BiSearchAlt2 } from "react-icons/bi";

const moviesURL = import.meta.env.VITE_API;
const apikey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [data] = useFetch(`${moviesURL}top_rated?${apikey}`);

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);

    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  };
  // console.log(data)

  return (
    <div className="container">
      <div className="container__bigsearch">
        <div className="container__search">
          <h2 className="container__search-title">
            What movie are you looking for?
          </h2>
          <form className="container__form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search movie"
              className="container__input"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button type="submit" className="container__button">
              <BiSearchAlt2 fontSize="large" />
            </button>
          </form>
        </div>
      </div>
      <h2 className="container__title">Best Movies:</h2>
      <div className="container__line"></div>
      <div className="container__movie">
        {data.length === 0 && <p>Carregando...</p>}
        {data.length > 0 &&
          data.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;
