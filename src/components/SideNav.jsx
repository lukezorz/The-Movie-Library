import React, { Component } from "react";

class SideNav extends Component {
  state = {
    nowPlayingExt: "/movie/now_playing",
    discoverExt: "/discover/movie",
    popularExt: "/movie/popular",
    upcomingExt: "/movie/upcoming"
  };

  handleClick = props => {
    this.props.handleSearch({
      baseUrl: props.baseUrl,
      baseUrlExt: props.baseUrlExt,
      searchTerm: props.searchTerm,
      pageNumber: props.pageNumber,
      genreId: props.genreId,
      pageNumber: 1
    });
  };

  render() {
    return (
      <ul id="slide-out" className="sidenav #455a64 blue-grey darken-2">
        <li>
          <a
            href="#!"
            className="waves-effect waves-teal"
            onClick={() =>
              this.handleClick({
                baseUrl: this.props.baseUrl,
                baseUrlExt: this.state.nowPlayingExt
              })
            }
          >
            Now Playing
          </a>
        </li>
        <li>
          <ul className="collapsible collapsible-accordion ">
            <li>
              <a
                href="#!"
                className="collapsible-header waves-effect waves-teal"
              >
                Genres
              </a>
              <div className="collapsible-body blue-grey darken-1">
                <ul>
                  {this.props.genreList.map(genre => (
                    <li key={genre.id}>
                      <a
                        href="#!"
                        onClick={() =>
                          this.handleClick({
                            baseUrl: this.props.baseUrl,
                            baseUrlExt: this.state.discoverExt,
                            searchTerm: this.props.searchTerm,
                            pageNumber: this.props.pageNumber,
                            genreId: genre.id
                          })
                        }
                      >
                        {genre.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#!"
            className="waves-effect waves-teal"
            onClick={() =>
              this.handleClick({
                baseUrl: this.props.baseUrl,
                baseUrlExt: this.state.popularExt
              })
            }
          >
            Popular
          </a>
        </li>
        <li>
          <a
            href="#!"
            className="waves-effect waves-teal"
            onClick={() =>
              this.handleClick({
                baseUrl: this.props.baseUrl,
                baseUrlExt: this.state.upcomingExt
              })
            }
          >
            Upcoming
          </a>
        </li>
      </ul>
    );
  }
}

export default SideNav;
