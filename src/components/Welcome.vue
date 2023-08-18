<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h2>to Star Wars</h2>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<style lang="scss">
@import url('https://fonts.cdnfonts.com/css/star-wars');
$color_1: #ffe500;
$font-family_1: 'Star Wars', sans-serif;

h1 {
  font-family: $font-family_1;
  color: $color_1;
  font-size: 10em;
}
h2 {
  font-family: $font-family_1;
  color: $color_1;
  font-size: 6em;
}
</style>
