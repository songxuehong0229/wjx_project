<template>
    <div id="search">
        <div class="search_top">
            <a href="javascript:history.go(-1)" class="iconfont icon_left">&#xe614;</a>
            <input type="text" placeholder="搜索商品" v-model="msg" @keyup="search(msg)"/>
            <i class="iconfont icon_dot" @click="reveal">&#xe606;</i>
            <div class="spinner" v-show="spinner_show">
                <router-link tag="a" to="/"><i class="iconfont icon_search_home">&#xe604;</i>首页</router-link>
                <router-link tag="a" to="/category"><i class="iconfont icon_search_category">&#xe68d;</i>分类</router-link>
                <router-link tag="a" to="cart"><i class="iconfont icon_search_cart">&#xe601;</i>购物车</router-link>
                <router-link tag="a" to="mine"><i class="iconfont icon_search_mine">&#xe602;</i>我的</router-link>
                <span class="triangle"></span>
            </div>
        </div>
        <div class="search_cont" v-if="!msg">
            <p><i class="iconfont icon_fire">&#xe662;</i><span>热门搜索</span></p>
            <ul>
                <li>金玫瑰庄园干红葡萄酒</li>
                <li>奔富</li>
                <li>泽巴赫</li>
                <li>白马庄园</li>
                <li>安第斯钻石</li>
            </ul>
        </div>
        <div class="search_list" v-if="msg">
            <ul>
                <li v-for="(item,index) in searchItem" :key="index">{{item.chinese}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:"",
            spinner_show:false,
            searchItem : []
        }
    },
    methods:{
        reveal(){
            this.spinner_show=!this.spinner_show;
        },
        search(a){
            // console.log(1111111111111111,a)
            this.$http.jsonp('http://so.wangjiu.com/product/productfacet/?result_type=jsonp&keyword='+a)
                .then(function(res){
                    // console.log(2222222222222222222222222222222222,res)
                    return res.json();
                }).then(function(res){
                    this.searchItem = res.result
                    // console.log(res.result)
                })
        }  
    },
    updated(){
        // console.log(this.msg);
    }
}
</script>
<style type='text/css'>
    .search_top{
        width: 100%;
        height: 2rem;
        color: #434343;
        display: flex;
        justify-content: space-between;
        background: #fff;
        position: fixed;
        top: 0;
        z-index: 2
    }
    .spinner{
        background: #000;
        width: 5rem;
        height: 6rem;
        border-radius: 5px;
        position: absolute;
        top: 2rem;
        right: 10px;
        display: flex;
        flex-direction: column; 
    }
    .spinner>a{
        width: 100%;
        height: 1.5rem;
        line-height: 1.5rem;
        color: #fff;
        font-size: .6rem;
    }
    .icon_search_home{
        font-size: .9rem;
        margin: 0 10px;
        font-family: iconfont;
    }
    .icon_search_category{
        font-size: .9rem;
        margin: 0 10px;
        font-family: iconfont;
    }
    .icon_search_cart{
        font-size: .9rem;
        margin: 0 10px;
        font-family: iconfont;
    }
    .icon_search_mine{
        font-size: .9rem;
        margin: 0 10px;
        font-family: iconfont;
    }
    .spinner>.triangle{
        border: 15px solid transparent;
        position: absolute;
        top: -30px;
        right: 6px;
         border-bottom: 20px solid #000;         
    }
    .search_top>.icon_left{
        font-family: iconfont;
        width: 15%;  
        font-size: .8rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .search_top>input{
        width: 60%;
        height: 1.5rem;
        margin-top: .25rem;
        background: #f5f5f5;
        font-size: .7rem;
        padding-left: 10px;
        outline: none;
        border: none;
        border-radius: 10px;
    }
    .search_top>.icon_dot{
        font-family: iconfont;
        width: 15%;  
        font-size: .8rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .search_cont{
        width: 100%;
        height: 7rem;
        background: #fff;
        /* margin-top: 2.1rem; */
        position: relative;
        top: 2.1rem;
        display: flex;
        flex-direction: column;
    }
    .search_cont>p{
        font-size: .7rem;
        color: #434343;
        margin: 20px 10px 10px;
    }
    .search_cont>p>.icon_fire{
        font-family: iconfont;
        margin-right: 10px;
    }
    .search_cont>ul{
        font-size: .7rem;
        color: #999;
        display: flex;
        flex-flow: row wrap;
    }
    .search_cont>ul>li{
        font-size: .6rem;
        padding: 8px;
        border: 1px solid #999;
        border-radius: 5px;
        margin: 10px;
    }
    .search_list{
        width: 100%;
        /* height: 5rem; */
        /* background: red; */
        margin-top: 2.1rem;
        overflow-y: scroll; 
    }
    .search_list>ul>li{
        width: 100%;
        height: 2rem;
        background: #fff; 
        font-size: .6rem;   
        padding-left: 10px;
        border-bottom: 1px solid #f2f2f2;
    }
</style>