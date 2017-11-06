<template>
    <div id="swiper_1" class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="../../static/img/detil_1.jpg">
            </div>      
            <div class="swiper-slide">
                <img src="../../static/img/detil_2.jpg">
            </div>      
            <div class="swiper-slide">
                <img src="../../static/img/detil_3.jpg">
            </div>      
            <div class="swiper-slide">
                <img src="../../static/img/detil_4.jpg">
            </div>      
            <div class="swiper-slide">
                <img src="../../static/img/detil_5.jpg">
            </div>      
            <div class="swiper-slide">
                <img src="../../static/img/detil_6.jpg">
            </div>      
            <div class="swiper-slide">
                <img src="../../static/img/detil_7.jpg">
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
<style type='text/css' scoped> 
    .swiper-container{
        width: 100%; 
        height: 16rem;
    }
    #swiper_1>.swiper-wrapper>.swiper-slide>img{
        width: 100%;
        /* height: 50% */
    }

</style>