<template>
  <div class="load" :class="{ 'active': isActive }" @click="makeActive">
    <i class="fa fa-sync-alt"></i>
    <span>Load more</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: false,
      timer: 3000
    }
  },
  methods: {
    makeActive () {
      this.isActive = true
      setTimeout(() => {
        this.isActive = false
      }, this.timer)
    }
  }
}
</script>

<style lang="scss" scoped>
  .load {
    background: $grey1;
    color: $primary;
    font-size: 1.2rem;
    padding: 1.5rem 0;
    border-radius: .2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    > .fa-sync-alt {
      margin-right: .6rem;
      transform: rotateZ(42deg);
    }

    &.active {
       > .fa-sync-alt {
         animation: load 2s linear infinite;
       }
    }
  }

  @keyframes load {
    from {
      transform: rotateZ(42deg);
    }
    to {
      transform: rotateZ(402deg);
    }
  }
</style>
