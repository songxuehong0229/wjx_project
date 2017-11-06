<template>
	<div style="background:#f2f2f2;">
		<div class="describe-wrap">
			<div class="decribe-wrap-show">
				<swiperDetil></swiperDetil>
				<div class="show-text">
					<p class="m-title">
						<i>自营</i>
						<label>{{item.product_name}}</label>
					</p>
					<p class="s-title">{{item.english_name}}</p>
					<p class="sell-title">{{item.sell_point_title}}</p>
					<div class="price">
						<span>￥<em>{{item.final_price}}</em></span>
					</div>
					
				</div>
				<div class="form-item" v-if="item.is_gift!=0">
					<em>赠品</em>
					<span>赠送乐美压实为香槟高脚杯170ml*2 x1</span>
				</div>
			</div>
		</div>
		<div class="oitem minb">
			<a>商品信息</a>
			<div class="r-slip"></div>
		</div>
		<div class="minb space-top">
			<div class="form-item1">
				<a href="">选择数量</a>
				<div class="item1-right">
					<button @click="count= count>0 ?count-1:0">-</button>
					<button>{{count}}</button>
					<button @click="count=count+1">+</button>
				</div>
			</div>
		</div>
		<div class="minb space-top">
			<div class="form-item1 bor">
				<div class="r-slip">					
				</div>
				<div >
					<p>送货至</p>
					<span>
						<em>北京市 北京市 西城区</em>
						<em>
							<label>有货</label>
							由<label>网酒网</label>"发货,并提供售后服务"
						</em>
					</span>
				</div>
			</div>
		</div>
		<div class="minb">
			<div class="form-item2">
				<div class="r-slip"></div>
				<span class="v-all">查看全部</span>
				<p>商品评价(<label>91</label>)</p>
			</div>
		</div>
		<div class="space-out" >
			<div class="form-item6">
				<p></p>
				<span>点击查看商品详情</span>
			</div>
		</div>
		<div class="down-wrap">
			<a>
				<i class="iconfont icon_home">&#xe605;</i>
				<p>收藏</p>
			</a>
			<a>
				<i class="iconfont icon_kefu">&#xe624;</i>
				<p>客服</p></a>
			<router-link tag="a" to="/cart">
				<i class="iconfont icon_shop">&#xe601;</i>
				<p>购物车</p>
				<b v-if="countA">{{countA}}</b>
			</router-link>
			<a class="shop" @click="addItem">加入购物车</a>
		</div>
	</div>
</template>

<script type="text/javascript">
	import swiperDetil from "./swiper_2.vue";
	import {mapState,mapGetters} from "vuex"
	export default {
		data(){
			return {
				count : 0
			}
		},
		computed:{
			item(){
				return this.$store.getters.getItem
			},
			countA(){
				return this.$store.getters.countAll
			}
		},
		components : {
			swiperDetil
		},
		mounted(){

		},
		methods : {
			addItem (){
				this.item.count = this.count;
				if(this.item.count!=0){
					return this.$store.commit("addItem",this.item);
				}
			}
		}
	}
</script>

