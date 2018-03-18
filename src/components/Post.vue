<template>
  <div class="post">
    <div class="post_upvotes">
      <button><i class="fa fa-angle-up"></i></button>
      <div class="post_upvotes_amount">{{ details.upvotes }}</div>
    </div>
    <a :href="details.meta.url" class="post_font">{{ details.meta.url }}</a>
    <div class="post_title">{{ details.meta.title }}</div>
    <div class="post_info">
      <span :class="`post_info_category -${details.category}`">{{ details.category }}</span>
      <a href="#" class="post_info_author">
        <img :src="picture" :alt="'Picture of' + details.meta.author">
        <span>{{ details.meta.author }}</span>
      </a>
      <span class="post_info_date">{{ details.created_at }}</span>
      <a href="#" class="post_info_comments"><i class="fa fa-comment"></i> {{ details.comments }} comments</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    details: Object,
    picture: String
  }
}
</script>

<style lang="scss" scoped>
.post {
  &_info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  &_info_category {
    padding: .2rem .6rem;
    border-radius: 1rem;
    color: $white;

    &.-case_study {
      background: $tag-case-study;
    }

    &.-discussion {
      background: $tag-discussion;
    }

    &.-product_design {
      background: $tag-product-design;
    }

    &.-ux_ui {
      background: $tag-ux-ui;
    }
  }
}
</style>
