<template>
  <main>
    <post v-for="details in apiResults.links" :key="details.meta.title" :details="details"></post>
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
    textToSearch () {
      return this.inputText ? this.inputText : this.search
    }
  },
  methods: {
    getResultsFromApi () {
      fetch(apiLink)
        .then(dt => dt.json())
        .then(json => { this.apiResults = json })
    }
  },
  components: { Post },
  mounted () {
    this.getResultsFromApi()
  }
}
</script>
