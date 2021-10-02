<template>
  <div>
    <div class="form-section">
      <form>
        <label for="movie">Click Away:</label>
        <input type="text" v-model="movieName" required minlength="3" />
        <div class="page-number">
          <label :style="{ margin: '14px' }">
            page number:
            <input
              type="number"
              min="1"
              v-model="pageNum"
              :style="{ width: '40px' }"
            />
          </label>
        </div>
      </form>
    </div>
    <div class="clear-button">
      <button @click="handleClear">Clear Movies</button>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';
import { searchMovies } from '../composables/getMovies';

export default {
  setup(props, { emit }) {
    const movieName = ref('');
    const pageNum = ref(1);

    const { movies, error, loadMovies, handleCache } = searchMovies();

    const handleClear = () => {
      movieName.value = '';
      pageNum.value = 1;
      emit('clearMovies');
    };

    watchEffect(async () => {
      if (movieName.value.length >= 3) {
        if (localStorage.hasOwnProperty(movieName.value + pageNum.value)) {
          handleCache(movieName.value + pageNum.value);
          emit('movies', movies.value);
        } else {
          await loadMovies({ query: movieName.value, pageNum: pageNum.value });
          emit('movies', movies.value);
          emit('error', error.value);
        }
      }
    });

    return { movieName, pageNum, handleClear };
  },
};
</script>

<style scoped>
.form-section {
  display: flex;
  justify-content: center;
}

label {
  display: block;
  padding: 1%;
  font-size: 20px;
}

input#movie {
  color: #33e;
  font-size: 24px;
  font-weight: bold;
  background-color: transparent;
  padding: 8px;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-radius: 4px;
  margin: 2%;
}

input[type='submit'] {
  border: 0;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #33e;
  border-radius: 4px;
  padding: 8px;
  margin: 10px;
}

button {
  border: 0;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #33e;
  border-radius: 4px;
  padding: 8px;
  margin: 10px;
}
.clear-button,
.page-number {
  display: 'flex';
  justify-content: 'center';
}
</style>
