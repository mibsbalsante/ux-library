<template>
  <main>
    <p v-if="filteredResults.length === 0" class="empty">
      Nothing found with <span class="term">{{ search }}</span>.
    </p>
    <post v-if="filteredResults.length > 0"
          v-for="details in filteredResults"
          :key="details.meta.title"
          :details="details"
          :picture="usersData[details.meta.author]">
    </post>
    <load-more v-if="filteredResults.length > 0"></load-more>
  </main>
</template>

<script>
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
      usersData: {}
    }
  },
  computed: {
    filteredResults () {
      if (!this.apiResults) return []
      if (!this.search) return this.apiResults

      const regex = new RegExp(this.search, 'i')

      return this.apiResults.filter(post => {
        return regex.test(post.category) ||
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
      fetch(picturesLink(count))
        .then(dt => dt.json())
        .then(json => this.generateUsersData(json.results))
    },
    getResultsFromApi () {
      fetch(apiLink)
        .then(dt => dt.json())
        .then(json => { this.apiResults = json.links })
    }
  },
  watch: {
    apiResults (val) {
      if (val) {
        this.getRandomPictures(val.length)
        this.$emit('totalOfResults', val.length)
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
    margin-top: 4rem;
  }

  .empty {
    font-size: 1.8rem;

    .term {
      color: $primary;
    }
  }
</style>
