<template>
  <div class="home">
    <div class="logo mobile-show"><img src="../assets/images/logo.png" alt=""></div>
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

.home > .logo.mobile-show {
  display: none;
}
@media (max-width: 685px) {
.home > .logo.mobile-show {
    position: absolute;
    width: 100%;
    left: 50%;
    transform: translate(-50%);

}
.home > .logo.mobile-show > img {
    width: 70%;
}
}





</style>