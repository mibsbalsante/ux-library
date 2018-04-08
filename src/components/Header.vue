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
      </button>
      <a href="#" class="header_user">
        <span class="header_posts_counter">{{ totalOfResults }}</span>
        <img :src="exampleUser.pic" :alt="'Picture of ' + exampleUser.name">
      </a>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    exampleUser: Object,
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
  mounted () {
    this.getSearchParam(this.$route)
  }
}
</script>

<style lang="scss" scoped>
  .header {
    @include center-fixed(1.5rem);
    background: $white;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    z-index: 1;
    display: grid;
    align-items: center;

    &:after {
      content: '';
      width: 200%;
      position: absolute;
      left: -50%;
      bottom: 0;
      border-bottom: 1px solid $grey1;
    }

    &_logo {
      margin-right: 1rem;
      padding-right: 1rem;
      border-right: 1px solid $grey1;
      position: relative;
    }

    &_hexagon {
      @extend %logo;
    }

    &_title {
      @extend %logo-title;
    }

    &_hamburger {
      border: 1px solid $grey2;
      border-radius: .2rem;
      padding: .75rem;
      height: 2.6rem;
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
          width: 1.1rem;
          border-top: .3rem solid $text;
          transition: all .3s ease-in-out;
        }

        &:before,
        &:after {
          content: '';
          position: absolute;
        }

        &:before {
          top: .1rem;
        }

        &:after {
          top: .5rem;
        }
      }
    }

    &_search {
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
        padding: .7rem;
        border-radius: .2rem 0 0 .2rem;
      }

      &_input {
        padding: .8rem 1.5rem .8rem .5rem;
        border-radius: 0 .2rem .2rem 0;
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
      padding: 0;
      border-radius: .2rem;
      margin-right: 1.2rem;

      &:hover {
        > .fa-plus {
          transition: all .3s ease-in-out;
          background: darken($primary, 10%);
        }
      }

      > .fa-plus {
        padding: .7rem .7rem;
        width: 2.5rem;
        height: 2.5rem;
      }

      &_title {
        padding: .6rem 1rem;
        font-size: .9rem;
      }
    }

    &_posts_counter {
      background: $primary;
      color: $white;
      font-size: .8rem;
      font-weight: 700;
      border-radius: .2rem;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: -.6rem;
      min-width: 1.1rem;
      text-align: center;
    }

    &_user {
      height: 2.6rem;
      position: relative;

      > img {
        height: 100%;
        border-radius: .2rem;
      }
    }
  }

  @media (min-width: $break-mobile) {
    .header {
      grid-template-columns: 4.8rem 2.8rem 1fr 14rem;
    }

    &_search {
      margin-left: 1rem
    }
  }

  @media (max-width: $break-mobile - 1) {
    .header {
      grid-template-columns: 4.8rem 2.8rem 1fr;
      grid-gap: 1rem 0;

      &_search {
        grid-row-start: 2;
        grid-column: 1 / 4;

        &_input {
          width: 100%;
        }
      }
    }
  }

  @media (min-width: $break-mini) {
    .header {
      &_search_input {
        min-width: 17rem;
      }
      &_addpost {
        .fa-plus {
          border-right: 1px solid darken($primary, 10%);
        }
      }
    }
  }

  @media (max-width: $break-mini - 1) {
    .header {
      &_addpost {
        &_title {
          display: none;
        }
      }
    }
  }
</style>
