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
  width: 30%;
}

.images > img.logo {
  position: absolute;
  top: 75px;
  right: 40px;
  width: 30%;
}

@media (max-width: 767px) {
  .images > img.portrait {
  position: absolute;
  top: 25vh;
  left: 50%; 
  transform: translate(-50%);
  width: 200px;
  display: none;
}

.images > img.logo {
  position: absolute;
  left: 50%; 
  top: 10px;
  transform: translate(-50%);
  width: 200px;
}

    
  }





</style>
