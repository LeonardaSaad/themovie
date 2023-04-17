import React from "react";
import Companies from "./Companies";

const ProductionCompanios = (movie) => {
  movie = movie.movie.production_companies;
  return (
    <div className="prod-companies">
      <div className="line"></div>
      <div className="prod-companies__container">
        <h3>Production: </h3>
        <div className="prod-companies__companies">
          {movie && movie.length === 0 && <p>Carregando...</p>}
          {movie &&
            movie.length > 0 &&
            movie.map((companies) => (
              <Companies key={companies.id} companies={companies} />
            ))}
        </div>
      </div>

      <div className="line"></div>
    </div>
  );
};

export default ProductionCompanios;
