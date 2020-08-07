const express = require("express");

const fetch = require("node-fetch");
const router = express.Router();

// Vanilla JS Catching use Map Set

const cache = new Map();

router.get("/movies/:movie/:page", async (req, res) => {
  const { movie, page } = req.params;
  const apiKEY = "517f1d84";

  if (cache.has(movie + page)) {
    console.log("Served From Node Cache");
    res.json(cache.get(movie + page));
  } else {
    console.log(movie + page);

    const data = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKEY}&s=${movie}&page=${page}`
    );

    const movies = await data.json();
    cache.set(movie + page, movies);

    res.json(movies);
  }
});

module.exports = router;
