<template>
	<div class="SecondTitle">
		<div class="secondHead">
			<router-link :to="{name:'Home'}">
				<img src="/static/img/t01.png" >
			</router-link>
			<span>秒杀</span>
		</div>
		<div class="secondButton">
			<ul>
				<router-link to="/Second/Progress" active-class="active" tag="li">
					<p >08月08日</p>
					<p >21:00</p>
					<p >进行中</p>
				</router-link>
				<router-link to="/Second/Upcoming" active-class="active" tag="li">
					<p>08月09日</p>
					<p>21:00</p>
					<p>即将开场</p>
				</router-link>
				<router-link to="/Second/Augten"  active-class="active" tag="li">
					<p>08月10日</p>
					<p>21:00</p>
					<p>即将开场</p>
				</router-link>
			</ul>
		</div>
		<div class="fiveTwo">5.2</div>
		<!-- 倒计时部分 -->
		<router-view></router-view>			
	</div>
</template>

<script type="text/javascript">
export default {
	// data(){
	// 	return {
	// 		ischecked:"",
	// 		saleing:[],
	// 		wineQuality:1
	// 	}
	// },
	// methods:{
	// 	alterLi(){

	// 	}
	// },
	// mounted(){
		
//     this.$http.jsonp('http://api.wangjiu.com/api/simple/promotionService/getSecKillPromotionByStartDate?format=jsonp')
//         .then(function(res){
//         	console.log(res)
//             this.saleing=res.data.result.upcoming_list[0].product_list;
//             console.log(this.saleing)
// 					})
// 				 }
   	}
</script>

<style scoped>
	.secondHead{
		height: 2.2rem;
		width: 100%;
		display: flex;
		flex-flow: nowrap row;
		line-height: 2.2rem; 
		background: white;
		border-bottom:1px solid #ccc; 
		color: #ccc;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
	}
	.fiveTwo{
		height: 5.2rem;
		width: 100%;
	}
	.secondHead img{
		height: 0.7rem;
		width: 0.4rem;
		margin-left: 20px;
		margin-right: -20px;
	}
	.secondHead span{
		display: block;
		margin: 0 auto;
		font-size: 0.6rem;
	}
	.secondButton ul{
		width: 100%;	
		display: flex;
		flex-flow:nowrap row; 
		position: fixed;
		top: 2.2rem;
		left: 0;
		z-index: 999;
	}
	.secondButton ul li{
		width: 33.3%;
		background: #2f2f2f;
		height: 3rem;
		text-align: center;
		padding-top: 0.3rem;
		color: #999999;
		position: relative;

	}
	.secondButton ul li p{
		/*color: #999999;*/
		font-size: 0.6rem;
	}
	.secondButton ul li p:nth-child(2){
		font-weight: 900;
		font-size: 0.7rem;
	}
	.active  {
		background: #ca0915 !important;
		color: #fff !important;
		display: block;
	}
	.active::after{
		width: 0;
		height: 0;
		content: "";
		border-width: 10px 10px 0px 10px;
		border-color:#ca0915 transparent;
		border-style:solid;
		position:absolute;
		bottom: -0.4rem;
		left: 2.45rem;
	}

</style>