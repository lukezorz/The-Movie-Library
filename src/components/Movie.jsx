import React from "react";

const Movie = props => {
  return (
    <div className="col s12 m6 l3">
      <div className="card">
        <a href="#!" onClick={() => props.viewMovieInfo(props.movieId)}>
          <div className="card-image waves_effect waves_block waves-Light">
            {props.poster == null ? (
              <img
                className="responsive-img"
                src={"https://mymdb.comyn.pw/img/posters/noposter.jpg"}
                alt="No Poster Found"
              />
            ) : (
              <img
                className="responsive-img"
                src={`http://image.tmdb.org/t/p/w185${props.poster}`}
                alt={`${props.title} Poster`}
              />
            )}
            <span className="card-title">{props.title}</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Movie;
