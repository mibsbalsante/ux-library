<template>
  <div id="app">
    <comp-header :totalOfResults="totalOfResults"></comp-header>
    <router-view @totalOfResults="getTotal"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  data () {
    return {
      totalOfResults: 0
    }
  },
  methods: {
    getTotal (val) {
      this.totalOfResults = val
    }
  },
  components: { 'comp-header': Header }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Yantramanav');
@import '/assets/app';
</style>
