<template>
  <div class="home">
    <div class="images">
      <img class="both" src="../assets/images/both.png">
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
  width: 100%;
  position: absolute;
}

.images {
  position: relative;
  width: 100%;
  height: 100%;
}

.images > img.both {
  position: fixed;
  bottom: 10%;
  right: 5%;
  width: 30%;
  min-width: 150px;
}
@media (max-width: 830px) {
  .images > img.both {
    display: none;
  }
}







</style>
