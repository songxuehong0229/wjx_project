<template>
    <!-- 包裹整个页面的div -->
    <div class="" id="register" >
        <!-- 注册帐号 -->
        <p class="MyLogin"><i class="iconfont icon_left" @click="back">&#xe614;</i><span>注册</span></p>
        <form>
            <table>
                <tr>
                    <td><span>请输入手机号</span>:</td>
                    <td><input type="text" ref="phone" placeholder="邮箱/手机号"></td>
                    <td></td>
                </tr>
                <tr>
                    <td><span>请输入密码</span>:</td>
                    <td><input type="password" ref="psd" placeholder="密码"></td>
                    <td></td>
                </tr>
                <tr>  
                    <td><span>验证码</span>:</td>
                    <td> <input id="yanzheng_code" type="text" placeholder="请输入验证码" ref="yzcode" /></td>
                    <td><span @click.prevent="createCode">{{rcode}}</span></td>
                </tr>
            </table>
            <button  @click="validate">注册</button>
        </form>
    </div>

</template>

<script>
    export default{
        data(){
            return{
                rcode:'1244',
                randomArr : [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
                     'S','T','U','V','W','X','Y','Z']
                }
              
        },
        methods:{
            back(){
                history.go(-1);
            },
            createCode:function(){
                var code = ''
                var codeLength = 4
                let checkCode = this.$refs.phone.value;
                for(var i=0;i<codeLength;i++){
                    var index = Math.floor(Math.random()*36);
                    code += this.randomArr[index];
                };
                this.rcode = code;
            },
            validate:function(){
                 let inputCode = this.$refs.yzcode.value.toUpperCase();
                 if(inputCode.length==0){
                    alert("请输入验证码！")
                 }else if( inputCode!=this.rcode){
                    alert("验证码输入错误！")
                    this.createCode();//刷新验证码
                    this.$refs.yzcode.value = "";//清空文本框
                 }else if(this.isRepeat(this.$refs.phone.value)){
                    alert("已注测得账号，请登录")
                 }else{
                    alert("注册成功！")
                    localStorage.setItem(this.$refs.phone.value,this.$refs.psd.value)
                    this.$router.push({
                        path:'/Login'
                    })
                 }
            },
            isRepeat:function(sto){
                var rp = false
                for(var i=0;i<=localStorage.length;i++){
                     if ( sto == localStorage.key(i)) {
                        rp = true;
                  }
                }
                return rp;
            }
        },
        mounted(){
            this.createCode();
        }
    }
</script>

<style scoped> 
    #register .checkCode{
        height: 1.5rem;
        width: 2rem;
        border: 1px solid #ccc;
    }  
     #register .MyLogin{
        height: 2.5rem;
        width: 100%;
        text-align: center;
        line-height: 2.5rem;
        font-size: 0.8rem;
        color: #434343;
        background: #fff;
        margin-bottom: 10px; 
    }
     #register form {
        width: 100%;
        /* height: 5rem; */
        font-size: .6rem;
        padding: 0 15px;
        background: white;
        padding-bottom: 20px;
    }
    #register table {
        width: 100%;
    }
    #register table td{
        height: 2rem;
    }
    #register table tr>td:first-of-type{
        width: 35%;
        font-size: .6rem;
        padding-right: 20px;
    }
    #register table tr>td:first-of-type>span{
        display: inline-block;
        width: 90%;
        text-align: justify;
        text-align-last: justify;
    }
    #register table tr>td:nth-of-type(2){
        width: 50%;
    }
    #register table tr>td:last-of-type{
        width: 15%;
        text-align: center;
    }
    #register table td input{
        width: 100%;
        height: 1.5rem;
        font-size: .6rem;
        padding-left: 10px;
        outline: none;
        border: 1px solid #999;
        border-radius: 5px;
    }
    #register button{
        display: block;
        font-size: .6rem;
        width: 60%;
        margin: 10px auto;
        height: 1.5rem;
        background: #ccc;
        outline: none;
        border: none;
        border-radius: 5px;
    }
    .icon_left{
		font-family: iconfont;
        float: left;
        margin-left: 10px;
        margin-right: -10px;
	}
</style>
