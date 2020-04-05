import React from "react";
import Movie from "./Movie";
import Pagination from "./Pagination";

const MovieList = props => {
  return (
    <React.Fragment>
      <Pagination
        pages={props.pages}
        baseUrl={props.baseUrl}
        baseUrlExt={props.baseUrlExt}
        handleClick={props.handleSearch}
        currentGenre={props.currentGenre}
        currentPage={props.currentPage}
        isTop={true}
        searchTerm={props.searchTerm}
      />
      <div className="row">
        <div className="col s12">
          {props.movies.map((movie, i) => {
            return (
              <Movie
                key={i}
                title={movie.title}
                poster={movie.poster_path}
                movieId={movie.id}
                viewMovieInfo={props.viewMovieInfo}
                closeMovieInfo={props.closeMovieInfo}
              />
            );
          })}
        </div>
      </div>
      <Pagination
        pages={props.pages}
        baseUrl={props.baseUrl}
        baseUrlExt={props.baseUrlExt}
        handleClick={props.handleSearch}
        currentGenre={props.currentGenre}
        currentPage={props.currentPage}
        searchTerm={props.searchTerm}
      />
    </React.Fragment>
  );
};

export default MovieList;
