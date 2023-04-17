import React, { Component, useState, useEffect } from "react";
import useFetchCast from "../Hook/useFetchCast";
import { useParams } from "react-router-dom";
import ActorsCard from "./ActorsCard";

const moviesURL = import.meta.env.VITE_API;
const apikey = import.meta.env.VITE_API_KEY;

const Cast = () => {
  const { id } = useParams();
  let [data] = useFetchCast(`${moviesURL}/${id}/credits?${apikey}`);

  return (
    <div className="cast">
      {data.length === 0 && <p>Carregando...</p>}
      {data.length > 0 &&
        data.map((actor) => <ActorsCard key={actor.id} data={actor} />)}
    </div>
  );
};

export default Cast;
