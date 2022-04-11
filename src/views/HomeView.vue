<template>
  <div class="home">
    <div class="images">
      <img class="logo" src="../assets/images/logo.png">
      <img class="portrait" src="../assets/images/tommy-shoot.png">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
}
</script>

<style scoped>

.home {
  height: 100%;
  position: relative;
}

.images {
  position: relative;
  width: 100%;
  height: 100%;
}

.images > img.portrait {
  position: absolute;
  bottom: 75px;
  right: 40px;
}

.images > img.logo {
  position: absolute;
  top: 75px;
  right: 75px;
}





</style>
