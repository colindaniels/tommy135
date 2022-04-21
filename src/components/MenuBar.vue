<template>
    <div class="menu" v-if="$route.name != 'game'">
        <div class="logo mobile-show"><img src="../assets/images/logo.png" alt=""></div>
        <div class="mini-logo">
            <img src="../assets/images/tomdows.png" alt="">
        </div>
        <div class="selector">
            <div class="group">
                <router-link to="game" class="link clickable">
                    <div class="icon"><img src="../assets/icons/game.png" alt=""></div>
                    <div class="text">Game</div>
                </router-link>
            </div>
            <div class="group">
                <a href="https://soundcloud.com/itstommy135/tumbleweed/s-EubikSlxCzQ?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" target="_blank" class="link clickable">
                    <div class="icon"><img src="../assets/icons/music.png" alt=""></div>
                    <div class="text">Music</div>
                </a>
                <a href="https://www.youtube.com/channel/UC1z6zXgfXKroyZQzasibhDQ" target="_blank" class="link clickable">
                    <div class="icon"><img src="../assets/icons/video.png" alt=""></div>
                    <div class="text">Videos</div>
                </a>
                <a href="https://www.instagram.com/itstommy135/" target="_blank" class="link clickable">
                    <div class="icon"><img src="../assets/icons/instagram.png" alt=""></div>
                    <div class="text">Instagram</div>
                </a>
                <a href="https://www.tiktok.com/@itstommy135" target="_blank" class="link clickable">
                    <div class="icon"><img src="../assets/icons/tiktok.png" alt=""></div>
                    <div class="text">TikTok</div>
                </a>
                <router-link to="store" class="link clickable">
                    <div class="icon"><img src="../assets/icons/merch.png" alt=""></div>
                    <div class="text">Merch</div>
                </router-link>
            </div>
            <div class="group">
                <div class="link clickable">
                    <div class="icon"><img src="../assets/icons/contact.png" alt=""></div>
                    <div class="text">Contact</div>
                </div>
            </div>
        </div>
    </div> 
</template>
<style scoped>
.menu {
    width: 40vw;
    max-width: 275px;
    background: rgb(192, 192, 192);
    margin-left: 6px;
    border-right: 3px solid rgb(28, 25, 25);
    border-bottom: 2px solid rgb(28, 25, 25);
    border-left: 2px solid white;
    border-top: 2px solid white;
    display: flex;
    bottom: 41px;
    position: fixed;
    z-index: 1;
}

.menu > .mini-logo {
    width: 35px;
    background-color: rgb(128, 128, 128);
    position: relative;
    display: flex;
    justify-content: center;
}

.menu > .mini-logo img {
    width: 75%;
    bottom: 3px;
    position: absolute;
}
.menu > .selector {
    padding: 3px;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.menu > .selector > .group {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid white;
    width: 100%;
    position: relative;
    padding-top: 5px;
    padding-bottom: 5px;
}
.menu > .selector > .group::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: rgb(128, 128, 128);
}
.menu > .selector > .group > .link {
    display: flex;
    align-items: center;
    padding: 3px;
    padding-left: 10px;
    padding-right: 10px;
    gap: 20px;
    text-decoration: none;
    color: black;
}
.menu > .selector > .group > .link:hover {
    background-color: hsl(0, 0%, 60%);
}

/* controls height of menu */
.menu > .selector > .group > .link > .icon {
    width: 5vh;
}
.menu > .selector > .group > .link > .icon > img {
    width: 100%;
}
.menu > .logo {
    position: absolute;
    width: 100%;
    top: -16vw;
    display: none;
}
.menu > .logo > img {
    width: 80%;
}

</style>