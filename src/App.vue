<template>
  <div
      class="app-wrapper"
      :class="{ darkBg: changeColorScheme }"
  >

    <div id="nav" class="nav-menu">
      <router-link
          to="/"
          :class="{ sepiaColor: changeColorScheme }"
      >
        Your notes
      </router-link>
      <router-link
          to="/archive"
          :class="{ sepiaColor: changeColorScheme, 'empty': !deletedNotes.length }"
      >
        Deleted
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: mapGetters(['changeColorScheme', 'deletedNotes'])
  }

</script>

<style lang="scss">
  @import 'src/assets/styles/style';

body {
  margin: 0;
}

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $dark-space;
}

.nav-menu {
  padding: 30px 0 10px 0;
  display: flex;
  width: 300px;
  justify-content: space-around;
  margin: 0 auto;

  a {
    font-weight: bold;
    color: $dark-space;
    text-decoration: none;
    border-bottom: 1px solid;
    transition: .4s all;
    &:hover {
      color: $dark-storm-cloud;
    }

    @media (max-width: $md) {
      &:hover {
        color: $dark-space;
      }
    }

    &.router-link-exact-active {
      color: $aqua-fresco;
      border-bottom: none;
      transition: .4s all;
      &:hover {
        color: $frosty-glade;
      }

      @media (max-width: $md) {
        &:hover {
          color: $aqua-fresco;
        }
      }
    }
  }
}

.nav-menu .empty {
  color: $dark-storm-cloud;
}

.app-wrapper {
  min-height: 100vh;
  transition: .4s all;
}

.darkBg {
  background-color: $bauhaus;
}

body .sepiaColor {
  color: $nuance;
}
  body {
   -webkit-touch-callout: none;
   -webkit-user-select: none;
   -khtml-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
   user-select: none;
   -webkit-tap-highlight-color: transparent;
 }

</style>
