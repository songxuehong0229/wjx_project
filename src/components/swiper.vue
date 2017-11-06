<template>
    <div id="swiper" class="swiper-container">
        <img src="/static/img/headPhone.png" id="headPhone">
        <div class="con">
            <input type="text">
            <router-link to="/search" id="search_index"></router-link>
        </div> 
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="../../static/img/1482490659629987.jpg">
            </div>      
            <div class="swiper-slide">
                <img src="../../static/img/1498111805830148.jpg">
            </div>      
            <div class="swiper-slide">
                <img src="../../static/img/1498805745002343.jpg">
            </div>      
            <div class="swiper-slide">
                <img src="../../static/img/1499326737781151.jpg">
            </div>      
            <div class="swiper-slide">
                <img src="../../static/img/1499936175921142.jpg">
            </div>      
            <div class="swiper-slide">
                <img src="../../static/img/1501491865971699.jpg">
            </div>      
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
export default {
     mounted(){
        new Swiper ('.swiper-container', {
            pagination : '.swiper-pagination',
            loop: true,
            speed: 1000,
            autoplay: 2000
        })
    }
}
</script>
<style type='text/css'> 
  @import url("/static/style/swiper.min.css");

    #swiper>.swiper-wrapper>.swiper-slide>img{
        width: 100%;
        height: 9rem;
    }
    .con{
        position: fixed;
        top: 0.2rem;
        right: 20%;
        z-index: 99999999;
        width: 60%;
      }
    #headPhone{
        position: fixed;
        top: 0.3rem;
        right: 0.8rem;
        height: 0.8rem;
        width: 0.8rem;
         z-index: 99999;
    }
    .con input{
        background-color: rgba(238,238,238,0.55);
        text-align: center;
        height: 1.1rem;
        right: 20%;
        width: 100%;
        border-radius: 5px;
        outline: none;
        border: none;

    }
    #swiper{
        position: relative;
    }
    .con a {
    display: block;
    background: url(/static/img/se01.png) no-repeat;
    position: absolute;
    left: 38%;
    top: 24%;
    display: block;
    width: 3rem;
    height: 0.6rem;
    background-size: 100% 100%;
    z-index: 999999;
}

</style>