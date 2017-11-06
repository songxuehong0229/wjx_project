<template>
    <div id="cart">
        <p>购物车<span @click="change" v-if="changeShow">编辑</span><span @click="change" v-if="!changeShow">完成</span></p>
        <div class="cart_empty" v-if="items.length==0">
            <div class="cart_empty_notice">
                <span></span>
                <p>您的购物车是空的</p>
            </div>
            <div class="cart_empty_btn">
                <router-link :to="{name:'Login'}" tag='a'>登录</router-link>
                <router-link tag="a" to="/">去逛逛</router-link>
            </div>
        </div>
        <div class="cart_goods" v-if="items.length!=0">
            <div class="cart_brand">
                <span class="check" @click="allCheck">
                    <img src="../../static/img/c01.png" v-if="!allShow"/><img src="../../static/img/c02.png" v-if="allShow"/>
                </span>
                <p>网酒网</p>
            </div>
            <ul class="cart_det">
                <li v-for="(item,index) in items" :key="index">
                    <span class="check" @click="check(index)">
                        <img src="../../static/img/c01.png" v-if="!item.productShow"/>
                        <img src="../../static/img/c02.png" v-if="item.productShow"/>
                    </span>
                    <p><img :src="'http://img0.wangjiu.com/'+item.productImg"/></p>
                    <div class="cart_cont">
                        <p>
                             <b>{{item.productName}}</b> 
                             <i>{{item.productDes}}</i> 
                        </p>
                         <h4>￥{{item.productPrice}}</h4> 
                    </div>
                    <div class="cart_cal">
                         <button @click="reduce(index)">-</button>
                         <span>{{item.productCount}}</span>
                         <button @click="add(index)">+</button> 
                    </div>
                </li>
            </ul>
            <div class="cart_total">
                <span class="check" @click="allCheck">
                    <img src="../../static/img/c01.png" v-if="!allShow"/><img src="../../static/img/c02.png" v-if="allShow"/>
                </span>
                <i>全选</i>
                <div v-show="changeShow">
                    <p>合计:<span>￥{{priceAll}}</span></p>
                    <b>已优惠:￥0.00</b>
                </div>
                <h4 v-if="changeShow" @click="checkLogin">结算</h4>
                <h4 v-if="!changeShow" @click="del">删除</h4>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            allShow:true,
            changeShow:true,
            count:0,
            login:false
        }
    },
    computed:{
        items(){
            return this.$store.getters.cartItems
        },
        priceAll(){
            return this.$store.getters.priceAll
        }
    },
    methods : {
        get(){
            console.log(111);
        },
        del(){
            this.$store.commit("del");
            if(this.items.length == 0){
                this.changeShow = true;
            }
        },
        add(index){
            return this.$store.commit("add",index);    
        },
        reduce(index){
            return this.$store.commit("reduce",index);

        },
        allCheck(){
            this.allShow = !this.allShow;
            return this.$store.commit("allCheck",this.allShow)
        },
        check(index){
            this.count =0;
            this.$store.commit("check",index);
            for(let i=0;i<this.items.length;i++){
                if(this.items[i].productShow == true){
                    this.count++;
                }
            }
            if(this.count == this.items.length){
                this.allShow = true;
            }else{
                this.allShow = false;
            }
        },
        change(){
            this.changeShow = !this.changeShow
        },
        checkLogin(){
            // console.log(this.login)
            // console.log(this.$store.state.isLogin)
            this.login = this.$store.state.isLogin;
            if (this.login==true) {
                // this.$router.push({
                //     path:"./daicart"
                // })
            }else{
                this.$router.push({
                        path:"./Login"
                })
            }
        }
    }
}
</script>
<style type='text/css' scoped>
    #cart>p{
        text-align: center;
        font-size: .7rem;
        width: 100%;
        height: 2rem;
        line-height: 2rem;
        background: #fff;
        color: #434343;
        /* display: flex;
        justify-content: flex-end; */
    }
    #cart>p>span{
        float: right;

        margin: 0 10px 0 -20px
    }
    #cart .cart_empty{
        margin-top: 6.4rem; 
        color: #999;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
    }
    #cart .cart_empty_notice{
        text-align: center;
    }
    #cart .cart_empty_notice>p{
        font-size: .6rem;
    }
    #cart .cart_empty_notice>.cart_cart{
        font-family: iconfont;
        font-size: 3.5rem;
        color: #999;
    }
    #cart .cart_empty_btn{
        /* width: 100%; */
        margin-top: 3rem;
    }
    #cart .cart_empty_btn>a{
        display: inline-block;
        width: 5rem;
        height: 1.5rem;
        font-size: .6rem;
        line-height: 1.5rem;
        text-align: center;
        border: 1px solid #999;
        border-radius: 5px;
        margin: 0 5px;
    }
    #cart .cart_goods{
        width: 100%;
        background: #fff;
        margin-top: 26px;
    }
    #cart .cart_goods>div{
        width: 100%;
        height: 2rem;
        display: flex;
        align-items: center;
        font-size: .7rem;
    }
    .cart_goods .check{
        width: 15%;
        line-height: 15%;
        display: flex;
        align-items: center;
        justify-content: center;
    } 
    .check>img{
        width: 40%;
    }  
    .cart_det{
        width: 100%;
        background: #fff;
       
    }
    .cart_det>li{
        width: 100%;
        height: 5.2rem;
        display: flex;
         position: relative;
    }
    .cart_det>li>p{
        width: 28%;
        margin: 5px;
        display: flex;
        align-items: center;
    }
    .cart_det>li>p>img{
        width: 100%;
        border: 1px solid #ccc;
    }
    .cart_det>li>.cart_cont{
        width: 57%;
        margin: 10px 0 10px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .cart_det>li>.cart_cont>p{
        display: flex;
        flex-direction: column;
    }
    .cart_det>li>.cart_cont b{
        font-size: .6rem;
        font-weight: normal;
        color: #434343; 
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .cart_det>li>.cart_cont i{
        font-size: .5rem;
        color: #999;
        margin-top: 10px; 
    }
    .cart_det>li>.cart_cont>h4{
        font-size: .6rem;
        font-weight: normal;
        color: #ca0915;
    }
    .cart_det>li>.cart_cal{
        position: absolute;
        right: 10px;
        bottom: 10px;
        display: flex;
        align-items: flex-end;
    }
    .cart_det>li>.cart_cal>button{
        display: inline-block;
        width: 37px;
        height: 37px;
        line-height: 37px; 
        outline: none;
        background: #f2f2f2;
        border: none;
    }
    .cart_det>li>.cart_cal>span{
        display: inline-block;
        width: 37px;
        height: 37px;
        line-height: 37px;
        text-align: center;
        background: #f2f2f2;
        margin: 0 2px;
    }
    .cart_goods .cart_total{
        position: fixed;
        left: 0;
        bottom: 2rem;
        padding-right: 20px;
        background: #fff;
        /* display: flex; */
    }
    .cart_goods .cart_total>i{
        width: 15%;
        font-size: .7rem;
        color: #434343;
    }
    .cart_goods .cart_total>div{
        width: 45%;
        display: flex;
        margin-right: 20px;
        flex-direction: column;
        align-items: flex-end;
    }
    .cart_goods .cart_total>div>p{
        font-size: .68rem;
        color: #434343;
    }
    .cart_goods .cart_total>div>p>span{
        color: #ca0915;
    }
    .cart_goods .cart_total>div>b{
        font-size: .55rem;
        color: #999;
        font-weight: normal;
    }
    .cart_goods .cart_total>h4{
        width: 25%;
        height: 100%;
        color: #fff;
        margin-left: 10px;
        position: absolute;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #ca0915;
    }
</style>