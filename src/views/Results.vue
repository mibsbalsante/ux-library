<template>
  <main>
    <p v-if="isLoading" class="loading">
      Loading results <span class="loading_dots"></span>
    </p>
    <p v-else-if="filteredResults.length === 0" class="empty">
      Nothing found with <span class="term">{{ search }}</span>.
    </p>
    <transition-group name="transition" tag="div">
      <post v-if="!isLoading && filteredResults.length > 0"
            v-for="details in filteredResults"
            :key="details.meta.title"
            :details="details"
            :picture="usersData[details.meta.author]">
      </post>
    </transition-group>
    <load-more v-if="!isLoading && filteredResults.length > 0"></load-more>
  </main>
</template>

<script>
import moment from 'moment'
import apiLink from '@/commom/api-link'
import picturesLink from '@/commom/pictures-link'
import LoadMore from '@/components/LoadMore.vue'
import Post from '@/components/Post.vue'

export default {
  props: ['search'],
  data () {
    return {
      apiLink: apiLink,
      apiResults: [],
      inputText: '',
      usersData: {},
      isLoading: false
    }
  },
  computed: {
    filteredResults () {
      if (!this.apiResults) return []
      if (!this.search) return this.apiResults

      const regex = new RegExp(this.search, 'i')

      return this.apiResults.filter(post => {
        return regex.test(post.category) ||
                regex.test(post.comments) ||
                regex.test(post.created_at) ||
                regex.test(post.upvotes) ||
                regex.test(post.meta.author) ||
                regex.test(post.meta.title) ||
                regex.test(post.meta.url)
      })
    },
    textToSearch () {
      return this.inputText ? this.inputText : this.search
    }
  },
  methods: {
    generateUsersData (pictures) {
      const uniqueUsers =
        this.apiResults
          .map(post => post.meta.author)
          .filter((item, ind, self) => self.indexOf(item) === ind)
      this.usersData = uniqueUsers.reduce((res, item, ind) => {
        res[item] = pictures[ind].picture.thumbnail
        return res
      }, {})
    },
    getRandomPictures (count) {
      this.isLoading = true

      fetch(picturesLink(count))
        .then(dt => dt.json())
        .then(json => this.generateUsersData(json.results))
        .finally(() => this.removeLoading())
    },
    getResultsFromApi () {
      this.isLoading = true

      fetch(apiLink)
        .then(dt => dt.json())
        .then(json => { this.apiResults = json.links })
        .finally(() => this.removeLoading())
    },
    removeLoading() {
      setTimeout(() => this.isLoading = false, 2000)
    },
    updateDate () {
      this.apiResults.map(post => {
        if (post.created_at) post.created_at = moment(post.created_at).format('MM/DD/YYYY')
      })
    }
  },
  watch: {
    apiResults (val) {
      if (val) {
        this.updateDate()
        this.getRandomPictures(val.length)
        this.$emit('totalOfResults', val.length)
      }
    },
    usersData (val) {
      if (val) {
        const exampleUser = Object.keys(val)[0]
        this.$emit('exampleUser', { name: exampleUser, pic: val[exampleUser] })
      }
    }
  },
  components: {
    LoadMore,
    Post
  },
  mounted () {
    this.getResultsFromApi()
  }
}
</script>

<style lang="scss" scoped>
  main {
    min-height: 50vh;
  }

  .loading,
  .empty {
    font-size: 1.8rem;
    margin-bottom: 4rem;
  }

  .loading {
    &_dots:before {
      content: '';
      animation: 2s dots infinite;
    }
  }

  .empty {
    .term {
      color: $primary;
    }
  }

  @media (min-width: $break-mobile) {
    main {
      margin-top: 9.6rem;
    }

    .loading,
    .empty {
      padding: 2rem 4rem 0;
    }
  }

  @media (max-width: $break-mobile - 1) {
    main {
      margin-top: 11.2rem;
    }
  }

  @keyframes dots {
    0% {
      content: '.'
    }
    33% {
      content: '..'
    }
    66% {
      content: '...'
    }
    100% {
      content: '.'
    }
  }
</style>
