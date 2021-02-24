<template>
  <div class="app-wrapper" :class="{ darkBg: changeColorScheme }">

    <div id="nav" class="nav-menu">
      <router-link to="/" :class="{ sepiaColor: changeColorScheme }" >Your notes</router-link>
      <router-link to="/archive" :class="{ sepiaColor: changeColorScheme }">Deleted</router-link>
    </div>

    <router-view/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: mapGetters(['changeColorScheme'])
  }

</script>

<style lang="scss">
  @import 'src/assets/style';

body {
  margin: 0;
}

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #404A4D;
}

.nav-menu {
  padding: 30px 0 10px 0;
  display: flex;
  width: 300px;
  justify-content: space-around;
  margin: 0 auto;
  a {
    font-weight: bold;
    color: #404A4D;
    transition: .4s all;
    &:hover {
      color: #819094;
    }

    @media (max-width: 867px) {
      &:hover {
        color: #404A4D;
      }
    }

    &.router-link-exact-active {
      color: #469DA3;
      text-decoration: none;
      transition: .4s all;
      &:hover {
        color: #9FC0C0;
      }

      @media (max-width: 867px) {
        &:hover {
          color: #469DA3;
        }
      }

    }
  }
}

.app-wrapper {
  min-height: 100vh;
  transition: .4s all;
}

.darkBg {
  background-color: #404040;
}

body .sepiaColor {
  color: #E2DFD5;
}

</style>
