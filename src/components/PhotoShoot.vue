<template>
    <div class="images">
      <img class="both" src="../assets/images/both.png">
    </div>
</template>
<style scoped>
.images {
  position: relative;
  width: 100%;
  height: 100%;
}

.images > img.both {
  position: fixed;
  bottom: 10%;
  right: 5%;
  width: 40%;
  min-width: 150px;
}
@media (max-width: 830px) {
  .images > img.both {
    display: none;
  }
}
</style>