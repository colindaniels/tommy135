<template>
  <div class="epk">
      <div class="segments">
        <div class="bio">
          <h1>Bio</h1>
          <p>Tommy 135 (one thirty five) is an independent artist from Chicago who’s blend of upbeat indie pop, tight production and catchy melodies tells a larger story about some of the problems facing this generation.</p>
          <p>Dive into the world of his  debut single “Tumbleweed” with accompanying music video filled with pre 2000’s nostalgia that comments on the prevalence of social media addiction in today’s society.</p>
          <p>For this single Tommy designed and developed a retro video game thats featured in the music video and is playable on his website for desktop and mobile.</p>
        </div>
        <a href="https://drive.google.com/drive/folders/1W654uIvlTEHQNmkU7yDlefag9tu8wAhA?usp=sharing" target="_blank" class="icon clickable">
            <img src="../../src/assets/images/epk/press_photo_icon.png" alt="">
            <h4 class="icon-text">Press Photos</h4>
        </a>
      </div>
      <PhotoShoot/>
  </div>
</template>

<script>
import PhotoShoot from '@/components/PhotoShoot.vue'
export default {
    components: {
        PhotoShoot
    }
}
</script>

<style scoped>

.epk {
    height: 100%;
    width: 100%;
    display: flex;
    position: absolute;
}
h1, h4 {
    margin: 0;
}

.epk > .segments {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    min-width: 225px;
    width: 100%;
    margin-left: 300px;
}


.epk > .segments > .bio > p {
    font-size: 25px;
    text-align: justify;
}

.epk > .segments > .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    color: #2c3e50;
    text-decoration: none;
    margin-bottom: 50px;
    width: max-content;
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


@media (max-width: 970px) {
    .epk > .segments {
        left: 290px;
    }
}

@media (max-width: 830px) {
    .epk > .segments {
        right: 0;
    }
}


@media (max-width: 685px) {
    .epk > .segments {
        left: 42.5%;
    }
}

</style>