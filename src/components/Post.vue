<template>
  <div class="post">
    <div class="post_upvotes">
      <button><i class="fa fa-angle-up"></i></button>
      <div class="post_upvotes_amount">{{ details.upvotes }}</div>
    </div>
    <span class="-cell">
      <a :href="`http://${details.meta.url}`" class="post_font">{{ details.meta.url }}</a>
    </span>
    <h2 class="post_title">{{ details.meta.title }}</h2>
    <div class="post_info">
      <span :class="`post_info_category -${details.category}`">{{ capitalizeName(details.category) }}</span>
      <a href="#" class="post_info_author">
        <img :src="picture" :alt="'Picture of' + details.meta.author">
        <span>{{ details.meta.author }}</span>
      </a>
      <span class="post_info_date" :title="details.created_at">{{ dateFromNow(details.created_at) }}</span>
      <a href="#" class="post_info_comments"><i class="fa fa-comment"></i>{{ details.comments }} Comments</a>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    details: Object,
    picture: String
  },
  methods: {
    capitalizeName (val) {
      return val.split(/_/).map(word => {
        return word.length < 3
          ? word.toUpperCase()
          : word.charAt(0)
            .toUpperCase()
            .concat(word.slice(1, word.length))
      }).join(' ')
    },
    dateFromNow (val) {
      return val ? moment(val, 'MM/DD/YYYY').fromNow() : moment().fromNow()
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  display: grid;
  grid-template-columns: 3rem 1fr;
  grid-gap: 0 1.2rem;

  &:not(:first-child) {
    padding-top: 3.5rem;
  }

  .-cell {
    display: contents;
  }

  &_upvotes {
    grid-row: 1 / 4;
    display: flex;
    flex-flow: column;

    &_amount,
    > button {
      background: $white;
      border: 1px solid $grey1;
    }

    > button {
      padding: .4rem 0;
      border-bottom: 0 none;
      color: $primary;
      font-size: 1.4rem;
      border-radius: .2rem .2rem 0 0;

      &:hover {
        background: $primary;
        color: $white;
      }
    }

    &_amount {
      padding: .8rem 0;
      font-size: 1.8rem;
      font-weight: 700;
      text-align: center;
    }
  }

  &_font {
    margin: 0;
    color: $grey2;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    font-size: .8rem;
    line-height: 100%;
  }

  &_title {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: initial;
    margin: 0 0 .4rem;
  }

  &_info {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;

    &_category {
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

    &_author {
      margin-left: .8rem;
      padding-left: .8rem;
      display: flex;
      align-items: center;
      border-left: 1px solid $grey2;
      font-weight: 700;

      > img {
        margin-right: .5rem;
        height: 1.2rem;
        border-radius: .2rem;
      }
    }

    &_date:not(:empty) {
      margin-left: .4rem;
      color: $lighter-text;
    }

    &_comments {
      margin-left: .6rem;
      padding-left: 1rem;
      position: relative;

      &:before {
        content: '●';
        color: darken($lighter-text, 10%);
        font-size: .7rem;
        position: absolute;
        left: 0;
      }

      > svg {
        margin-right: .3rem;
      }
    }
  }
}
</style>
