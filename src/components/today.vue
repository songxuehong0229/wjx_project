<template>
        <div>
            <ul class="proDuct">
                <li v-for="(item,index) in proArr" :key="index">
                    <div class="zw-lastTime"> 
                        <p class="zw-forward"></p>            
                        <p class="zw-backward">
                            <img src="/static/img/d02.png"/>
                            <span>{{day}}</span>
                            <span>:</span>
                            <span>{{hours}}</span>
                            <span>时</span>
                            <span>{{minutes}}</span>
                            <span>分</span>
                            <span>{{seconds}}</span>
                        </p> 
                    </div>
                    <div class="zw-hhh">
                        <div class="proDuct-divF">
                            <img :src="'http://img0.wangjiu.com/'+item.product_main_image"/>
                        </div>
                        <div class="proDuct-divL">
                            <p>{{item.product_name}}</p>
                            <p>{{item.english_name}}</p>
                            <p>￥{{item.final_price}}</p>
                            <p @click="toCart(item)">
                                <router-link tag="button" :to="{
                                    path: '/classify2.376/classify2.1',
                                }"> 立即抢</router-link>
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
</template>

<script>
export default {
    data(){
        return {
            proArr:[],
            day : 0,
			hours : 0,
			minutes : 0,
			seconds : 0
        }
    },
    methods:{
        getJSON(){
         fetch("/static/json/today.json").then(res=>{
            return res.json();
        }).then(res => {
            // console.log(1111,res);
            this.proArr = res[0].result[0].flash_product
        })
     },
        toCart:function(item){
            // console.log(555555,item)
            // console.log(11111111111,item.product_main_image)
            item.image_src = item.product_main_image
            item.product_name = item.product_name;
            item.sale_price = item.final_price;
            console.log(item)
            return this.$store.commit("activeItem",item);
        },
        getTime(){
				var d = new Date();
				this.hours = (23-d.getHours())<10 ? "0"+(23-d.getHours()) : (23-d.getHours());
				this.minutes = (59-d.getMinutes())<10 ? "0"+(59-d.getMinutes()) : (59-d.getMinutes());
				this.seconds = (59-d.getSeconds())<10 ? "0"+(59-d.getSeconds()) : (59-d.getSeconds());
			}

    },
    created(){
        this.getJSON();
        var d = new Date();
            this.hours = (23-d.getHours())<10 ? "0"+(23-d.getHours()) : (23-d.getHours());
            this.minutes = (59-d.getMinutes())<10 ? "0"+(59-d.getMinutes()) : (59-d.getMinutes());
            this.seconds = (59-d.getSeconds())<10 ? "0"+(59-d.getSeconds()) : (59-d.getSeconds());
    },
    updated(){
			setInterval(this.getTime,1000);
		}, 
}
</script>

<style>
.zw-lastTime{
    position: relative;
    padding: 3% 0;
    margin-bottom: 5%;
    font-size: .5rem;
} 
.zw-lastTime .zw-forward{
    background: #dedede;
    height: 1px;
    width: 90%;
    margin: 0 auto;
}
.zw-backward{
    /*background-image: url("/static/img/d02.png") no-repeat;*/
    position: absolute;
    z-index: 1;
    top: 4%;
    left: 25%;
    width: 50%;
    color: #ff9c00;
    background: #fff;
    padding: 0 2%;
}
.zw-backward>img{
    width: 20%;
    vertical-align: middle;
}
.proDuct{
    font-size: .7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    }

.proDuct li{
    display: flex;
    flex-direction: column;
    width: 90%;
    padding-bottom: 1.5rem;
}
.proDuct li:first-of-type{
    padding-top: .5rem;
}
.zw-hhh{
    display: flex;
    font-size: .6rem;
}
.proDuct li .proDuct-divF img{
    width:100%;
}
.proDuct-divF{
    width: 35%;
}
.proDuct-divL{
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.proDuct-divL p:nth-of-type(2){
    font-size: .5rem;
}
.proDuct-divL p:nth-of-type(3){
    padding: .3rem 0;
}
.proDuct-divL p:nth-of-type(4) button{
    background: #ca0915;
    border: .1rem solid #ca0915;
    outline: none;
    display: inline-block;
    width: 100%;
    height: 1.3rem;
    font-size: .55rem;
    font-weight: bold;
    color: #fff;
    text-align: center;
    /*line-height: 1.2rem;*/
}
</style>
