import { ref } from 'vue';

export const searchMovies = () => {
  const error = ref(null);
  const movies = ref([]);

  const handleCache = (query) => {
    movies.value = JSON.parse(localStorage.getItem(query));
    console.log('Served From Browser Cache');
  };

  const loadMovies = async ({ query, pageNum }) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/movies/${query}/${pageNum}`
      );
      const moviesData = await res.json();
      if (moviesData.Response === 'False') {
        error.value = moviesData.Error;
      } else {
        localStorage.setItem(
          query + pageNum,
          JSON.stringify(moviesData.Search)
        );
        error.value = '';
        movies.value = moviesData.Search;
      }
    } catch (e) {
      console.error('error =>', e);
    }
  };
  return { movies, error, loadMovies, handleCache };
};
