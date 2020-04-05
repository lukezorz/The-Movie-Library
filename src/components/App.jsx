import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import MovieList from "./MovieList";
import MovieInfo from "./MovieInfo";
import M from "materialize-css/dist/js/materialize.min.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      genreList: [],
      baseUrl: null,
      baseUrlExt: "",
      searchTerm: "",
      previousSearchTerm: "",
      totalPages: 0,
      currentGenre: 0,
      currentPage: 1,
      currentMovie: null,
      genreExt: "/genre/movie/list",
      searchExt: "/search/movie",
      topRatedExt: "/movie/top_rated"
    };
    this.apiKey = process.env.REACT_APP_TMDB_API_KEY;
    this.baseUrl = process.env.REACT_APP_BASE_URL;
  }

  componentDidMount() {
    this.fetchGenres(this.state.genres);
    this.handleSearch({
      baseUrl: this.baseUrl,
      baseUrlExt: this.state.topRatedExt,
      genre: null,
      searchTerm: null,
      pageNumber: 1
    });

    let elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems, {});

    let sidenav = document.querySelector("#slide-out");
    M.Sidenav.init(sidenav, {});
  }

  fetchGenres = () => {
    fetch(`${this.baseUrl}${this.state.genreExt}?api_key=${this.apiKey}`)
      .then(data => data.json())
      .then(data => {
        this.setState({
          genreList: [...data.genres]
        });
      })
      .catch(error => console.log(error));
  };

  handleNewSearch = e => {
    e.preventDefault();
    e.target.querySelector("input").blur();

    fetch(
      `${this.baseUrl}${this.state.searchExt}?api_key=${this.apiKey}&query=${this.state.searchTerm}`
    )
      .then(data => data.json())
      .then(data => {
        this.setState({
          previousSearchTerm: this.state.searchTerm,
          movies: [...data.results],
          baseUrl: this.baseUrl,
          baseUrlExt: this.state.searchExt,
          totalPages: data.total_pages,
          currentPage: 1
        });
      })
      .catch(error => console.log(error));
  };

  handleSearch = props => {
    fetch(
      `${props.baseUrl}${props.baseUrlExt}?api_key=${this.apiKey}${
        props.searchTerm == null ? `` : `&query=${props.searchTerm}`
      }${props.genreId == null ? `` : `&with_genres=${props.genreId}`}&page=${
        props.pageNumber
      }`
    )
      .then(data => data.json())
      .then(data => {
        this.setState({
          currentGenre: props.genreId,
          movies: [...data.results],
          baseUrl: props.baseUrl,
          baseUrlExt: props.baseUrlExt,
          totalPages: data.total_pages,
          currentPage: props.pageNumber
        });
        this.handleChange("");
      })
      .catch(error => console.log(error));
  };

  viewMovieInfo = movieId => {
    const filteredMovie = this.state.movies.filter(
      movie => movie.id === movieId
    );

    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;

    this.setState({ currentMovie: newCurrentMovie });
  };

  closeMovieInfo = () => {
    this.setState({ currentMovie: null });
  };

  handleChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const {
      genreList,
      previousSearchTerm,
      baseUrl,
      baseUrlExt,
      totalPages,
      currentGenre,
      currentPage,
      movies,
      currentMovie
    } = this.state;
    return (
      <div className="App">
        <Nav
          baseUrl={this.baseUrl}
          baseUrlExt={baseUrlExt}
          searchTerm={previousSearchTerm}
          handleSearch={this.handleSearch}
          handleSubmit={this.handleNewSearch}
          handleChange={this.handleChange}
          genreList={genreList}
        />
        <div className="container">
          <div className="row"></div>
          {currentMovie === null ? (
            <React.Fragment>
              <MovieList
                movies={movies}
                pages={totalPages}
                currentGenre={currentGenre}
                currentPage={currentPage}
                baseUrl={baseUrl}
                baseUrlExt={baseUrlExt}
                searchTerm={previousSearchTerm}
                handleSearch={this.handleSearch}
                viewMovieInfo={this.viewMovieInfo}
                closeMovieInfo={this.closeMovieInfo}
              />
            </React.Fragment>
          ) : (
            <MovieInfo
              currentMovie={currentMovie}
              closeMovieInfo={this.closeMovieInfo}
            />
          )}
          <div className="footer row right">
            <h6>Powered by </h6>
            <a href="https://www.themoviedb.org/" target="_blank">
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt="Powered by TMDB"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
