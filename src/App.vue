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

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Yantramanav');
@import '/assets/app';
</style>
