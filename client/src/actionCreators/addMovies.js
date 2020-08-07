export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_STATE = "ADD_STATE";

export const searchMovies = ({ query, pageNum }) => {
  return (dispatch) => {
    dispatch(addState("loading..."));
    fetch(`http://localhost:5000/api/movies/${query}/${pageNum}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.Response === "False") {
          dispatch(addState("Sorry!, Movie was not Found"));
          return;
        }
        localStorage.setItem(query + pageNum, JSON.stringify(res.Search));
        setTimeout(function () {
          localStorage.removeItem(query + pageNum);
        }, 30000);
        dispatch(addMovies(res.Search));
      });
  };
};

export const addMovies = (moviesData = []) => {
  return { type: ADD_MOVIES, payload: moviesData };
};

export const addState = (state) => {
  return { type: ADD_STATE, payload: state };
};
