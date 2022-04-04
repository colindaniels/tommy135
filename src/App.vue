<template>
<div class="main">
  <div class="view">
    <router-view/>
  </div>
  <DockBar/>
</div>
</template>

<script>
import DockBar from './components/DockBar.vue'
export default {
  name: 'App',
  components: {
    DockBar
  }
}

</script>

<style>
#app {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.main {
  height: 100%;
  width: 100%;
  background: #e9e7e3;
  cursor:url('assets/cursors/cursor-hand.png'), auto;
}
.main .clickable {
  cursor:url('assets/cursors/pointer-hand.png'), auto;
}
.main > .view {
  height: 100%;
}



</style>
