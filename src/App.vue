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
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <FilmList />
    </div>
  </main>

</template>
<script setup lang="ts">
import Welcome from './components/Welcome.vue'
import FilmList from './components/FilmList.vue'
</script>
<style lang="scss">
header {
  margin: 5%;
  padding: 7%;
  text-align: center;
}
</style>
