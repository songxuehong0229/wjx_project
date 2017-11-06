<template>
    <div id="home">
        <swiper></swiper>
                <!-- 轮播图下4小块 -->
        <div class="four">
        <!-- 限时秒抢 -->
            <ul>
                <router-link to="/Second/Progress" tag='li' v-for="(item,index) in fours" :key='index'>
                    <img :src="'http://img0.wangjiu.com/'+item.ad_source_imgpath">
                    <p>{{item.ad_schedule_name}}</p>
                </router-link>
            </ul>
        </div>
      <!--  接下来的限时秒杀 -->
        <div class="second clearfixed">
            <ul>
                <li v-for="(item,index) in second" :key="index">
                <a href="" class="wrapperImg">
                    <router-link to="GoShopping/a" tag="img" :src="'http://img0.wangjiu.com/'+item.ad_source_imgpath">
                    </router-link></a>
                </li>   
            </ul>
        </div>
        <!-- 送礼必备 --> 
        <p class="perfect"><img src="/static/img/1499321183693521.jpg"></p>
        <div class="present">
                <ul>
                    <li><img src="/static/img/1481186366314847.jpg"></li>
                    <li><img src="/static/img/1481186392617009.jpg"></li>
                    <li><img src="/static/img/1478074771760112.jpg"></li>               
                </ul>           
        </div>
        <!-- 名庄巡礼 -->
        <nextSwiper></nextSwiper>
      <!--  热卖推荐 -->
        <div class="hotSale">
            <span class="hotSaleBefore"></span>
            <span>热卖推荐</span>
            <span class="hotSaleAfter"></span>
        </div>
        <div class="homeSale">
            <ul>
                <router-link :to="{
                    path:'/classify2.376/classify2.1'
                    }" tag="li"  v-for="(item,index) in homeSale" :key="index">
                    <img  v-lazy="'http://img0.wangjiu.com/'+item.image_src" @click="toCart(item)">
                    <p>{{item.product_name}}</p>
                    <span>{{"￥" + item.sale_price}}</span>
                </router-link>
            </ul>
      </div>
       <p class="blank">.....没有更多了</p>
    </div>
</template>
<script>
import swiper from "./swiper"
import nextSwiper from "./nextSwiper"
export default {
    components:{
        swiper,
        nextSwiper
    },
    data() {
        return {
            fours: [],
            second: [],
            famous: [],
            homeSale: []
        }
    },
     methods:{
        toCart:function(item){
            item.final_price = item.sale_price;
            console.log(33333,item)
            return this.$store.commit("activeItem",item)
          }
    },
     mounted(){
        this.$http.jsonp('http://webapi.wangjiu.com/api/board/query/space.jsonp?space_id=396')
                .then(function(res){
                    return res.json();
                }).then(function(res){
                    this.fours = res.result;
                })
        //限时秒杀数据
         this.$http.jsonp('http://webapi.wangjiu.com/api/board/query/space.jsonp?space_id=397')
                .then(function(res){
                    return res.json();
                }).then(function(res){
                    this.second = res.result;
                })
         
        //   热卖推荐
         this.$http.jsonp('http://api.wangjiu.com/api/simple/recommendService/recommendJP?format=jsonp')
                .then(function(res){
                    return res.json();
                }).then(function(res){
                    this.homeSale = res.result;
                })  
    }
}
</script>
<style type='text/css'>  /*轮播图下4小块*/

    @import "/static/style/swiper.min.css";
    .con {
        float: left;
        margin: 0 auto;
    }
    .four {
        width: 100%;
        font-size: 0.56rem;
        color: #666666;
        height: 4.4rem;
        margin-top:-0.2rem; 
        }
    .four ul{
        display: flex;
        flex-flow: nowrap row;  
        width: 100%;
        background: white;
        height: 4rem;
    }
    .four ul li{
        width: 25%;
        text-align: center;
    }
    .four ul li img{
        display: block;
        width: 48%;
        display: flex;
        margin:0.7rem auto 0.2rem;
    }
        /*接下来的限时秒杀*/
   
    .second ul{
        width: 100%;
        align-items: flex-start;
        height: 10rem;
    }
    .second ul li{
        width: 50%;
        text-align: center;
        float: left;
    }
    .second ul li img{
        display: block;
        width: 100%;
        display: flex;
    }
    .second ul li:first-child{
        height: 9.2rem;
    }
    .present ul{
        clear: both;
        display: flex;
        flex-flow:wrap row; 
        margin-bottom:0.3rem; 
    }
    .present p{
        width: 100%;
    }
    .present p img{
        display: block;
        width: 100%;
    }
    .present ul li {
        width: 33.3%;
    }
    .present ul li img{
        padding-top:0.3rem;
        display: block;
        width: 92%;
        margin: 0 auto;
    }
    .present ul li:first-child img{
        margin-right:0; 
    }
    .present ul li:last-child img{
        margin-left:0; 
    }
    .innerFamous{
        width: 100%;
        overflow: auto;
    }
    /*热卖推荐数据*/
    .homeSale ul{
        display: flex;
        flex-flow: wrap row; 
    }
    .homeSale ul li{
        width: 50%;
        border: 1px solid #D9D9D9;
        height: 10.4rem;
        padding-bottom: 0.2rem;
    }
    .homeSale ul li img{
        margin: 0.4rem auto;
        display: block;
        width: 95%;
    }
    .homeSale ul li p{
        font-size: 0.6rem;
        white-space:nowrap;
        text-overflow:ellipsis;
        overflow: hidden;
        text-indent: 0.3rem;
        color: #333;
    }
    .homeSale ul li span{
        display: block;
        font-size: 0.7rem;
        color: #ca0915;
        text-indent: 0.3rem;
        display: block;
        font-weight:100; 
        /*margin: 0.2rem 0 ;*/
    }
    .hotSale{
        height: 2.4rem;
        width: 100%;
        background: #f2f2f2;
        text-align: center;
        line-height:2.7rem;
        font-size: 0.6rem; 
        color: #666666;
        display: flex;
        flex-flow:nowrap row;
        justify-content: center;
        align-items: center; 
    }
    .hotSale span{
        display: block;
    }
    .blank{
        height: 4.7rem;
        width: 100%;
        background: #f2f2f2;
        text-align: center;
        line-height:2.7rem;
        font-size: 0.7rem; 
        color: #666666;
    }
    .perfect{
        width: 100%;
        border-bottom:0.4rem solid #f2f2f2;
    }
    .perfect img{
        display: block;
        width: 100%;
    }
    .hotSaleAfter,.hotSaleBefore{
        margin: 0 0.5rem;
        width: 5rem;
        height: 0rem;
        border-top:1px solid #ccc; 
    }
</style>