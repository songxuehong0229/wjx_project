<template>
	<div  style="padding-top:2.4rem">
		<div class="wj-header">
			<a href="javascript:history.go(-1)" class="hd-back"></a>
			<router-link to="./search" ><input type="text" class="hd-input"></router-link>
			<div class="hd-right">
				<span class="dot"></span>
			</div>
		</div>
		<div class="row1">
			<div class="choose">
				<a :class="{'oactive':isReverse=='zonghe'}" @click="zonghe1">综合</a>
				<a :class="{'oactive':isReverse=='sale'}" @click="sale1">销量</a>
				<a :class="{'oactive':(isReverse=='jiangxu' || isReverse=='shengxu')}" @click="range">价格</a>
				<a :class="{'oactive':isReverse=='pinglun'}" @click="isReverse='pinglun'">评论</a>
				<a  @click="isbig=!isbig" :class="{'bg':isbig}"></a>
			</div>
			<ul class="choose-scroller">
				<li v-for="item in datas"  @click="activeItem(item)" v-if="!isbig">
					<router-link :to="{
						path:'/classify2.376/classify2.1'
					}">
					<a>
						<div class="left-label">
							<img :src="'http://img0.wangjiu.com/'+item.image_src">
						</div>
						<div class="right-label">
							<p>
								<span>&nbsp;&nbsp;&nbsp;</span>
								<label>{{item.product_name}}</label>
								<em>{{item.english_name}}</em>
								<span>￥{{item.final_price}}</span>
							</p>
						</div>
					</a>
					<span class="line"></span>
					</router-link>
				</li>
				<li v-for="item in datas" @click="activeItem(item)" v-if="isbig" :class="{'activeBig': isbig}">
					<router-link :to="{
						path:'/classify2.376/classify2.1'
					}">
					<a>
						<div class="left-label1" >
							<img :src="'http://img0.wangjiu.com/'+item.image_src">
						</div>
						<div class="right-label1">
							<p>
								<span>&nbsp;&nbsp;&nbsp;</span>
								<label>{{item.product_name}}</label>
							</p>
							<span>￥{{item.final_price}}</span>
						</div>
					</a>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">
export default {
	data(){
		return {
			items : [],
			isReverse : "zonghe",
			oitems : [],
			isbig:false,
		}
	},
	mounted(){
		console.log("tag_key",this.$route.params.tag_key)
		if(this.$route.params.keyword){
				this.$http.jsonp('http://so.wangjiu.com/product/select/?result_type=jsonp&pagecount=10&start=+1&keyword='+this.$route.params.keyword)
			.then(res=>res.json())
			.then(res=>{
				this.items = res.result;
				this.$store.commit("activeItems",this.items);
				this.oitems.push(...res.result);
			})
		}else if(this.$route.params.tag_key){
			this.$http.jsonp('http://so.wangjiu.com/product/select/?result_type=jsonp&pagecount=10&start=+1&tag_key='+this.$route.params.tag_key)
			.then(res=>res.json())
			.then(res=>{
				this.items = res.result;
				this.$store.commit("activeItems",this.items);
				this.oitems.push(...res.result);
			})
		}else if(!this.$route.params.tag_key){
			this.items = this.$store.getters.ge8tItems;
			this.oitems = this.$store.getters.getItems
		}
		window.addEventListener('scroll',this.jiazai)
	},
	beforeDestroy() {
        window.removeEventListener('scroll', this.jiazai);
    },
	computed:{
		datas(){
			if(this.isReverse==='shengxu'){
				return this.items.sort((a,b)=>a.final_price-b.final_price);
			}else if(this.isReverse==='jiangxu'){
				return this.items.sort((a,b)=>b.final_price-a.final_price);
			}else if(this.isReverse==="zonghe"){
				return this.oitems;
			}else if(this.isReverse==="sale"){
				return this.items.sort((a,b)=>b.sale_count-a.sale_count);
			}else if(this.isReverse==="pinglun"){
				return this.items.sort((a,b)=>b.comment_count-a.comment_count);
			}
		}
	},
	methods:{
		activeItem(item){
			return this.$store.commit("activeItem",item);
		},
		range(){
			this.isReverse==='shengxu' ? this.isReverse = 'jiangxu' : this.isReverse = 'shengxu';
		},
		zonghe1(){
			this.isReverse = "zonghe";
		},
		sale1(){
			this.isReverse = "sale";
		},
		jiazai(){
			var sh = document.body.scrollHeight;
            var ch = document.body.clientHeight || document.documentElement.clientHeight;
            var st = document.body.scrollTop;
            var start = 1;
			if(ch+st>= sh){
				start++;
				this.$http.jsonp('http://so.wangjiu.com/product/select/?result_type=jsonp&pagecount=10&start='+start+'&tag_key='+this.$route.params.tag_key)
				.then(res=>res.json())
				.then(res=>{
					this.datas.push(...res.result);
				})
				return;
			}
		}
	}
}
</script>

