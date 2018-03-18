<template>
  <main>
    <list></list>
  </main>
</template>

<script>
import apiLink from '@/commom/api-link'
import List from '@/components/List.vue'

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
  components: { List },
  mounted () {
    this.getResultsFromApi()
  }
}
</script>
