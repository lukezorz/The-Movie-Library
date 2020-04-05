import React from "react";
import SideNav from "./SideNav";

const Nav = props => {
  return (
    <div className="navbar-fixed">
      <SideNav
        baseUrl={props.baseUrl}
        genreList={props.genreList}
        handleSearch={props.handleSearch}
      />
      <nav className="blue-grey darken-3">
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="center">
            <li className="title-large hide-on-med-and-down">
              <a
                href="#!"
                onClick={() =>
                  props.handleSearch({
                    baseUrl: props.baseUrl,
                    baseUrlExt: "/movie/top_rated",
                    searchTerm: null,
                    pageNumber: 1
                  })
                }
              >
                The Movie Library
              </a>
            </li>
            <li className="title-med hide-on-large-only hide-on-small-only">
              <a href="#!">TML</a>
            </li>
            <li className="menu-med-large">
              <a
                href="#"
                data-target="slide-out"
                className="sidenav-trigger hide-on-small-only show-on-large"
              >
                <i className="material-icons">menu</i>
              </a>
            </li>
            <li className="menu-small">
              <a
                href="#"
                data-target="slide-out"
                className="sidenav-trigger hide-on-med-and-up"
              >
                <i className="material-icons">menu</i>
              </a>
            </li>
            <li className="searchBar">
              <form onSubmit={props.handleSubmit}>
                <div className="input-field">
                  <input
                    id="search"
                    type="search"
                    required
                    placeholder={props.searchTerm}
                    onChange={props.handleChange}
                  />
                  <label className="label-icon">
                    <i className="material-icons">search</i>
                  </label>
                  <i className="material-icons">close</i>
                </div>
              </form>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
