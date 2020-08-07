import React from "react";
import "./Movies.css";
import { connect } from "react-redux";

const Movies = ({ movies }) => {
  return (
    <div className="container">
      {typeof movies === "string" ? (
        <h3>{movies} </h3>
      ) : movies.length ? (
        movies.map((movie) => {
          return (
            <div key={movie.imdbID} className="poster">
              <div className="img-container">
                <img
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "https://www.movienewsletters.net/photos/000000H1.jpg"
                  }
                  alt="logo"
                />
              </div>
              <h3>{movie.Title}</h3>
            </div>
          );
        })
      ) : (
        <h3>Search for your fav Movie</h3>
      )}
    </div>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(Movies);
