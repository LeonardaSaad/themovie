import React from "react";
import StarIcon from "@mui/icons-material/Star";
import Cast from "./Cast";
import ProductionCompanios from "./ProductionCompanios";
import Genres from "./Genres";

const imageUrl = import.meta.env.VITE_IMG;

const MovieDetails = (movie) => {
  movie = movie.movie;

  function Runtime(movie) {
    const hour = Math.trunc(movie.runtime / 60);
    const min = movie.runtime % 60;
    return `${hour} h ${min} min`;
  }

  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="movie-details">
      <div
        className="movie-details__bigcontainer"
        style={{ backgroundImage: `url(${imageUrl + movie.backdrop_path})` }}
      >
        <div className="movie-details__container">
          <div className="div">
            <img
              src={imageUrl + movie.poster_path}
              alt={movie.title}
              className="movie-card__img"
            />
          </div>

          <div className="movie-details__movie-desc">
            <h1 className="movie-details__title">{movie.title}</h1>

            <div className="movie-details__subtitle">
              <p className="movie-details__date">{movie.release_date}</p>
              <p>.</p>
              <p className="movie-details__duration">{Runtime(movie)}</p>
            </div>

            <div className="movie-details__reviews">
              <div className="movie-details__vote-count">
                <div className="movie-details__box">
                  <p className="movie-details__simpletext">RATING</p>
                  <div className="movie-details__textfield gradient">
                    <StarIcon fontSize="small" style={{ fill: "#ffc525" }} />
                    {Math.floor(movie.vote_average * 100) / 100}
                  </div>
                </div>
                <div className="movie-details__box">
                  <p className="movie-details__simpletext">VOTE COUNTER</p>
                  <div className="movie-details__textfield gradient">
                    <p>{movie.vote_count}</p>
                  </div>
                </div>
                <div className="movie-details__box">
                  <p className="movie-details__simpletext">POPULARITY</p>
                  <div className="movie-details__textfield gradient">
                    <p>{movie.popularity}</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="movie-details__tagline">{movie.tagline}</h3>

            <div className="movie-details__content">
              <h3 className="movie-details__topic">Synopsis</h3>
              <p className="movie-details__text">{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="description">
        <div className="description__description">
          <div className="description__info">
            <div className="description__naosei">
              <h3 className="description__title">Revenue:</h3>
              <p className="description__content">
                {USDollar.format(movie.revenue)}
              </p>
            </div>

            <div className="line line-naosei"></div>

            <div className="description__naosei">
              <h3 className="description__title">Budget:</h3>
              <p className="description__content">
                {USDollar.format(movie.budget)}
              </p>
            </div>
          </div>
          <div className="description__genres">
            <Genres genres={movie} />
          </div>

          <div className="description__outrasinfos">
            <ProductionCompanios movie={movie} />
          </div>

          <div className="description__cast">
            <h3 className="description__subtitle">Atores:</h3>
            <Cast />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
