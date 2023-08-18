<template>
  <header>
    <div class="wrapper">
      <Welcome msg="Welcome" />
    </div>
  </header>
  <main>
    <div>
      <p class="story m-5">A long time ago in a galaxy far, far away...</p>
    </div>
    <div class="np-content">
      <FilmList />
    </div>
  </main>
</template>
<script setup lang="ts">
import Welcome from './components/Welcome.vue'
import FilmList from './components/FilmList.vue'
import Loader from './components/Loader.vue'
import { ref } from 'vue'
const isLoading = ref(true) // Loading state
</script>

<style lang="scss">
header {
  margin: 5%;
  padding: 7%;
  text-align: center;
}
</style>
