<template>
  <div id="app">
    <comp-header :exampleUser="exampleUser" :totalOfResults="totalOfResults"></comp-header>
    <router-view @exampleUser="getExample" @totalOfResults="getTotal"/>
    <comp-footer></comp-footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  data () {
    return {
      exampleUser: {},
      totalOfResults: 0
    }
  },
  methods: {
    getExample (val) {
      this.exampleUser = val
    },
    getTotal (val) {
      this.totalOfResults = val
    }
  },
  components: {
    'comp-header': Header,
    'comp-footer': Footer
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Yantramanav');
@import '/assets/app';
</style>
