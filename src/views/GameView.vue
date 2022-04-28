<template>
    <div class="game" v-bind:class="{ 'mobile': isMobile() }">
        <div class="game-container">
            <svg class="rotate-phone" v-if="isVertical" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 122.88 106.43" style="enable-background:new 0 0 122.88 106.43;" xml:space="preserve"><g> <path class="st0" d="M11.1,0h35.63c3.05,0,5.85,1.25,7.85,3.25c2.03,2.03,3.25,4.8,3.25,7.85v31.46h-3.19V12.18H3.15v75.26l0,0   h7.61v11.61c0,1.58,0.27,3.1,0.77,4.51H11.1c-3.05,0-5.85-1.25-7.85-3.25C1.22,98.27,0,95.51,0,92.45V11.1   c0-3.05,1.25-5.85,3.25-7.85C5.28,1.22,8.04,0,11.1,0L11.1,0L11.1,0z M94.95,33.45c-0.37-5.8-2.64-10.56-6.06-13.97   c-3.64-3.63-8.59-5.74-13.94-5.93l2.46,2.95c0.73,0.88,0.62,2.18-0.26,2.91c-0.88,0.73-2.18,0.62-2.91-0.26l-5.72-6.85l0,0   c-0.72-0.86-0.62-2.14,0.22-2.88l6.71-5.89c0.86-0.75,2.16-0.66,2.91,0.19c0.75,0.86,0.66,2.16-0.19,2.91l-3.16,2.78   c6.43,0.21,12.4,2.75,16.8,7.13c4.07,4.06,6.79,9.69,7.25,16.49l2.58-3.08c0.73-0.88,2.04-0.99,2.91-0.26   c0.88,0.73,0.99,2.04,0.26,2.91l-5.73,6.84c-0.72,0.86-1.99,0.99-2.87,0.29l-6.98-5.56c-0.89-0.71-1.04-2.01-0.33-2.91   c0.71-0.89,2.01-1.04,2.91-0.33L94.95,33.45L94.95,33.45z M122.88,59.7v35.63c0,3.05-1.25,5.85-3.25,7.85   c-2.03,2.03-4.8,3.25-7.85,3.25h-78.9c-3.05,0-5.85-1.25-7.85-3.25c-2.03-2.03-3.25-4.8-3.25-7.85V59.7c0-3.05,1.25-5.85,3.25-7.85   c2.03-2.03,4.79-3.25,7.85-3.25h78.9c3.05,0,5.85,1.25,7.85,3.25C121.66,53.88,122.88,56.64,122.88,59.7L122.88,59.7L122.88,59.7z    M35.41,77.49c0,2.51-2.03,4.57-4.57,4.57c-2.51,0-4.57-2.03-4.57-4.57c0-2.51,2.03-4.57,4.57-4.57   C33.36,72.92,35.41,74.95,35.41,77.49L35.41,77.49L35.41,77.49z M37.88,51.75v51.49h72.82V51.75H37.88L37.88,51.75z"/> </g> </svg>
            <div v-show="!isVertical" class="webgl-content" style="z-index: 999;">
                <div class="game-and-instructions">
                    <img src="../../src/assets/images/game/controls.png" v-if="!isMobile()">
                    <div class="retro-window">
                        <div class="top-bar">
                            <div @click="go_home()" class="cancel-btn clickable"><img src="../assets/images/cancel-icon.png" alt=""></div>
                            <div class="maximize-btn clickable fullscreen" @click="toggle"><img src="../assets/images/maximize-icon.png" alt=""></div>
                        </div>
                        <div class="retro-content">
                            <div class="game-and-footer">
                                <fullscreen v-model="fullscreen" id="unityContainer"></fullscreen>
                                <!--
                                        <div class="fullscreen clickable" @click="toggle"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 489.001 489.001" style="enable-background:new 0 0 489.001 489.001;" xml:space="preserve"> <g> <g> <path d="M2.2,168.151l-2.1-151.3c-0.1-7.7,6.2-14,13.9-13.9l151.3,2.2c12.1,0.2,18.1,14.8,9.5,23.4l-42.1,42.1l70,70l-65,65    l-70-70l-42.1,42.1C17.1,186.251,2.4,180.251,2.2,168.151z"/> <path d="M421.3,136.551l42.1,42.1c8.6,8.6,23.2,2.6,23.4-9.5l2.2-151.3c0.1-7.7-6.2-14-13.9-13.9l-151.3,2.2    c-12.1,0.2-18.1,14.8-9.5,23.4l42,41.9l-70,70l65,65L421.3,136.551z"/> <path d="M314.2,460.451c-8.6,8.6-2.6,23.2,9.5,23.4l151.3,2.2c7.7,0.1,14-6.2,13.9-13.9l-2.2-151.3c-0.2-12.1-14.8-18.1-23.4-9.5    l-42.1,42.1l-70-70l-65,65l70,70L314.2,460.451z"/> <path d="M14,485.051l151.3-2.2c12.1-0.2,18.1-14.8,9.5-23.4l-42.1-42l70-70l-65-65l-70,70l-42.1-42.1c-8.6-8.6-23.2-2.6-23.4,9.5    L0,471.151C0,478.851,6.3,485.151,14,485.051z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg></div>
                                    </div>
                                    -->
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
</script>



