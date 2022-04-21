<template>
<div class="main">
  <div class="view">
    <router-view/>
  </div>
  <MenuBar/>
  <DockBar/>
</div>
</template>

<script>
import DockBar from './components/DockBar.vue'
import MenuBar from './components/MenuBar.vue'
export default {
  name: 'App',
  components: {
    DockBar,
    MenuBar
  },
  methods: {
  },
  watch: {
    '$route' (to) {
      document.title = `${to.meta.title} | Tommy 135` || '404 | Page Not Found'
    }
  }
}

</script>

<style>
@import url('http://fonts.cdnfonts.com/css/w95fa');
body {
  margin: 0;
  background: #e9e7e3;
  font-family: 'W95FA', sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main {
  cursor:url('assets/cursors/cursor-hand.png'), auto;
}
.main .clickable {
  cursor:url('assets/cursors/pointer-hand.png'), auto;
}
.main > .view {
  height: 100%;
}

.hide {
  display: none !important;
}

@media (max-width: 830px) {
.mobile-hide {
  display: none !important;
}
.mobile-show {
  display: unset !important;
}
    
}

</style>
