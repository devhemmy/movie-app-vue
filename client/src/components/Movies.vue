<template>
  <div>
    <h3 v-if="error">{{ error }}</h3>
    <div v-else-if="movies?.length" class="container">
      <div v-for="movie in movies" :key="movie.imdbID" class="poster">
        <div className="img-container">
          <img
            v-if="movie.Poster !== 'N/A'"
            :src="movie.Poster"
            alt="thumbnail"
          />
          <img
            v-else
            src="https://www.movienewsletters.net/photos/000000H1.jpg"
            alt="placeHolder"
          />
        </div>
        <h3>{{ movie.Title }}</h3>
      </div>
    </div>
    <h3 v-else>Search for your fav Movie</h3>
  </div>
</template>

<script>
export default {
  props: ['movies', 'error'],
};
</script>

<style scoped>
.container {
  margin-top: 5%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  width: 100%;
}

img {
  width: 100%;
  height: 100%;
}

h3 {
  text-align: center;
  font-size: 28px;
}

@media screen and (min-width: 769px) {
  .img-container {
    height: 350px;
  }
  .poster {
    width: 30%;
    margin: 1%;
  }
  h3 {
    text-align: center;
    font-size: 18px;
  }
}

@media screen and (max-width: 768px) {
  .poster {
    width: 45%;
    margin: 1%;
  }
  .img-container {
    height: 250px;
  }
}
</style>
