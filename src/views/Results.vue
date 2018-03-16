<template>
  <main>
    <list></list>
  </main>
</template>

<script>
import List from '@/components/List.vue'

export default {
  props: ['search'],
  components: { List }
}
</script>
