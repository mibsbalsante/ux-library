<template>
  <footer class="footer">
    <router-link to="/" class="footer_logo">
      <span class="footer_hexagon"></span>
      <h1 class="footer_title">UX</h1>
    </router-link>
    <div class="footer_complete_title">
      <h3>The UX Library</h3>
      <p>Community curated design content & discussion</p>
    </div>
    <div class="-right">
      <div class="footer_social_network -facebook">
        <i class="fab fa-facebook"></i> Facebook
      </div>
      <div class="footer_social_network -twitter">
        <i class="fab fa-twitter-square"></i> Twitter
      </div>
      <div class="footer_about">
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Sign in</a>
        <span class="copyright">© 2014 - The UX Library</span>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    display: flex;
    margin-top: 1rem;

    &_logo {
      position: relative;
    }

    &_hexagon {
      @extend %logo;
    }

    &_title {
      @extend %logo-title;
    }
  }
</style>
