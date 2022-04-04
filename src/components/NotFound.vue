
<template>
<div class="not-found">
    <div class="box">
        <div class="logo-img">
            <img src="../assets/images/404.png" alt="logo">
        </div>
        <div class="description">
            <div class="_404">404</div>
            <div class="sub">Page not found</div>
            <div class="redirect">
            
                <router-link to="/"><h4>Try going back to <span class="clickable">Home</span></h4></router-link>
            </div>
        </div>
    </div>
</div>
    
</template>



<script>



export default {

}


</script>

<style scoped>
.not-found {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}

.not-found .box {
    display: flex;
    align-items: center;
}

.not-found .box .logo-img {
    width: 700px;
}

.not-found .box .logo-img img {
    width: 100%;
}

.not-found .box .description {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.not-found .box .description ._404 {
    margin-top: 25px;
    font-size: 54px;
    font-weight: 400;
    text-align: center;
}
.not-found .box .description .sub {
    font-size: 20px;
    font-weight: 400;
    color: var(--blue-grey-600);
}

.not-found .box .redirect h4 {
    font-weight: 600;
    white-space: nowrap;
}

.not-found .box .redirect h4 span {
    color: blue;
    padding-top: 10px;
    padding-bottom: 10px;
}
.not-found .box .redirect a {
    text-decoration: none;
    color: unset;
}
.not-found .box .redirect h4 span:hover {
    text-decoration: underline;
}
</style>

