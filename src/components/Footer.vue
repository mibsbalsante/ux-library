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
    <div class="footer_about -right">
      <div class="footer_institutional">
        <a class="footer_link -sn -facebook" href="#">
          <i class="fab fa-facebook"></i> Facebook
        </a>
        <a class="footer_link -sn -twitter" href="#">
          <i class="fab fa-twitter-square"></i> Twitter
        </a>
        <a class="footer_link" href="#">About</a>
        <a class="footer_link" href="#">Contact</a>
        <a class="footer_link" href="#">Sign in</a>
      </div>
      <p class="footer_copyright">© 2014 - The UX Library</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    display: flex;
    margin: 1rem 0 4rem;

    a {
      text-decoration: none;
    }

    &_logo {
      position: relative;
    }

    &_hexagon {
      @extend %logo;
    }

    &_title {
      @extend %logo-title;
    }

    &_complete_title {
      display: flex;
      flex-flow: column;
      justify-content: center;
      padding: 0 1rem;

      h3 {
        padding-top: .2rem;
        font-size: 1rem;
      }

      p {
        font-size: 1rem;
        color: $lighter-text;
      }
    }

    &_about {
      flex-wrap: wrap;
    }

    &_institutional {
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }

    &_link {
      display: flex;
      align-items: center;

      & + & {
        margin-left: .6rem;
      }

      &.-facebook > svg {
        color: $link-facebook;
      }

      &.-twitter > svg {
        color: $link-twitter;
      }

      &.-sn {
        color: $text;

        & + a:not(.-sn) {
          &:before {
            margin: 0 .8rem 0 .2rem;
            content: '●';
            color: $grey2;
            font-size: .6rem;
          }
        }
      }

      > svg {
        font-size: 1.2rem;
        margin-right: .2rem;
      }
    }

    &_copyright {
      width: 100%;
      color: $grey2;
      text-align: right;
    }
  }
</style>
