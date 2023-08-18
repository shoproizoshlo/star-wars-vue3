<template>
  <div>
    <div class="loader"></div>
  </div>
</template>

<style>
.loader {
  display: inline-block;
  margin: 50px 0;
  width: 100px;
  height: 100px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.loader:after {
  content: ' ';
  display: block;
  width: 100px;
  height: 100px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #ffe500 transparent #ffe500 transparent;
  animation: loader 0.7s linear infinite;
}
@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
