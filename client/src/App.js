import React from "react";
import SearchForm from "./components/SearchForm";
import Movies from "./components/Movies";
function App() {
  return (
    <>
      <h1 className="movie" style={{ textAlign: "center" }}>
        {" "}
        Movie App
      </h1>
      <SearchForm />
      <Movies />
    </>
  );
}

export default App;
