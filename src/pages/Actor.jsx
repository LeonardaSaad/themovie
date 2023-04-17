import React from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import useFetch from "../Hook/useFetch";

const personURL = import.meta.env.VITE_PERSON;
const apikey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG;

const Actor = () => {
  const { id } = useParams();
  const [data] = useFetch(`${personURL}/${id}?${apikey}`, false);
  const [images] = useFetch(`${personURL}/${id}/images?${apikey}`, false);
  const [credits] = useFetch(
    `${personURL}/${id}/movie_credits?${apikey}`,
    false
  );

  const imgProfile = images.profiles;
  const actorCast = credits.cast;

  const img = imageUrl + data.profile_path;

  console.log(actorCast);

  return (
    <div className="actor">
      <div className="actor__container">
        <div className="actor__container-img-info">
          <div className="actor__img-info">
            <img src={img} alt={data.title} className="actor__img" />
            <div className="actor__place-of-birth actor__box">
              <h3>Place of birth</h3>
              <span>{data.place_of_birth}</span>
            </div>
            <div className="actor__birthday actor__box">
              <h3>Birthday</h3>
              <span>{data.birthday}</span>
            </div>
            <div className="actor__deathday actor__box">
              <h3>Death Day</h3>
              <span>{data.deathday}</span>
            </div>
            <div className="actor__gender actor__box">
              <h3>Gender</h3>
              {data.gender === 1 ? <span>Female</span> : <span>Male</span>}
            </div>
          </div>
        </div>

        <div className="actor__container-info">
          <div className="actor__title">
            <h2 className="actor__name">{data.name}</h2>
            <p className="actor__departament">{data.known_for_department}</p>
          </div>

          <div className="actor__bio">
            <div className="actor__containerT">
              <h3 className="actor__container-title">Biography</h3>
              <div className="line-cu"></div>
            </div>
            <p className="actor__content">{data.biography}</p>
          </div>

          <div className="actor__galery">
            <div className="actor__containerT">
              <h3 className="actor__container-title">Galery</h3>
              <div className="line-cu"></div>
            </div>
            <div className="actor__photos">
              {!imgProfile
                ? console.log("carregando")
                : imgProfile.map((img) => (
                    <img
                      key={img.file_path}
                      src={imageUrl + img.file_path}
                      alt={data.name}
                      className="actor__images"
                    />
                  ))}
            </div>
          </div>

          <div className="container__movie-credits">
            <div className="actor__containerT">
              <h3 className="actor__container-title">Movies</h3>
              <div className="line-cu"></div>
            </div>
            <div className="actor__movies">
              {!actorCast ? (
                <p>Carregando...</p>
              ) : (
                actorCast.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actor;

// https:api.themoviedb.org/3/person/3084/images?api_key=a18b0de65d53af7e621555368c6f3043
