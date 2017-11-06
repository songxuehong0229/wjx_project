<template>
	<div>
		<div class="allComments">
			<p>
				<span>全部</span>
				<b>({{allComments.total_comment}})</b>
			</p>
			<p>
				<span>好评</span>
				<b>({{allComments.good_comment}})</b>
			</p>
			<p>
				<span>中评</span>
				<b>({{allComments.medium_comment}})</b>
			</p>
			<p>
				<span>差评</span>
				<b>({{allComments.bad_comment}})</b>
			</p>
		</div>
		<ul class="selfComment">
			 <li v-for="(item,index) in comments" :key="index"> 
			<!-- <li> -->
				<p>
					<i><img src="/static/img/60-60.jpg" /></i>
					<b>{{item.NICKNAME}}</b>
					<span>{{item.create_at}}</span>
				</p>
				<div>
					<div>
						<i class="iconfont icon_heart">&#xe636;</i>
						<i class="iconfont icon_heart">&#xe636;</i>
						<i class="iconfont icon_heart">&#xe636;</i>
					</div>
					<p>{{item.content}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return{
				comments:[],
				allComments:{}
			}
		},
		methods:{
			getJSON(){
				fetch("/static/json/comment.json")
				.then(res=>res.json())
				.then(res =>{
					this.comments = res.comments;
					this.allComments = res.comment_static
					console.log(2222222222,res);
				})
			}
		},
		mounted(){
			this.getJSON();
		}
	}
</script>

<style scoped>
	.allComments{
		margin-top: 2.5rem;
		width: 100%;
		height: 3rem;
		display: flex;
		justify-content: center;
		background: #fff;
		font-size: .65rem;
		color: #434343;
	}
	.allComments>p{
		width: 25%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.allComments>p:first-of-type{
		color: #ca0103;
	}
	.allComments>p>b{
		font-weight: normal;
	}
	.selfComment>li{
		/* background: #fff; */
	}
	.selfComment>li>p{
		width: 100%;
		height: 2rem;
		margin-top: 10px;
		padding-left: 10px;
		display: flex;
		font-size: .6rem;
		color: #999;
		align-items: center;
		background: #fff; 
	}
	.selfComment>li>p>i{
		width: 12%;
		height: 100%;
	}
	.selfComment>li>p>i>img{
		width: 100%;
		border: 1px solid transparent;
		border-radius: 50%;		
	}
	.selfComment>li>p>b{
		font-weight: normal;
		width: 40%;
		padding-left: 10px;
	}
	.selfComment>li>p>span{
		width: 48%;
	}
	.selfComment>li>div{
		margin-top: 3px;
		background: #fff; 	
		height: 3rem;	
		padding: 0 10px;
	}
	.selfComment>li>div>div>.icon_heart{
		font-family: iconfont;
		color: #ca0103;
		font-size: 1.2rem;
	}
	.selfComment>li>div>p{
		font-size: .7rem;
		color: #999;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>