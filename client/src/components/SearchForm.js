import React, { useState } from "react";
import "./SearchForm.css";
import { connect } from "react-redux";
import { searchMovies, addMovies } from "../actionCreators/addMovies";
import { deleteMovies } from "../actionCreators/deleteMovies";

const SearchForm = ({ searchMovies, deleteMovies, addMovies }) => {
  const [query, setQuery] = useState("");
  const [Timer, setTimer] = useState();
  const [pageNum, setPageNum] = useState(1);

  const handleCache = (query) => {
    addMovies(JSON.parse(localStorage.getItem(query)));
    console.log("Served From Browser Cache");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (localStorage.hasOwnProperty(query + pageNum)) {
      handleCache(query + pageNum);
    } else {
      searchMovies({ query, pageNum });
    }

    setQuery("");
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    deleteMovies();
    clearTimeout(Timer);

    const termporarySearch = (query) => {
      if (localStorage.hasOwnProperty(query + pageNum)) {
        handleCache(query + pageNum);
      } else {
        console.log(pageNum);
        searchMovies({ query, pageNum });
      }
    };

    if (e.target.value.length >= 3) {
      let searchTimer = setTimeout(termporarySearch, 300, e.target.value);
      setTimer(searchTimer);
    }
  };
  return (
    <>
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <label htmlFor="movie">Search Your fav Movie :</label>
          <input
            minLength={3}
            value={query}
            type="text"
            onChange={handleChange}
            name="movie"
            id="movie"
            required
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <label style={{ margin: "14px" }}>
              page number:
              <input
                type="number"
                defaultValue={pageNum}
                onChange={(e) => setPageNum(e.target.value)}
                min="1"
                style={{ width: "40px" }}
              />
            </label>
            <input type="submit" value="Search" />
          </div>
        </form>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={() => deleteMovies()}> Clear Movies</button>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  searchMovies: (data) => dispatch(searchMovies(data)),
  addMovies: (data) => dispatch(addMovies(data)),
  deleteMovies: () => dispatch(deleteMovies()),
});

export default connect(null, mapDispatchToProps)(SearchForm);
