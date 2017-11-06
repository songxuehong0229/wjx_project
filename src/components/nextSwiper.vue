<template>
   <!--  名庄巡礼 -->
   <div> 
            <p class="upGrey"></p>
            <div class="travel">
               <P class="travelFirstImg"><img :src="famousImg"></P>
                <ul>
                    <router-link :to="{path:'/classify2.376/classify2.1'}" tag="li" v-for="(item,i) in famous.slice(1)" :key='i' >
                        <span @click="toCart(item)"><img :src="'http://img0.wangjiu.com/'+item.ad_source_imgpath"></span> 
                        <p>{{item.ad_schedule_name}}</p>
                        <span>{{item.ad_price}}</span>
                    </router-link>      
                </ul>
            </div>  
    
        <!-- 国之精粹  -->
        <p class="upGrey"></p>
        <div class="travel">
            <P class="travelFirstImg"><img :src="whiteImg"></P>
            <ul>
                <router-link :to="{path:'/classify2.376/classify2.1'}" tag="li" v-for="(item,i) in white.slice(1)" :key='i'>
                    <span  @click="toCart(item)"><img :src="'http://img0.wangjiu.com/'+item.ad_source_imgpath"></span>
                    <p>{{item.ad_schedule_name}}</p>
                    <span>{{item.ad_price}}</span>
                </router-link>
            </ul>
        </div>
       <!--  洋酒 -->
        <p class="upGrey"></p>

        <div class="travel">
            <P class="travelFirstImg"><img :src="jennyImg"></P>
            <ul>
                <router-link :to="{path:'/classify2.376/classify2.1'}" tag="li" v-for="(item,i) in jenny.slice(1)" :key='i'>
                    <span  @click="toCart(item)"> <img :src="'http://img0.wangjiu.com/'+item.ad_source_imgpath"></span>
                    <p>{{item.ad_schedule_name}}</p>
                    <span>{{item.ad_price}}</span>
                </router-link>
            </ul>
        </div> 
    </div> 
</template>
<script>
export default {
     data() {
        return {          
            famous: [],
            famousImg:"",
            white:[],
            whiteImg:"",
            jenny:[],
            jennyImg:"",
            str:'http://img0.wangjiu.com/'
        }
    },
    computed:{
                    
    },
    methods:{
        toCart:function(item){
            item.product_name = item.ad_schedule_name;
            item.final_price = item.ad_price;
            // item.english_name = item.english_name;
            item.image_src= item.ad_source_imgpath;
            item.pid = item.ad_pid;
            console.log(33333,item)
            return this.$store.commit("activeItem",item)
          }

    },
    mounted(){
        this.$http.jsonp('http://webapi.wangjiu.com/api/board/query/space.jsonp?space_id=400')
                .then(function(res){
                    return res.json();
                }).then(function(res){                            
                    this.famous = res.result;
                    this.famousImg = this.str+this.famous[0].ad_source_imgpath
                  
                }) ,
        this.$http.jsonp('http://webapi.wangjiu.com/api/board/query/space.jsonp?space_id=401')
                .then(function(res){
                    return res.json();
                }).then(function(res){
                    this.white = res.result;
                    this.whiteImg = this.str+this.white[0].ad_source_imgpath
                }),
        this.$http.jsonp('http://webapi.wangjiu.com/api/board/query/space.jsonp?space_id=402')
                .then(function(res){
                    return res.json();
                }).then(function(res){
                    this.jenny = res.result;
                    this.jennyImg = this.str+this.jenny[0].ad_source_imgpath
                })
    }
}
</script>
<style type='text/css'> 
    .upGrey{
        width: 100%;
        height: 0.4rem;
        background: #f2f2f2;
    }
    .travel{
        position: relative;
    }
    .travelFirstImg {
        width: 100%
    }
    .travelFirstImg img{
        display: block;
        width: 100%;
    }
    .travel ul li span:first-child{
        display: block;
        height: 4.3rem;
        width: 4.3rem;
        margin: 0.2rem; 
        border: 1px solid #ccc; 
    }
    .travel ul li span:last-child{
        color: #ca0915;
    }
    .travel ul li{
        text-align: center;
    }
    .travel ul li p{
        white-space:nowrap;
        text-overflow:ellipsis;
        overflow: hidden;
    }
    .travel ul{
        margin-top:0.2rem; 
        width: 100%;
        overflow: scroll;
        height:7rem;
        display: flex;
        flex-flow: nowrap row;
    }
    .travel ul li img{
        display: block;
        width: 100%;
    }
   .travel ul::-webkit-scrollbar{
            width: 0;
    }
    .travel::after{
        width: 0;
        height: 0;
        content: "";
        border-width: 0px 12px 12px 12px;
        border-color:white transparent;
        border-style:solid;
        position:absolute;
        top: 5.85rem;
        left: 47%;
    }
    
  
</style>