<template>
  <header class="header">
    <router-link to="/" class="header_logo">
      <span class="header_hexagon"></span>
      <h1 class="header_title">UX</h1>
    </router-link>
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
    <div class="-right">
      <button class="header_addpost">
        <i class="fa fa-plus"></i>
        <span class="header_addpost_title">Add Post</span>
        <span class="header_posts_counter">{{ totalOfResults }}</span>
      </button>
      <div class="header_user_profile"></div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    totalOfResults: Number
  },
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

<style lang="scss" scoped>
  .header {
    display: flex;
    align-items: center;
    position: relative;
    padding: 1.5rem 0;

    &:after {
      content: '';
      width: 200%;
      position: absolute;
      left: -50%;
      bottom: 0;
      border-bottom: 1px solid $grey1;
    }

    .-right {
      margin-left: auto;
    }

    &_logo {
      margin-right: 1.2rem;
      padding-right: 1rem;
      border-right: 1px solid $grey1;
      position: relative;
    }

    &_hexagon {
      @extend %logo;
    }

    &_title {
      position: absolute;
      top: 0;
      left: 0;
      font-size: 1.2rem;
      width: 2.3rem;
      text-align: center;
      margin: 0;
      padding: .8rem 0;
      color: $white;
    }

    &_hamburger {
      border: 1px solid $grey2;
      border-radius: .2rem;
      padding: .7rem .6rem;
      height: 2.8rem;
      transition: all .3s ease-in-out;

      &:hover {
        background: $text;
        border-color: $text;

        > .line {
           &,
          &:before,
          &:after {
            border-color: $white;
          }
        }
      }

      > .line {
        position: relative;
        display: block;

        &,
        &:before,
        &:after {
          width: 1.2rem;
          border-top: .3rem solid $text;
          transition: all .3s ease-in-out;
        }

        &:before,
        &:after {
          content: '';
          position: absolute;
        }

        &:before {
          top: .2rem;
        }

        &:after {
          top: .7rem;
        }
      }
    }

    &_search {
      margin-left: 1rem;
      display: flex;
      align-items: stretch;

      &_button,
      &_input {
        background: $grey1;
        border: 0 none;
        outline: 0 none;
      }

      &_button {
        color: $grey2;
        font-size: 1rem;
        padding: .8rem;
        border-radius: .2rem 0 0 .2rem;
      }

      &_input {
        padding: .9rem 1.5rem .9rem .5rem;
        border-radius: 0 .2rem .2rem 0;
        min-width: 17rem;
      }
    }

    &_addpost {
      background: $primary;
      color: $white;
      font-weight: 700;
      border: 1px solid darken($primary, 10%);
      display: flex;
      align-items: center;
      height: 100%;
      position: relative;
      padding: 0;
      border-radius: .2rem;
      margin-right: 2rem;

      &:hover {
        > .fa-plus {
          transition: all .3s ease-in-out;
          background: darken($primary, 10%);
        }
      }

      > .fa-plus {
        padding: .7rem .9rem;
        width: 2.8rem;
        height: 2.6rem;
        border-right: 1px solid darken($primary, 10%);
      }

      &_title {
        padding: .6rem 1.2rem;
        font-size: .9rem;
      }
    }

    &_posts_counter {
      background: $primary;
      color: $white;
      font-size: .8rem;
      font-weight: 700;
      padding: .2rem;
      border-radius: .2rem;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: -2rem;
      min-width: 1.4rem;
    }
  }
</style>
