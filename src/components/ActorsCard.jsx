import React from "react";
import { Link } from "react-router-dom";
import notfound from "../assets/img/notfound.png";

const imageUrl = import.meta.env.VITE_IMG;

const ActorsCard = (data) => {
  data = data.data;
  let img = imageUrl + data.profile_path;

  // console.log(data)

  return (
    <div className="actorcard">
      <Link to={`/actor/${data.id}`} className="actorcard__container">
        {img === "https://image.tmdb.org/t/p/w500null" ? (
          <img src={notfound} alt={data.title} className="actorcard__img" />
        ) : (
          <img src={img} alt={data.title} className="actorcard__img" />
        )}
        <div className="actorcard__desc">
          <h4>{data.name}</h4>
          <p>{data.character}</p>
        </div>
      </Link>
    </div>
  );
};

export default ActorsCard;
