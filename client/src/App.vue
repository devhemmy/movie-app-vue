<template>
  <div>
    <h1 className="movie">
      Movie App
    </h1>
    <SearchForm
      @movies="moviesResults"
      @clearMovies="handleClear"
      @error="handleError"
    />
    <Movies :movies="movies" :error="noMovies" />
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue';
import Movies from '@/components/Movies.vue';
import { ref } from 'vue';

export default {
  name: 'App',
  components: { SearchForm, Movies },
  setup() {
    const movies = ref([]);
    const noMovies = ref('');
    const moviesResults = (moviesData) => {
      noMovies.value = '';
      movies.value = moviesData;
    };
    const handleClear = () => {
      noMovies.value = '';
      movies.value = [];
    };

    const handleError = (error) => {
      noMovies.value = error;
    };

    return { movies, moviesResults, handleClear, handleError, noMovies };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
