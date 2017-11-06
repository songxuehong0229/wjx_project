<template>
    <div>
        <ul class="proDuct1">
                <li v-for="(item,index) in proArr1" :key="index">
                    <div class="zw-lastTime1"> 
                        <p class="zw-forward1"></p>            
                        <p class="zw-backward1">
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
                    <div class="zw-hhh1">
                        <div class="proDuct-divF1">
                            <img :src="'http://img0.wangjiu.com/'+item.product_main_image"/>
                        </div>
                        <div class="proDuct-divL1">
                            <p>{{item.product_name}}</p>
                            <p>{{item.english_name}}</p>
                            <p>￥{{item.final_price}}</p>
                            <p>
                                <button> 立即抢</button>
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
            proArr1:[],
            day : 0,
			hours : 0,
			minutes : 0,
			seconds : 0
        }
    },
    methods:{
          getJSON1(){
         fetch("/static/json/tomorow.json").then(res=>{
            return res.json();
        }).then(res => {
            console.log(1111,res);
            this.proArr1 = res[0].result[0].flash_product
        })
     },
     getTime(){
				var d = new Date();
				this.hours = (23-d.getHours())<10 ? "0"+(23-d.getHours()) : (23-d.getHours());
				this.minutes = (59-d.getMinutes())<10 ? "0"+(59-d.getMinutes()) : (59-d.getMinutes());
				this.seconds = (59-d.getSeconds())<10 ? "0"+(59-d.getSeconds()) : (59-d.getSeconds());
			}
    },
    
    created(){
        this.getJSON1();
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
.zw-lastTime1{
    position: relative;
    padding: 5% 0;
    margin-bottom: 1%;
    font-size: .5rem;
}
.zw-forward1{
    background: #dedede;
    height: 1px;
    width: 90%;
    margin: 0 auto;
}
.zw-backward1{
    /*background-image: url("/static/img/d02.png") no-repeat;*/
    position: absolute;
    z-index: 1;
    top: 4%;
    left: 30%;
    width: 41%;
    color: #ff9c00;
    background: #fff;
    padding: 0 2%;
}
.zw-backward1>img{
    width: 20%;
    vertical-align: middle;
}
.zw-hhh1{
    display: flex;
}
  .proDuct1{
    font-size: .6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.proDuct1 li{
    display: flex;
    flex-direction: column;
    width: 90%;
    padding-bottom: 1.5rem;
}
.proDuct1 li:first-of-type{
    padding-top: .5rem;
}
.proDuct1 li .proDuct-divF1 img{
    width:100%;
}
.proDuct-divF1{
    width: 35%;
}
.proDuct-divL1{
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.proDuct-divL1 p:nth-of-type(3){
    padding: .3rem 0;
}
.proDuct-divL1 p:nth-of-type(4) button{
    background: #dedede;
    border : none;
    outline: none;
    display: inline-block;
    width: 100%;
    height: 1.3rem;
    font-size: .55rem;
    font-weight: bold;
    color: #fff;
    text-align: center;
}
</style>

