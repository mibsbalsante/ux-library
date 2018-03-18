<template>
  <div id="app">
    <comp-header></comp-header>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: { 'comp-header': Header }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Yantramanav');
</style> 

<style lang="scss">
#app {
  font-family: 'Yantramanav', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text;
  max-width: 900px;
  margin: 0 auto;

  a {
    color: $primary;
  }

  a,
  button {
    outline: 0 none;
  }
}
</style>
