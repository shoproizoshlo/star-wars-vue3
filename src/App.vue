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
</script>

<style lang="scss">
$color_1: #ffe500;
$font-family_1: 'Star Wars', sans-serif;
header {
  margin: 5% 5% 0 5%;
  padding: 5% 5% 0 5%;
  text-align: center;
}

.story {
  font-family: $font-family_1;
  color: $color_1;
  font-size: 1.7em;
  text-align: center;
}
</style>
