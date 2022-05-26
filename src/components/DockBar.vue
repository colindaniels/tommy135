<template>
<div class="dock-bar">
    <div class="divider"></div>
    <div class="bar">
        <img @click="go_home" class="start clickable" src="../assets/images/start.png"/>
        <img class="widget" src="../assets/images/widget.png"/>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        go_home() {
            this.$router.push(`/${this.base_path}`).then(() => {
                this.$router.go()
                // refresh to clear instance of unity.
            })
        }
    },
    data() {
        return {
            base_path: process.env.VUE_APP_BASE_PATH
        }
    }
}
</script>

<style scoped>
.dock-bar {
    position: fixed;
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






</style>