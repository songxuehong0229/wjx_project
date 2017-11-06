<template>
  <div>
        <!-- <div class="TitleBlank"></div> -->
       	<ul class="ProgressUl">
			<li v-for="(item,index) in items" :key="index">
				<div class="lastTime"> 
					<p class="forward"></p>            
						<span class="TitleEnd">距结束</span>
						<p>{{day}}</p>
						<span>:</span>
						<p>{{hours}}</p>
						<span>:</span>
						<p>{{minutes}}</p>
						<span>:</span>
						<p>{{seconds}}</p>
					<p class="backward"></p>
				</div>
				<div class="downImg">
					<div class="leftImg" ><img :src="'http://img0.wangjiu.com/'+item.product_main_image"></div>
					<div class="rightImg">
						<span>{{item.product_name}}</span>
						<span>￥{{item.final_price}}</span>
						<p class="rub">
							<span @click="toCart(item)">
								<router-link :to="{path:'/classify2.376/classify2.1'}" tag="button">立即抢</router-link>
							</span>
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
        return{
			Augten:[],
			items:[],
			day : 2,
			hours : 0,
			minutes : 0,
			seconds : 0
        }
	},
	created(){
		var d = new Date();
		this.hours = (23-d.getHours())<10 ? "0"+(23-d.getHours()) : (23-d.getHours());
		this.minutes = (59-d.getMinutes())<10 ? "0"+(59-d.getMinutes()) : (59-d.getMinutes());
		this.seconds = (59-d.getSeconds())<10 ? "0"+(59-d.getSeconds()) : (59-d.getSeconds());
	},
	methods:{
		toCart:function(item){
			item.product_name = item.detail_product_name;
            item.final_price = item.final_price;
            item.english_name = item.english_name;
            item.image_src= item.product_main_image;
            item.pid = item.detail_product_id;
			return this.$store.commit("activeItem",item)
		},
		getTime(){
			var d = new Date();
			this.hours = (23-d.getHours())<10 ? "0"+(23-d.getHours()) : (23-d.getHours());
			this.minutes = (59-d.getMinutes())<10 ? "0"+(59-d.getMinutes()) : (59-d.getMinutes());
			this.seconds = (59-d.getSeconds())<10 ? "0"+(59-d.getSeconds()) : (59-d.getSeconds());
		}
	},
  	mounted(){
    this.$http.get('/static/json/timeLimit.json')
		.then(function(res){
			// console.log(123233543,res.data.result.upcoming_list[1])
			this.items = res.data.result.upcoming_list[1].product_list
		})
	},
	updated(){
		setInterval(this.getTime,1000);
	}
}
</script>

<style>
  /* .TitleBlank{
    width: 100%;
    height: 0.5rem;
    background: #fff;
    margin-top:5.2rem; 
  } */
  .ProgressUl li{
      width: 100%;
      height: 9rem;
      background: white;      
  }
  .lastTime {
      width: 100%;
      text-align: center;
      height: 2.3rem;
      line-height: 2.3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
  }
  .lastTime p,.lastTime span{
	  display: inline-block;
	  margin-left:0.1rem; 
  }
  .lastTime p{
      background: #494949;
      width: 1rem;
      height: 1rem;
      line-height: 1rem;
      border-radius: 4px;
      color: #fff;
      font-size: 0.6rem;
      margin-top:0.2rem; 
  }
  .downImg{
	width: 100%;
    height: 6rem;
	display: flex;
	padding-left: 20px;
  }
  .leftImg{
	/* height: 5rem; */
	width: 40%; 
	display: flex; 
	justify-content: center;
	margin-right: 20px;
  }
  .leftImg img{
    	width: 100%;  
	  /* height: 100%;   */
  }
  .rightImg{
	width: 67%;
	height:6rem; 
	padding-right: 0.5rem;
	display: flex;
	flex-direction: column;
	padding-top: 10px;
}
  .rightImg span:first-child {
    font-size: 0.6rem;
    color: #434343;
  }
   .rightImg span:nth-child(2){
    font-size: 0.6rem;
    color: #ca0915;
	margin: 20px 0;
   }
   .rub{

   }
   .rub input{
    height: 0.9rem;
    width: 1.5rem;
    background: #f2f2f2;
    outline: none;
    border: none;
    text-align: center;
    margin: 0 0.2rem;
   }
   .rub button{
    height: 1rem;
    width: 1rem;
    background: #f2f2f2;
    outline: none;
    border: none;
    text-align: center;    
   }
   .rub button:last-child{
    height: 1rem;
    width:5rem;
    background: #ca0915;
    color: #fff;
    text-align: center; 
    line-height: 1rem;  
   }
   .lastTime .forward{
      width: 3.3rem;
      height: 0rem;
      border-top:1px solid #ccc;
   }
   .lastTime .backward{
      width: 3.5rem;
      height: 0rem;
      border-top:1px solid #ccc; 
   }
    .TitleEnd{
      margin: 0.2rem 0.2rem 0;
    } 

</style>
