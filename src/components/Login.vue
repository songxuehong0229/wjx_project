<template>
    <!-- 包裹整个页面的div -->
    <div class="" id="login_box" >
        <div class="loginShow" v-show="isShow">
            <!-- 登录注册 -->
            <div class="topLogin">
				<router-link to="/" tag="p"><i class="iconfont icon_left">&#xe614;</i></router-link>
				<P class="wrapForm"><span class="login_box_title_lg">登录</span>
				<router-link to="/Register" tag="span" class="login_box_title_register">注册</router-link></P>
            </div>
            <form id="login_box_loginUser">
             	<table>    
					<tr>
						<td>账号:</td>
						<td><input class="input-left-margin" id="moblie_number" type="text" placeholder="请输入手机号码" ref="text" /></td>
					</tr> 
					<tr>
						<td>密码:</td>
						<td><input class="input-right-margin" id="login_password" type="password" placeholder="请输入您的密码" ref="psd"/></td>
					</tr>
				</table>
				<div class="login_sBox">
					<input type="submit" class="user-login" value="确定" @click="submit"></input>
				</div>
            </form>

        <div>           
        </div>
    </div>
    </div>
</template>

<script>
    export default{
      
        data(){
          return{
            isShow:true,
            time:5
          }      
        },
        methods:{
          //检查是否注册
          search:function(sto,stoval){
            let fflag = false;
              for(var i=0;i<localStorage.length;i++){
                if(sto==localStorage.key(i)&&stoval==localStorage.getItem(localStorage.key(i))){
                  fflag=true;
                }
              }
              return fflag
          },
          submit:function(){
            let accounts = this.$refs.text.value;
            let psd = this.$refs.psd.value;
            let j = false;
            j = this.search(accounts,psd);

            if(j){
              alert("登录成功");
              localStorage.setItem("fflag","true");
                  this.$router.push({
                      path: '/cart'
                  })
              this.$store.commit("checkLogin",j);
            }else{
              alert("密码或用户名错误")
              this.$refs.text.value = '';
              this.$refs.psd.value = '';
            }
          }
        
     }
    }
</script>

<style scoped>
    table{
      width: 100%;
      margin-top:1rem; 
    }
    #login_box{
      background: #f2f2f2;
    }
    .clearfix:after{
        content: '';
        display: block;
        clear: both;
        height: 0;
        visibility: hidden;
    }
     html{
        height: 100%；
    }
    body{
        height: 100%;
    }
    #login_box .topLogin>p:first-of-type{
		width: 100%;
		height: 2rem;
		line-height: 2rem;
		padding-left: 10px;
		/* background: red; */
		font-size: .7rem;
    }
	#login_box .topLogin>p:nth-of-type(2){
		width: 100%;
		height: 2rem;
		font-size: .7rem;
		display: flex;
		justify-content: center;
	}
	#login_box .topLogin>p:nth-of-type(2) span{
		width: 40%;
		text-align: center;
		background: #f2f2f2;
		margin: 0 5px;
	}
    #login_box .wrapForm{
      display: flex;
      flex-flow:nowrap row;
      justify-content: space-around;
      align-items: center;
      font-size: 0.6rem; 
      /*color: blue;*/
      height: 1.5rem;
      line-height: 1.5rem;
    }
   #login_box .wrapImg{
      background: #f2f2f2;
      height: 2rem;
      border-bottom:1px solid #ccc; 
    }
   #login_box table td:first-child{
      width: 30%;
      text-align: center;
      height: 1.5rem;
      line-height: 1.5rem;
      font-size: 0.6rem;
      color: #333;
	  padding-left: 30px;
      text-align: justify;
      text-align-last: justify
    }
   #login_box   table td:nth-child(2){
      width: 67%;
      text-align: center;
      height: 1.5rem;
      line-height: 1.5rem;
      font-size: 0.6rem;
      color: #333;
    }
   #login_box table tr{
      margin-top:0.2rem; 
    }
    #login_box table td:nth-child(2) input{
      width: 80%;
      background: #f2f2f2;
      height: 1.2rem;
      line-height: 1.5rem;
     }
	 #login_box table input{
		 outline: none;
		 border: none;
		 border-radius: 5px;
		 padding-left: 10px;
		 font-size: .6rem;
	 }
     #login_box .user-login {
        width: 86%;
        margin: 0.4rem auto;
        display: block;
        height: 1.5rem;
        background: #f2f2f2;
		outline: none;
		border: none;
		border-radius: 5px;
		font-size: .7rem;
      }
    #login_box  .loginShow{
        width: 100%;
        height: 30rem;
        background: white;
      }
  
    .login_box_title img{
        margin-top: .35rem;
        width: .75rem;
    }
	.icon_left{
		font-family: iconfont;
	}
</style>
