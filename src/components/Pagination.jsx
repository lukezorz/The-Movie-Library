import React from "react";

const Pagination = props => {
  const pageLinks = [];
  const startAt = props.currentPage - 2 < 1 ? 1 : props.currentPage - 2;
  const endAt =
    props.currentPage + 2 > props.pages ? props.pages : props.currentPage + 2;

  for (let index = startAt; index <= endAt; index++) {
    let active = props.currentPage === index ? "active" : "";
    pageLinks.push(
      <li
        className={`waves-effect ${active}`}
        key={index}
        onClick={() =>
          props.handleClick({
            baseUrl: props.baseUrl,
            baseUrlExt: props.baseUrlExt,
            pageNumber: index,
            genreId: props.currentGenre,
            searchTerm: props.searchTerm
          })
        }
      >
        <a href="#!">{index}</a>
      </li>
    );
  }
  return (
    <React.Fragment>
      {props.pages > 1 ? (
        <div className="row">
          <div className="col s12">
            <ul className={`pagination ${props.isTop ? "right-align" : ""}`}>
              <li
                className={`waves-effect ${
                  props.currentPage === 1 ? "disabled" : ""
                }`}
              >
                <a href="#!" style={{ padding: "0" }}>
                  <i
                    className="material-icons"
                    onClick={
                      props.currentPage === 1
                        ? null
                        : () =>
                            props.handleClick({
                              baseUrl: props.baseUrl,
                              baseUrlExt: props.baseUrlExt,
                              pageNumber: 1,
                              genreId: props.currentGenre,
                              searchTerm: props.searchTerm
                            })
                    }
                  >
                    first_page
                  </i>
                </a>
                <a href="#!" style={{ padding: "0" }}>
                  <i
                    className="material-icons"
                    onClick={
                      props.currentPage === 1
                        ? null
                        : () =>
                            props.handleClick({
                              baseUrl: props.baseUrl,
                              baseUrlExt: props.baseUrlExt,
                              pageNumber: props.currentPage - 1,
                              genreId: props.currentGenre,
                              searchTerm: props.searchTerm
                            })
                    }
                  >
                    chevron_left
                  </i>
                </a>
              </li>
              {pageLinks}
              <li
                className={`waves-effect ${
                  props.currentPage === props.pages ? "disabled" : ""
                }`}
              >
                <a href="#!" style={{ padding: "0" }}>
                  <i
                    className="material-icons"
                    onClick={
                      props.currentPage === props.pages
                        ? null
                        : () =>
                            props.handleClick({
                              baseUrl: props.baseUrl,
                              baseUrlExt: props.baseUrlExt,
                              pageNumber: props.currentPage + 1,
                              genreId: props.currentGenre,
                              searchTerm: props.searchTerm
                            })
                    }
                  >
                    chevron_right
                  </i>
                </a>
                <a href="#!" style={{ padding: "0" }}>
                  <i
                    className="material-icons"
                    onClick={
                      props.currentPage === props.pages
                        ? null
                        : () =>
                            props.handleClick({
                              baseUrl: props.baseUrl,
                              baseUrlExt: props.baseUrlExt,
                              pageNumber: props.pages,
                              genreId: props.currentGenre,
                              searchTerm: props.searchTerm
                            })
                    }
                  >
                    last_page
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default Pagination;