<style scoped>
	@import url("/static/style/swiper.min.css");
	@import url("/static/style/common.css");
    .icon_home{
        font-family: iconfont;
        font-size: 1rem;
        color: #999;
    }
    .icon_cart,.icon_kefu,.icon_shop{
        font-family: iconfont;
        color: #999;
        font-size: 1rem;
    }
	.item-header{
		position: fixed;
		width: 100%;
		top: 0;
		background-color: #fff;
		z-index: 999;
		height: 2.4rem;
		line-height: 2.4rem;
		border-bottom:1px solid #dfdfdf;
	}
	.item-header .hd-back{
		position: absolute;
	    left: 0;
	    top: 0;
	    width: 2rem;
	    height: 2.2rem;
	    color: #434343;
	    text-decoration: none;
	}
	.hd-back::after{
		content: "";
	    width: 0.5rem;
	    height: 0.5rem;
	    position: absolute;
	    top: 1rem;
	    left: 1rem;
	    border-bottom: 1px solid #5d5d5d;
	    border-right: 1px solid #5d5d5d;
	    transform: rotate(135deg);
	}
	.item-header-title{
		margin: 0 3rem;
		height: 2.4rem;
		line-height: 2.4rem;
	}
	.item-header-title ul{
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
	}
	.item-header-title ul li{
		flex-grow: 2;
	}
	.item-header-title ul li a{
		display: block;
		text-align: center;
	}
	.hd-right{
		font-size: .7rem;
		position: absolute;
		width: 2rem;
		right: 0;
		top: 0;
		height: 2.4rem;
		line-height: 2.4rem;
	}
	.hd-right .dot{
		position: absolute;
	    top: 50%;
	    left: .5rem;
	    width: .25rem;
	    height: .25rem;
	    background: #999;
	    border-radius: 50%;
	}
	.hd-right span::after,.hd-right span::before{
		display: block;
	    content: '';
	    position: absolute;
	    background: #999;
	    width: .25rem;
	    height: .25rem;
	    border-radius: 50%;
	}
	.hd-right .dot::after{
		left: -.5rem;
	}
	.hd-right .dot::before{
		left: .5rem;
	}
	.describe-wrap{
		position: relative;
		background: #fff;
		margin-bottom: 0.55rem;
		margin-top: 2.4rem;
	}
	.describe-wrap::before{
		content: '';
	    position: absolute;
	    width: 200%;
	    left: 0;
	    top: 0;
	    border-bottom: 1px solid #D9D9D9;
	    border-top: 1px solid #D9D9D9;
	    transform-origin: 0 0;
	    transform: scale(0.5);
	    border-radius: 1.1vw;
	}
	.decribe-wrap-show{
		position: relative;
	}
	.show-text{
		padding: 0.32rem 0.75rem 0.48rem
	}
	.show-text .m-title{
		color: #333;
		height: 0.96rem;
		line-height: 0.96rem;
	}
	.show-text .m-title i{
		background: #ca0915;
	    color: #fff;
	    height: 0.64rem;
	    line-height: 0.56rem;
	    padding: 0 0.05rem;
	    border-radius: 0.15rem;
	    margin-right: 0.35rem;
	    float: left;
	    margin-top: 0.128rem;
	    font-size: 0.6rem;
    	height: 0.64rem;
	}
	.m-title label {
	    word-break: keep-all;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
		font-size: .6rem;
	    max-width: 12.64rem;
	    display: inline-block;
	}
	.s-title{
		color: #999;
		font-size: 0.58rem;
		margin-top: 0.62rem;
	}
	.sell-title{
		font-size: 0.7rem;
	    color: #ca0915;
	    margin-top: 0.32rem;
	}
	.price{
		color: #ca0915;
		overflow:hidden;
		margin-top: 0.32rem;
		width: 100%;
	}
	.price span{
		font-weight: bold;
	    font-size: 0.7rem;
	    float: left;
	    color: #ca0915;
	}
	.price span em{
		font-style: normal;
		font-weight: 700;
		color: #ca0915;
		font-size: 0.9rem;
	}
	.form-item{
		background-color: #f8f8f8;
		overflow:hidden;
		width: 100%;
		overflow: hidden;
	    line-height: 120%;
	    padding: 0.48rem 0.75rem 0.48rem 0.75rem;
	    font-size: 0.6rem;
	}
	.form-item em{
		color: #cc0103;
	    float: left;
	    margin-right: 0.4rem;
	    padding: 0 0.16rem;
	    text-align: center;
	    border-radius: .15rem;
	    border: 1px #cc0103 solid;
	    font-weight: bold;
	}
	.form-item span{
		float: left;
	    display: block;
	    width: 12.32rem;
	}
	.oitem{
		margin-top: 1rem;
	}
	.minb{
		border-top:1px solid #D9D9D9;
		border-bottom:1px solid #D9D9D9;
		padding: 0.74rem 0.75rem;
	    overflow: hidden;
	    position: relative;
		font-size: .6rem;
	    background: #fff;
	}
	.minb>a{
		color: #666666;
	    float: left;
	    padding-right: 5%;
	}
	.minb .r-slip{
		position: absolute;
	    right: 10%;
	    top: 40%;
	    z-index: 1;
	    display: block;
	    width: .3rem;
	    height: .3rem;
	    border: 1px solid #c7c7c7;
	    border-top: transparent;
	    border-right: transparent;
	    transform: rotate(-135deg);
	}
	.space-top{
   		border-top: none;
   		border-bottom: 1px solid #D9D9D9;
   		margin-bottom: 0.55rem;
	}
	.form-item1{
		/*padding: 0.736rem 0.75rem;*/
		overflow: hidden;
		/*position: relative;*/
	}
	.form-item1 a{
		color: #666666;
	    float: left;
	    padding-right: 5%;
	}
	.item1-right{
		width: 4.7rem;
	    background-size: 100% 100%;
	    position: absolute;
	    right: 0.64rem;
	    top: 50%;
	    transform: translateY(-50%);
	    height: 1.44rem;
	}
	.item1-right button{
		float: left;
	    width: 1.44rem;
	    border:none;
	    outline: none;
	    text-align: center;
	    font-size: .6rem;
	    margin-left: .12rem;
	    height: 1.44rem;
	    background-color: #dedede;
	}
	.form-item1 p{
		color: #666666;
	    float: left;
	    padding-right: 5%;
	}
	.form-item1 span {
		float: left;
	    display: block;
	    width: 80%;
	}
	.form-item1 span em {
		font-style: normal;
	    color: #333;
		font-size: .6rem;
	    display: block;
	    margin-bottom: 3%;
	}
	.form-item2 {
		overflow: hidden;
		position: relative;
		margin-bottom: 3%;
	}
	.form-item2 span{
		float: right;
	    margin-right: 6%;
	    color: #b2b2b2;
	    width: auto;
	    position: absolute;
	    right: .32rem;
	    top: 50%;
	    transform: translateY(-50%);
	    font-size: 0.6rem;
	}
	.form-item2 p{
		color: #666666;
	    float: left;
	    padding-right: 5%;
	}

	.space-out{
		margin: 0 0 2.5rem 0;
		background: #f2f2f2;
	}
	.form-item6{
		padding: .64rem 3% .96rem 3%;
		position: relative;
		text-align: center;
		background-color: #f2f2f2;
		margin-top: 0.55rem;
	}
	.form-item6 p{
		width: 80%;
	    border-bottom: 1px #dfdfdf solid;
	    position: absolute;
	    top: 50%;
	    left: 10%;
	    z-index: 0;
	}
	.form-item6 span{
		background-color: #f2f2f2;
	    color: #666666;
	    position: relative;
	    padding: 0 3%;
	    font-size: 0.6rem;
	}
	.down-wrap{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 2.5rem;
		background: #fff;
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		z-index: 999;
	}
	.down-wrap a{
		width: 20%;
		text-align: center;
		height: 100%;
		display: flex;
		font-size: .55rem;
		flex-flow: column nowrap;
		justify-content: center;
		border-left: 1px solid #f2f2f2;
		position: relative;
	}
	.down-wrap a>b{
        width:1rem;
        height: 1rem;
        line-height: 1rem;
        font-weight: normal;
        font-size: .6rem;
        text-align: center;
        background: #cc0103;
        border-radius: 50%;
        color: #fff;
        position: absolute;
        top: 0;
        right: 15%;
    }
	.down-wrap .shop{
		width: 40%;
		background: #ca0915;
    	color: #fff !important;
    	font-size: .7rem;
	}
</style>