<script>

import UnityProgress from '../../public/WEBGL/TemplateData/UnityProgress'

const noTocuhName = `WEBGL`
const touchName = 'WEBGL'
export default {
    data() {
        return {
            isVertical: false,
            fullscreen: false
        }
    },
    mounted() {

        window.setInterval(() => {
            this.isVertical = this.isVerticalTest()
        }, 1000); // update every 1 seconds


        if (this.isMobile()) {
            this.unityInstance = UnityLoader.instantiate("unityContainer", `${touchName}/Build/${touchName}.json`, {onProgress: UnityProgress});
            document.querySelector('button').click()
            
        }
        else {
            this.unityInstance = UnityLoader.instantiate("unityContainer", `${noTocuhName}/Build/${noTocuhName}.json`, {onProgress: UnityProgress});

        }
        
        
    },
    methods: {
        isMobile() {
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true
            } 
            else {
                return false
            }
        },
        isVerticalTest() {
            if (window.matchMedia("(orientation: portrait)").matches) {
                return true
            }
            else {
                return false
            }
        },
        toggle() {
            this.fullscreen = !this.fullscreen
        },
        go_home() {
            this.$router.push('/').then(() => {
                this.$router.go()
                // refresh to clear instance of unity.
            })
        }
    }

};
</script>

<style scoped>

.game {
    margin-top: 45px;
    display: flex;
    align-items: center;
}




.game .footer {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-top: 10px;
}


.game .game-and-instructions {
    display: flex;
    align-items: center;
    justify-content: center;

}
.game .game-and-instructions > img {
    width: 20vw;
    height: 20vw;
}


.game .footer > .fullscreen > svg {
    width: 4vw;
    filter: invert(19%) sepia(10%) saturate(9%) hue-rotate(314deg) brightness(91%) contrast(88%);
    /* https://codepen.io/sosuke/pen/Pjoqqp */
}
.game .game-and-footer {
}

.rotate-phone {
    position: absolute;
    width: 80%;
    z-index: 1000;
}

.desktop {
    justify-content: center;
}

.game .game-and-instructions > .retro-window {
    width: 70%;
    z-index: 5;
}

.game .game-and-instructions > .retro-window > .top-bar {
    width: 100%;
    height: 50px;
    background-color: rgb(0, 0, 129);
    display: flex;
    flex-direction: row-reverse;
}
.game .game-and-instructions > .retro-window > .top-bar > div {
    height: 100%;
}


.game .game-and-instructions > .retro-window > .top-bar > div > img {
    height: 100%;
}


.game .game-and-instructions > .retro-window > .retro-content {
    padding: 2vw;
    background-color: rgb(192, 192, 192);
    z-index: 5;
}

.game.mobile {
    margin-top: 0;
}
.game.mobile .game-and-instructions > .retro-window {
    width: 90%;
}


</style>


<style>
.game #unityContainer {
    background: none !important;
}
</style>
