<template>
    <div :class="routeName" class="images">
      <img class="both" src="../assets/images/both.png">
    </div>
</template>
<script>
export default {
  computed: {
    routeName() {
      return this.$route.name
    }
  }
}
</script>
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
.images.epk {
  height: 100%;
  position: relative;
}
.images.epk > img.both {
  right: unset;
  width: 80%;
  min-width: unset;
  max-width: 500px;
  position: absolute;
  right: 10%;
}

@media (max-width: 685px) {
  .images > img.both {
    display: none;
  }
}
</style>