import React from "react";

const GenresCard = (genres) => {
  genres = genres.genres;

  return (
    <div>
      <div className="genrescard">
        <h4>{genres.name}</h4>
      </div>
    </div>
  );
};

export default GenresCard;
