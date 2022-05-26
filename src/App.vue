<template>
  <div class="main">
    <div class="view">
      <router-view />
    </div>
    <MenuBar v-if="currentRouteName != 'not-found'"/>
    <DockBar v-if="currentRouteName != 'not-found'"/>
  </div>
</template>

<script>
import DockBar from "./components/DockBar.vue";
import MenuBar from "./components/MenuBar.vue";
export default {
  name: "App",
  components: {
    DockBar,
    MenuBar,
  },
  methods: {},
  watch: {
    $route(to) {
      document.title = `${to.meta.title} | Tommy 135` || "404 | Page Not Found";
    },
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<style>
@font-face {
  font-family: "W95FA";
  font-style: normal;
  font-weight: 400;
  src: local("W95FA"), url("assets/fonts/W95FA.woff") format("woff");
}
body {
  margin: 0;
  background: #e9e7e3;
  font-family: "W95FA", sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main {
  cursor: url("assets/cursors/cursor-hand.png"), auto;
}
.main .clickable {
  cursor: url("assets/cursors/pointer-hand.png"), auto;
}
.main > .view {
  height: 100%;
}

.hide {
  display: none !important;
}

@media (max-width: 685px) {
  .mobile-hide {
    display: none !important;
  }
  .mobile-show {
    display: unset !important;
  }
}
</style>
