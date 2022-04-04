<template>
<div class="dock-bar">
    <div class="menu">
        <div class="mini-logo">
            <img src="../assets/images/tomdows.png" alt="">
        </div>
        <div class="selector">
            <div class="group">
                <div class="link clickable">
                    <div class="icon"><img src="../assets/icons/game.png" alt=""></div>
                    <div class="text">Game</div>
                </div>
            </div>
            <div class="group">
                <div class="link clickable">
                    <div class="icon"><img src="../assets/icons/music.png" alt=""></div>
                    <div class="text">Music</div>
                </div>
                <div class="link clickable">
                    <div class="icon"><img src="../assets/icons/video.png" alt=""></div>
                    <div class="text">Videos</div>
                </div>
                <div class="link clickable">
                    <div class="icon"><img src="../assets/icons/instagram.png" alt=""></div>
                    <div class="text">Instagram</div>
                </div>
                <div class="link clickable">
                    <div class="icon"><img src="../assets/icons/tiktok.png" alt=""></div>
                    <div class="text">TikTok</div>
                </div>
                <div class="link clickable">
                    <div class="icon"><img src="../assets/icons/merch.png" alt=""></div>
                    <div class="text">Merch</div>
                </div>
            </div>
            <div class="group">
                <div class="link clickable">
                    <div class="icon"><img src="../assets/icons/contact.png" alt=""></div>
                    <div class="text">Contact</div>
                </div>
            </div>
        </div>
    </div>
    <div class="divider"></div>
    <div class="bar">
        <img class="start" src="../assets/images/start.png"/>
        <img class="widget" src="../assets/images/widget.png"/>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.dock-bar {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2px;
    display: flex;
    flex-direction: column;
}
.dock-bar .divider {
    height: 1px;
    width: 100%;
    background: rgb(253, 251, 250);
    position: relative;
}
.dock-bar .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background: rgb(186, 184, 184);
    left: 0;
    top: 2px;
}
.dock-bar .divider::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background: rgb(225, 224, 221);
    left: 0;
    top: -2px;
}

.dock-bar .bar {
    background: rgb(192, 192, 192);
    width: 100%;
    height: 40px;
    border-bottom: 1px solid white;
    display: flex;
    justify-content: space-between;
}

.dock-bar .bar img {
    height: 100%;
    margin-left: 2px;
    margin-right: 2px;
}
.dock-bar .menu {
    width: 275px;
    background: rgb(192, 192, 192);
    z-index: 1;
    margin-left: 6px;
    border-right: 3px solid rgb(28, 25, 25);
    border-bottom: 2px solid rgb(28, 25, 25);
    border-left: 2px solid white;
    border-top: 2px solid white;
    display: flex;
    position: absolute;
    bottom: 41px;
}

.dock-bar .menu > .mini-logo {
    width: 13%;
    background-color: rgb(128, 128, 128);
    position: relative;
    display: flex;
    justify-content: center;
}

.dock-bar .menu > .mini-logo img {
    width: 75%;
    bottom: 3px;
    position: absolute;
}
.dock-bar .menu > .selector {
    height: 100%;
    padding: 3px;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.dock-bar .menu > .selector > .group {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid white;
    width: 100%;
    position: relative;
    padding-top: 5px;
    padding-bottom: 5px;
}
.dock-bar .menu > .selector > .group::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: rgb(128, 128, 128);
}
.dock-bar .menu > .selector > .group > .link {
    display: flex;
    align-items: center;
    padding: 3px;
    padding-left: 10px;
    padding-right: 10px;
    gap: 20px;
}
.dock-bar .menu > .selector > .group > .link:hover {
    background-color: hsl(0, 0%, 60%);
}


</style>