<template>
  <Search />
  <Loader v-if="loading" />
  <div v-else class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col" v-for="film in films" :key="film.id">
      <div class="card">
        <img src="/src/assets/icons/vader.png" class="card-img-top" alt="Dart Vader image" />
        <div class="card-body">
          <h5 class="card-title">{{ film.title }}</h5>
          <p class="card-text">{{ film.opening_crawl }}</p>
          <p class="card-text">Director – {{ film.director }}</p>
          <p class="card-text">Producer – {{ film.producer }}</p>
          <p class="card-text">Release date – {{ film.release_date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import swapiService from '@/services/swapiService'
import Film from '@/interfaces/FilmInterface'
import Loader from './Loader.vue'
import Search from './Search.vue'

const films = ref<Film[]>([])

const loading = ref(true) // Loading state

onMounted(async () => {
  try {
    const response = await swapiService.get('/films/')
    films.value = response.data.results
  } catch (error) {
    console.error('Error fetching films:', error)
  } finally {
    loading.value = false // Set loading to false after data fetch or error
  }
})
</script>
<style lang="scss">
$color_1: #f2f2f2;
$background-color_1: #222831;

.story {
  text-align: center;
  font-size: 28px;
  font-style: italic;
}

.card {
  text-align: center;
  border: 2px solid #ffe500;
  background-color: $background-color_1;
  color: $color_1;
}
.card-img-top {
  margin: 10px auto;
  height: 60px;
  width: 60px;
}
</style>
