<template>
  <div class="epk">
      <div class="segments">
        <div class="bio">
          <h1>Bio</h1>
          <p>Tommy 135 (one thirty five) is an independent artist from Chicago who’s blend of upbeat indie pop, tight production and catchy melodies tells a larger story about some of the problems facing this generation.</p>
          <p>Dive into the world of his  debut single “Tumbleweed” with accompanying music video filled with pre 2000’s nostalgia that comments on the prevalence of social media addiction in today’s society.</p>
          <p>For this single Tommy designed and developed a retro video game thats featured in the music video and is playable on his website for desktop and mobile.</p>
        </div>
        <div class="icon clickable">
            <img src="../../src/assets/images/epk/press_photo_icon.png" alt="">
            <h4 class="icon-text">Press Photos</h4>
        </div>
      </div>
      <img class="both" src="../assets/images/both.png" alt="">
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
@import url('http://fonts.cdnfonts.com/css/w95fa');

.epk {
    font-family: 'W95FA', sans-serif;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}
h1, h4 {
    margin: 0;
}

.epk > .segments {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 200px;
    margin-bottom: 50px;
}

.epk > .segments > .bio > p {
    font-size: 25px;
}

.epk > .segments > .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
}
.epk > .segments > .icon > .icon-text {
    padding: 3px;
    border-radius: 3px;
}

.epk > .segments > .icon:hover > .icon-text {
    background-color: rgb(0, 0, 163);
    color: white;
    outline: 1px dotted white;
    outline-offset: -2px;
}
.epk > .segments > .icon:hover > img {
    filter: sepia(100%) hue-rotate(190deg) saturate(500%);
}

.both {
    position: fixed;
    width: 30%;
    right: 5%;
    bottom: 10%;
    min-width: 150px;
}



</style>