<template>
  <div class="col" v-for="film in films" :key="film.id">
    <div class="card">
      <img src="./icons/vader.png" class="card-img-top" alt="Dart Vader image" />
      <div class="card-body">
        <h5 class="card-title">{{ film.title }}</h5>
        <p class="card-text">Description – {{ film.opening_crawl }}</p>
        <p class="card-text">Director – {{ film.director }}</p>
        <p class="card-text">Producer – {{ film.producer }}</p>
        <p class="card-text">Release date – {{ film.release_date }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import swapiService from '@/services/swapiService'

interface Film {
  id: number
  title: string
  director: string
  producer: string
  opening_crawl: string
  release_date: Date
}

const films = ref<Film[]>([])

onMounted(async () => {
  try {
    const response = await swapiService.get('/films/')
    films.value = response.data.results
    console.log(films.value[0])
  } catch (error) {
    console.error('Error fetching films:', error)
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
