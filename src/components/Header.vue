<template>
  <header>
    <h1 class="header_logo">
      logo
    </h1>
    <div class="header_hamburger">
      <span class="line"></span>
    </div>
    <div class="header_search">
      <button class="header_search_button">
        <i class="fa fa-search"></i>
      </button>
      <input type="text"
              class="header_search_input"
              :value="searchText"
              @input="filterText($event.target.value)">
    </div>
    <div class="header_user">
      <button class="header_addpost">
        <i class="fa fa-plus"></i>
        <span>Add Post</span>
      </button>
      <span class="header_posts_counter">n</span>
      <div class="header_user_profile"></div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    filterText (val) {
      this.searchText = undefined
      this.searchText = val.replace(/\/\\/g, '')
    },
    getSearchParam (route) {
      this.searchText = route.params.search ? route.params.search : ''
    }
  },
  watch: {
    searchText (val) {
      this.$router.push(`/${val}`)
    }
  },
  mounted() {
    this.getSearchParam(this.$route)
  }
}
</script>
