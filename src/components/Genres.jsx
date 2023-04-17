import React from "react";
import GenresCard from "./GenresCard"; 

const Genres = (genres) => {
  genres = genres.genres.genres;

  return (
    <div className="genres">
      <div className="line"></div>
      <div className="genres__container">
        <h3>Genres: </h3>
        <div className="genres__genre">
          {genres && genres.length === 0 && <p>Carregando...</p>}
          {genres &&
            genres.length > 0 &&
            genres.map((genres) => (
              <GenresCard key={genres.id} genres={genres} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Genres;
