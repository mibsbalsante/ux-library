<template>
  <main>
    <p v-if="filteredResults.length === 0" class="empty">Nothing found</p>
    <post v-else
          v-for="details in filteredResults"
          :key="details.meta.title"
          :details="details">
    </post>
  </main>
</template>

<script>
import apiLink from '@/commom/api-link'
import Post from '@/components/Post.vue'

export default {
  props: ['search'],
  data () {
    return {
      inputText: '',
      apiLink: apiLink,
      apiResults: []
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
    getResultsFromApi () {
      fetch(apiLink)
        .then(dt => dt.json())
        .then(json => { this.apiResults = json.links })
    }
  },
  components: { Post },
  mounted () {
    this.getResultsFromApi()
  }
}
</script>
