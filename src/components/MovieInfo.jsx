import React from "react";
import Moment from "moment";

const MovieInfo = props => {
  Moment.locale("en");
  return (
    <div className="row">
      <div className="row">
        <a
          onClick={() => {
            props.closeMovieInfo();
          }}
          className="btn-floating btn-large cyan"
        >
          <i className="material-icons">keyboard_backspace</i>
        </a>
      </div>
      <div className="row">
        <div className="col s12 m4">
          {props.currentMovie.poster_path == null ? (
            <img
              className="responsive-img"
              src={"https://mymdb.comyn.pw/img/posters/noposter.jpg"}
              alt="No Poster Found"
            />
          ) : (
            <img
              className="responsive-img"
              src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`}
              alt={`${props.title} Poster`}
            />
          )}
        </div>
        <div className="col s12 m8">
          <div className="info-container">
            <div className="row">
              <h3>{props.currentMovie.title}</h3>
            </div>
            <div className="row">
              <p className="left">
                Release Date:
                <span className="badge">
                  {Moment(props.currentMovie.release_date).format("d MMM YYYY")}
                </span>
              </p>
              <p className="right">
                Rating:
                <span className="badge">{props.currentMovie.vote_average}</span>
              </p>
            </div>
            <div className="row">
              <p>{props.currentMovie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