<style scoped>
	.choose .oactive{
		color:#cd2524;
	}
	.wj-header{
		width: 100%;
		z-index: 999;
		position: fixed;
		background: #fff;
		top: 0;
		height: 2.4rem;
		line-height: 2.4rem;
		max-width: 16rem;
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
	}
	.hd-back:after {
	    content: "";
	    width: .5rem;
	    height: .5rem;
	    position: absolute;
	    top: .9rem;
	    left: 1.05rem;
	    border-bottom: 1px solid #5d5d5d;
	    border-right: 1px solid #5d5d5d;
	    transform: rotate(135deg);
	}
	.hd-input{
		width: 100%;
		line-height: 1.2rem;
		height: 1.7rem;
		top:.35rem;
		border-radius: .25rem;
		border:1px solid #D9D9D9;
		background-color: #f5f5f5;
		padding: .1rem .4rem;
		outline: none;
	}
	.hd-right{
		position: absolute;
		width: 2rem;
		font-size: .7rem;
		right: 0;
		top: 0;
		height: 2.4rem;
		line-height: 2.4rem;
	}
	.hd-right .dot{
		position: absolute;
		top: 45%;
		left: .5rem;
	    width: 5px;
	    height: 5px;
	    background: #999;
    	border-radius: 50%;
	}
	.dot::before,.dot::after {
	    display: block;
	    content: '';
	    position: absolute;
	    background: #999;
	    width: 5px;
	    height: 5px;
	    border-radius: 50%;
	}
	.dot::before{
		left: -.5rem;
	}
	.dot::after{
		left: .5rem;
	}
	.row1{
		background: #fff;
		/*margin-top: 2.4rem;*/
	}
	.choose{
		padding: 3% 0 ;
		position: relative;
		border-top:1px solid #D9D9D9;
		border-bottom: 1px solid #D9D9D9;
		display: flex;;
		flex-flow: row nowrap;
	}
	.choose a{
		font-size: .6rem;
		display: block;
	    width: 21%;
	    text-align: center;
	    text-decoration: none;
	    color: #434343;
	    font-size: 4vw;
	    position: relative;
	    line-height: 5vw;
	}
	.choose a:last-child{
		border-left: 1px solid #dedede;
	    background: url(/static/img/s09.png) 50% no-repeat;
	    background-size: contain;
	    padding: 2.5vw 0;
	    width: 15%;
	}
	.choose a.bg{
		background: url(/static/img/s10.png) 50% no-repeat;
		background-size: contain;
	}
	.choose-scroller{
		padding-top: 1.3vw;
		background: #f2f2f2;
	}
	.row1 ul li{
		overflow:hidden;
		padding: 3% 0;
		position: relative;
		background: #fff;
	}
	.activeBig{
		width: 49.5%;
	    float: left;
	    margin: 3px 0.5% 0 0;
	    background: #fff;
	    height: 61vw;
	}
	.left-label1{
		width: 100%;
		text-align: center;
	}
	.left-label1 img{
		width: 90%;
	}
	.right-label1{
		padding: 3% 0 3% 4%;
	}
	.right-label1 p{
		width: 100%;
	    overflow: hidden;
	    padding-top: 1vw;
    	line-height: 5vw;
	}
	.right-label1 p span {
		width: 13.5%;
		background: url(/static/img/s14.png) no-repeat 50%/100% auto;
		display: inline-block;
		margin-right: 3%;
		float: left;
	}
	.right-label1 p label{
	    max-width: 77%;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    display: inline-block;
	    float: left;
	}
	.right-label1 em{
		overflow: hidden;
	    font-size: 3.5vw;
	    padding-top: 2.5vw;
	    height: 7vw;
	    line-height: 3.5vw;
	}
	.right-label1 span {
		color: #ca0915;
	}
	.row1 ul li a{
		display: block;
		color: #434343;
		text-decoration: none;
	}
	.left-label{
		width: 22.4%;
		margin:0 2%;
		float: left;
	}
	
	.left-label img{
		width:100%; 
	}
	.right-label{
		float: left;
		width: 72%;
	}
	.right-label p{
		overflow:hidden;
		padding-top: 1vw;
		line-height: 5vw;
		color: #434343;
		font-size: 3.8vw;
	}
	.right-label p span:first-child{
		overflow:hidden;
		margin-left: 1%;
		width: 9%;
		color: #ca0915;
		display: inline-block;
		background: url(/static/img/s14.png) no-repeat 50%/100% auto;
	}
	.right-label p label{
		overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    display: inline-block;
	    max-width: 84%;
	}
	.right-label em{
	    font-size: 3.5vw;
	    padding-top: 2.5vw;
	    height: 7vw;
	    display: block;
	    color: #bbb;
    	margin-bottom: 5%;
	    line-height: 3.5vw;
	    font-size: normal;
	}
	.right-label span {
		color: #ca0915;
	}
	.row1 ul li .line{
		border-bottom: 1px solid #e9e9e9;
	    position: absolute;
	    bottom: 0;
	    left: 27%;
	    width: 73%;
	}
</style>