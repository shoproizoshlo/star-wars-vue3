<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h2>to Star Wars</h2>
  </div>
</template>
<style lang="scss">
@import url('https://fonts.cdnfonts.com/css/star-wars');
$color_1: #ffe500;
$font-family_1: 'Star Wars', sans-serif;
$background-color_1: black;

h1 {
  font-family: $font-family_1;
  color: $color_1;
  font-size: 135px;
}
h2 {
  font-family: $font-family_1;
  color: $color_1;
  font-size: 86px;
}
.story {
  font-family: $font-family_1;
  color: $color_1;
}

.scroll {
  margin: 35px;
  width: 197px;
  height: 46px;
  border: 2px solid #ffe500;
  border-radius: 20px;
  color: $color_1;
  background-color: $background-color_1;
}
</style>
