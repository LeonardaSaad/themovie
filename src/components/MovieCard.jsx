import React from "react";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import notFound from "../assets/img/notfound.png";

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = (movie, showLink = true) => {
  movie = movie.movie;

  const img = imageUrl + movie.poster_path;

  return (
    <div className="movie-card movie-card-actor">
      <Link
        to={`/movie/${movie.id}`}
        className="movie-card__movie movie-card-actor__movie"
      >
        {img === "https://image.tmdb.org/t/p/w500null" ? (
          <img src={notFound} alt={movie.title} className="actorcard__img" />
        ) : (
          <img
            src={img}
            alt={movie.title}
            className="movie-card__img movie-card-actor__img"
          />
        )}

        <div className="movie-card__details movie-card-actor__details">
          <p className="movie-card__vote movie-card-actor__vote">
            <StarIcon fontSize="small" style={{ fill: "#ffc525" }} />
            {Math.floor(movie.vote_average * 100) / 100}
          </p>
          <h2 className="movie-card__title movie-card-actor__title">
            {movie.title}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
