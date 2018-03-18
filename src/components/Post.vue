<template>
  <a :href="details.meta.url" class="post">
    <div class="post_upvotes">
      <button>up</button>
      <div class="post_upvotes_amount">{{ details.upvotes }}</div>
    </div>
    <div class="post_font">{{ details.meta.url }}</div>
    <div class="post_title">{{ details.meta.title }}</div>
    <div class="post_info">
      <span :class="`post_info_category label_${details.category}`">{{ details.category }}</span>
      <span>{{ details.meta.author }}</span>
      <span>{{ details.created_at }}</span>
      <span>{{ details.comments }}</span>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    details: Object
  }
}
</script>
