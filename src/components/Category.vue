<template>
	<div>
		<header class="wjw-classify-header">
			<router-link to="./search" >
				<input type="text" class="headerInput">
				<img src="/static/img/se01.png">
			</router-link>
		</header>
		<div class="wjw-classify-wrap">
			<div class="wjw-classify-wrap-left">
				<ul>
					<li v-for="(items,index1) in classifyItems" :key="index1"><a :class="{'active':red==index1}" @click="change(items,index1)" >{{items.category_name}}</a></li>
				</ul>
			</div>
			<div class="wjw-classify-wrap-right">
				<ul>
					<li class="split-item01">
						<img :src="activeItemImg">
					</li>
					<li :class="{'split-item03':index==0,'split-item02':index!=0}" v-for="(item1,index) in activeItemChlid" :key="index">
						<p>{{item1.category_name}}</p>
						<div :class="{'split-item03-wrap':index==0,'split-item02-wrap':index!=0}">
							<a v-for="(item2,i) in item1.child_categories" :key="i">
								<router-link
								 	:to="{
									 	name:'classify.39_389_387_390_395_394',
									 	params:{
									 		result_type : 'jsonp',
									 		start : 1,
									 		pagecount : 10,
									 		tag_key : item2.tag_key,
									 		keyword : item2.keyword
									 	}
								 	}">
									<img :src="'http://img1.wangjiu.com/'+item2.image_url" 
									v-if="item2.image_url">
									<label :class="{'red':i<3}">{{item2.category_name}}</label>
								</router-link>
							</a>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
export default {
	data(){
		return {
			classifyItems : [],
			activeItem : {},
			activeItemImg:"",
			activeItemChlid:[],
			red : 0
		}
	},
	methods:{
		// change(items,index1){
		// 	this.$http.jsonp('http://mobile.wangjiu.com/api/query/getProdCateList.jsonp?')
	 //            .then(res=>res.json())
	 //            .then(res=>{
	 //            	this.classifyItems = res.result;
		// 			this.activeItem = res.result[index1];
		// 			this.activeItemImg = 'http://img1.wangjiu.com/'+res.result[index1].image_url
		// 			this.activeItemChlid = this.activeItem.child_categories;
	 //            }
	 //        )
	 //  		this.red = index1;
		// }
		change(items,index1){
			this.activeItem = this.classifyItems[index1];
			this.activeItemImg = 'http://img1.wangjiu.com/'+this.classifyItems[index1].image_url
			this.activeItemChlid = this.activeItem.child_categories;
	  		this.red = index1;
		}
	},
	mounted(){
        this.$http.jsonp('http://mobile.wangjiu.com/api/query/getProdCateList.jsonp?')
            .then(res=>res.json())
            .then(res=>{
            	// console.log(res.classifyItems);
            	this.classifyItems = res.result;
            	this.activeItem = res.result[0];
				this.activeItemImg = 'http://img1.wangjiu.com/'+res.result[0].image_url
				this.activeItemChlid = this.activeItem.child_categories;
            }
		)
    }
}

</script>

<style scoped>
	.active{
		color: #ca0915 !important;
	    background: #f2f2f2 !important;
	    border-color:#f2f2f2 !important;
	}
	.red{
		color: #ca0915;
	}
	.wjw-classify-header{
		position: fixed;
		width: 100%;
		max-width: 30rem;
		top: 0;
		background: #fff;
		z-index: 999;
		height: 3rem;
		line-height: 3rem;
	}
	.wjw-classify-header .headerInput{
		width: 92%;
		margin: 0 4%;
		height: 1.6rem;
		border:1px solid #D9D9D9;
		background-color: #F5F5F5;
		border-radius: .5rem;
		top: .7rem;
		outline: none;
	}
	.wjw-classify-header img{
		width: 25%;
		position: absolute;
		line-height: 2rem;
		position: absolute;
		top: 38%;
		left: 50%;
		margin-left: -13%;
	}
	.wjw-classify-wrap{
		top: 3rem;
		position: absolute;
		width: 100%;
		bottom: 1.3rem;
		max-width: 15rem;

	}
	.wjw-classify-wrap-left{
		position: absolute;
		left: 0;
		width: 4rem;
		background: #fff;
		border-right: 1px solid #f2f2f2;
		height: 95%;
		overflow-y: auto;
	}
	.wjw-classify-wrap-left ul{
		width: 100%;
	}
	.wjw-classify-wrap-left ul li{
		width: 100%;
	}
	.wjw-classify-wrap-left ul li a{
		display: block;
		position: relative;
		background-color: #fff;
		text-align: center;
		font-size: 0.6rem;
		width: 100%;
		color: #333;
		text-decoration: none;
		line-height: 2.96rem;
		border:1px solid #f2f2f2;
		box-sizing: border-box;
	}
	.wjw-classify-wrap-right {
		position: absolute;
		left: 4.4rem;
		width: 11.6rem;
		top: 0.32rem;
		overflow-y: auto;
		height: 95%;
	}
	.wjw-classify-wrap-right ul{
		overflow-y: auto;
		width: 100%;
		height: 100%;
	}
	.wjw-classify-wrap-right .split-item01{
		width: 100%;
		overflow:hidden;
	}
	.wjw-classify-wrap-right .split-item01 img{
		width: 100%;
	}
	.wjw-classify-wrap-right .split-item03{
		padding-bottom: 4.3%;
		margin-top: 4.3%;
		overflow:hidden;
		background: #fff;
	}
	.wjw-classify-wrap-right .split-item03 p{
		padding-bottom: 2.1%;
		background-color: #f2f2f2;
		font-style: normal;
		padding-right: 5%;
		color: #666;
		font-size: 0.6rem;
	}
	.split-item03-wrap{
		display: flex;
		flex-flow: row wrap;
	}
	.split-item03-wrap>a{
		height: 3.2rem;
		overflow:hidden;
		background: #fff;
		text-align: center;
		width: 3.6rem;
		margin-top: 0.56rem;
		display: block;
		margin-left: 1.5%;
	}
	.split-item03-wrap>a img {
		width: 1.97rem;
		height: 1.97rem;
		display: block;
		border:none;
		margin: auto;
	}
	.split-item03-wrap>a label{
		width: 100%;
		display: block;
		margin-top: .4rem;
		padding: 0 0.16rem;
		overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    font-size: 0.6rem;
	}
	.split-item02{
		margin-top: 4.3%;
		overflow: hidden;
		background-color: #fff;
	}
	.split-item02 p{
		padding-bottom: 2.1%;
		background-color: #f2f2f2;
		font-size: 0.6rem;
	}
	.split-item02-wrap{
		margin-top: 5.8%;
		display: flex;
		flex-flow: row wrap;
	}
	.split-item02-wrap>a{
		display: block;
		text-align: center;
		width: 33%;
		padding-bottom: 6.7%;
		overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.split-item02-wrap img {
		width: 70%;
		display: block;
		margin: 0 auto;
	}
</style>