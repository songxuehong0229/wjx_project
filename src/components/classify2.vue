<template>
	<div style="background:#f2f2f2;">
		<div class="item-header">
			<a href="javascript:history.go(-1)" class="hd-back"></a>
			<div class="item-header-title">
				<ul>
					<li><router-link to="/classify2.376/classify2.1" active-class="active">商品</router-link></li>
					<li><router-link to="/classify2.376/details" active-class="active">详情</router-link></li>
					<li><router-link to="/classify2.376/comments" active-class="active">评论</router-link></li>
				</ul>
			</div>
			<div class="hd-right">
				<span class="dot"></span>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
	export default {
		
	}
</script>

<style scoped>
	.active{
		color: red;
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
	    width: .5rem;
	    height: .5rem;
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
		font-size: .6rem;
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
</style>