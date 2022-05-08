<template>
  <div class="home">
    <PhotoShoot/>
  </div>
</template>

<script>
// @ is an alias to /src

import PhotoShoot from '@/components/PhotoShoot.vue'
export default {
  components: {
    PhotoShoot
  }
}
</script>

<style scoped>

.home {
  height: 100%;
  width: 100%;
  position: absolute;
}






</style>