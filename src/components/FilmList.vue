<template>
  <Loader v-if="loading" />
  <div v-else>
    <input v-model="searchTerm" @input="searchFilms" placeholder="Search for a film" class="ps-3" />
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col" v-for="film in filteredFilms" :key="film.id">
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
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import swapiService from '@/services/swapiService'
import type { Film } from '@/interfaces/FilmInterface'
import Loader from './Loader.vue'

const films = ref<Film[]>([])
const loading = ref(true)
const searchTerm = ref('')

const filteredFilms = computed(() => {
  return films.value.filter((film) =>
    film.title.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
})

const searchFilms = async () => {
  try {
    const response = await swapiService.get('/films/')
    films.value = response.data.results
  } catch (error) {
    console.error('Error fetching films:', error)
  } finally {
    loading.value = false
  }
}

// Fetch films on component mount
onMounted(searchFilms)
</script>

<style lang="scss">
$color_1: #f2f2f2;
$background-color_1: #222831;

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

p,
li {
  color: $color_1;
  margin: 0;
}
input {
  display: block;
  margin: 100px auto;
  color: $color_1;
  background-color: $background-color_1;
  width: 297px;
  height: 46px;
  border: 2px solid #ffe500;
  border-radius: 20px;
}
</style>
